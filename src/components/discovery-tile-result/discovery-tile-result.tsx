import {Component, Element, Event, EventEmitter, h, Listen, Prop, State, Watch} from '@stencil/core';
import {ChartType} from "../../model/types";
import {Param} from "../../model/param";
import {Logger} from "../../utils/logger";
import {DataModel} from "../../model/dataModel";
import {Utils} from "../../utils/utils";
import {GTSLib} from "../../utils/gts.lib";
import {DiscoveryEvent} from "../../model/discoveryEvent";

@Component({
  tag: 'discovery-tile-result',
  styleUrl: 'discovery-tile-result.scss',
  shadow: true,
})
export class DiscoveryTileResultComponent {
  @Prop() result: DataModel | string;
  @Prop() type: ChartType;
  @Prop() start: number;
  @Prop() options: Param | string = new Param();
  @Prop({mutable: true}) width: number;
  @Prop({mutable: true}) height: number;
  @Prop() debug: boolean = false;
  @Prop() unit: string = '';
  @Prop() url: string;
  @Prop() chartTitle: string;

  @Element() el: HTMLElement;

  @State() execTime = 0;
  @State() bgColor: string;
  @State() fontColor: string;
  @State() innerResult: DataModel | string;
  @State() innerStyle: { [k: string]: string; };

  @Event({
    eventName: 'discoveryEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) discoveryEvent: EventEmitter<DiscoveryEvent>;

  private LOG: Logger;
  private wrapper: HTMLDivElement;
  private title: HTMLDivElement;
  private innerHeight: number;
  private innerWidth: number;
  private innerStyles: any;

  @Watch('result')
  updateRes() {
    this.innerResult = GTSLib.getData(this.result);
    this.parseResult();
  }

  @Listen('discoveryEvent', {target: 'window'})
  discoveryEventHandler(event: CustomEvent<DiscoveryEvent>) {
    const res = Utils.parseEventData(event.detail, (this.options as Param).eventHandler);
    if (res.data) {
      this.innerResult = res.data;
      this.parseResult();
    }
    if (res.style) {
      this.innerStyle = {...this.innerStyle, ...res.style as { [k: string]: string }};
    }
  }

  componentWillLoad() {
    this.LOG = new Logger(DiscoveryTileResultComponent, this.debug);
    this.LOG.debug(['componentWillLoad'], {
      type: this.type,
      options: this.options,
      result: this.result
    });
    if (!!this.options && typeof this.options === 'string') {
      this.options = JSON.parse(this.options);
    }
    this.innerResult = GTSLib.getData(this.result);
    this.LOG.debug(['componentWillLoad'], {
      type: this.type,
      options: this.options,
      result: this.result
    });
  }

  componentDidLoad() {
    this.parseResult();
  }

  drawn() {
    if (this.execTime === 0) {
      this.execTime = new Date().getTime() - this.start;
    }
  }

  getView() {
    switch (this.type) {
      case "line":
      case "area":
      case "scatter":
      case "spline-area":
      case "spline":
      case 'step':
      case 'step-after':
      case 'step-before':
        return <discovery-line
          result={this.innerResult}
          onDraw={() => this.drawn()}
          type={this.type}
          unit={this.unit}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      case 'annotation':
        return <discovery-annotation
          result={this.innerResult}
          onDraw={() => this.drawn()}
          type={this.type}
          unit={this.unit}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      case 'bar':
        return <discovery-bar
          result={this.innerResult}
          onDraw={() => this.drawn()}
          type={this.type}
          unit={this.unit}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      case 'display':
        return <discovery-display
          result={this.innerResult}
          onDraw={() => this.drawn()}
          type={this.type}
          unit={this.unit}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      case 'map':
        return <discovery-map
          result={this.innerResult}
          onDraw={() => this.drawn()}
          type={this.type}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      case 'image':
        return <discovery-image
          result={this.innerResult}
          onDraw={() => this.drawn()}
          type={this.type}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      case 'button':
        return <discovery-button
          result={this.innerResult}
          onDraw={() => this.drawn()}
          url={this.url}
          type={this.type}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      case 'gauge':
      case 'circle':
        return <discovery-gauge
          result={this.innerResult}
          onDraw={() => this.drawn()}
          type={this.type}
          unit={this.unit}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      case 'linear-gauge':
        return <discovery-linear-gauge
          result={this.innerResult}
          onDraw={() => this.drawn()}
          type={this.type}
          unit={this.unit}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      case 'pie':
      case 'doughnut':
      case 'rose':
        return <discovery-pie
          result={this.innerResult}
          onDraw={() => this.drawn()}
          type={this.type}
          unit={this.unit}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      case 'tabular':
        return <discovery-tabular
          result={this.innerResult}
          onDraw={() => this.drawn()}
          type={this.type}
          unit={this.unit}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      case 'plot':
        return <discovery-plot
          result={this.innerResult}
          onDraw={() => this.drawn()}
          type={this.type}
          unit={this.unit}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      case 'svg':
        return <discovery-svg
          result={this.innerResult}
          onDraw={() => this.drawn()}
          type={this.type}
          unit={this.unit}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      case 'input:text':
      case 'input:autocomplete':
      case 'input:list':
      case 'input:secret':
        return <discovery-input
          result={this.innerResult}
          onDraw={() => this.drawn()}
          type={this.type}
          options={this.options}
          height={this.innerHeight}
          width={this.innerWidth}
          debug={this.debug}
        />;
      default:
        return '';
    }
  }

  render() {
    return [
      <style>{this.generateStyle(this.innerStyle)}</style>,
      <div class="discovery-tile"
           style={{
             backgroundColor: this.bgColor,
             color: this.fontColor,
             height: (this.height) + 'px'
           }}>
        {this.chartTitle ? <h2 ref={(el) => this.title = el as HTMLDivElement}>{this.chartTitle}</h2> : ''}
        <div class="discovery-chart-wrapper" ref={(el) => this.wrapper = el as HTMLDivElement}>
          {this.innerHeight ? this.getView() : ''}
        </div>
      </div>
    ];
  }

  private parseResult() {
    setTimeout(() => {
      this.setHeight();
      this.handleCSSColors();
      ((this.innerResult as unknown as DataModel).events || [])
        .filter(e => !!e.value)
        .forEach(e => {
          this.LOG.debug(['parseResult', 'emit'], {discoveryEvent: e});
          this.discoveryEvent.emit(e)
        });
    });
  }

  private setHeight() {
    if (this.wrapper) {
      const dims = Utils.getContentBounds(this.wrapper.parentElement);
      this.height = dims.h;
      this.width = dims.w;
      this.innerWidth = dims.w;
      this.innerHeight = dims.h - (this.chartTitle ? Utils.getContentBounds(this.title).h + 10 : 0);
    }
  }

  private generateStyle(styles: { [k: string]: string }): string {
    this.innerStyles = {...this.innerStyles, ...styles, ...(this.options as Param).customStyles || {}};
    return Object.keys(this.innerStyles || {}).map(k => k + ' { ' + this.innerStyles[k] + ' }').join('\n');
  }

  private handleCSSColors() {
    let fontColor = Utils.getCSSColor(this.el, '--warp-view-font-color', '#000000');
    fontColor = ((this.options as Param) || {fontColor}).fontColor || fontColor;

    let bgColor = Utils.getCSSColor(this.el, '--warp-view-bg-color', 'transparent');
    bgColor = ((this.options as Param) || {bgColor}).bgColor || bgColor;

    const dm: Param = (((this.innerResult as unknown as DataModel) || {
      globalParams: {bgColor, fontColor}
    }).globalParams || {bgColor, fontColor}) as Param;

    this.bgColor = dm.bgColor;
    this.fontColor = dm.fontColor;
  }
}
