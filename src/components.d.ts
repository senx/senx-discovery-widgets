/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DataModel } from "./model/dataModel";
import { ChartType } from "./model/types";
import { Param } from "./model/param";
import { XAXisOption } from "echarts/types/dist/shared";
import { DiscoveryEvent } from "./model/discoveryEvent";
import { Tile } from "./model/tile";
import { Dashboard } from "./model/dashboard";
export namespace Components {
    interface DiscoveryAnnotation {
        "debug": boolean;
        "export": (type?: 'png' | 'svg') => Promise<string>;
        "height": number;
        "hide": (regexp: string) => Promise<void>;
        "options": Param | string;
        "resize": () => Promise<void>;
        "result": DataModel | string;
        "setFocus": (regexp: string, ts: number) => Promise<void>;
        "setZoom": (dataZoom: { start: number; end: number; }) => Promise<void>;
        "show": (regexp: string) => Promise<void>;
        "type": ChartType;
        "unFocus": () => Promise<void>;
        "unit": string;
        "width": number;
    }
    interface DiscoveryBar {
        "debug": boolean;
        "export": (type?: 'png' | 'svg') => Promise<string>;
        "height": number;
        "hide": (regexp: string) => Promise<void>;
        "options": Param | string;
        "resize": () => Promise<void>;
        "result": DataModel | string;
        "setFocus": (regexp: string, ts: number) => Promise<void>;
        "setZoom": (dataZoom: { start: number; end: number; }) => Promise<void>;
        "show": (regexp: string) => Promise<void>;
        "type": ChartType;
        "unFocus": () => Promise<void>;
        "unit": string;
        "width": number;
    }
    interface DiscoveryButton {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "resize": () => Promise<void>;
        "result": DataModel | string;
        "type": ChartType;
        "url": string;
        "width": number;
    }
    interface DiscoveryDashboard {
        "autoRefresh": number;
        "cellHeight": number;
        "cols": number;
        "dashboardTitle": string;
        "debug": boolean;
        "options": Param | string;
        "type": 'scada' | 'dashboard';
        "url": string;
    }
    interface DiscoveryDisplay {
        "debug": boolean;
        "export": (type?: 'png' | 'svg') => Promise<any>;
        "height": number;
        "options": Param | string;
        "resize": () => Promise<void>;
        "result": DataModel | string;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoveryEmpty {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "result": DataModel | string;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoveryGauge {
        "debug": boolean;
        "export": (type?: 'png' | 'svg') => Promise<string>;
        "height": number;
        "hide": (regexp: string) => Promise<void>;
        "options": Param | string;
        "resize": () => Promise<void>;
        "result": DataModel | string;
        "show": (regexp: string) => Promise<void>;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoveryImage {
        "debug": boolean;
        "export": (type?: 'png' | 'svg') => Promise<string[]>;
        "height": number;
        "options": Param | string;
        "result": DataModel | string;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoveryInput {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "resize": () => Promise<void>;
        "result": DataModel | string;
        "type": ChartType;
        "url": string;
        "width": number;
    }
    interface DiscoveryLine {
        "debug": boolean;
        "export": (type?: 'png' | 'svg') => Promise<string>;
        "height": number;
        "hide": (regexp: string) => Promise<void>;
        "options": Param | string;
        "resize": () => Promise<void>;
        "result": DataModel | string;
        "setFocus": (regexp: string, ts: number, value?: number) => Promise<void>;
        "setZoom": (dataZoom: { start: number; end: number; }) => Promise<void>;
        "show": (regexp: string) => Promise<void>;
        "type": ChartType;
        "unFocus": () => Promise<void>;
        "unit": string;
        "width": number;
    }
    interface DiscoveryLinearGauge {
        "debug": boolean;
        "export": (type?: 'png' | 'svg') => Promise<string>;
        "height": number;
        "hide": (regexp: string) => Promise<void>;
        "options": Param | string;
        "resize": () => Promise<void>;
        "result": DataModel | string;
        "show": (regexp: string) => Promise<void>;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoveryMap {
        "debug": boolean;
        "export": (type?: 'png' | 'svg') => Promise<any>;
        "height": number;
        "hide": (regexp: string) => Promise<void>;
        "options": Param | string;
        "resize": () => Promise<void>;
        "result": DataModel | string;
        "setFocus": (regexp: string, ts: number) => Promise<void>;
        "show": (regexp: string) => Promise<void>;
        "type": ChartType;
        "unFocus": () => Promise<void>;
        "width": number;
    }
    interface DiscoveryModal {
        "data": Tile | Dashboard;
        "debug": boolean;
        "open": () => Promise<void>;
        "options": Param | string;
        "url": string;
    }
    interface DiscoveryPageable {
        "data": { name: string, values: any[], headers: string[] };
        "debug": boolean;
        "elemsCount": number;
        "options": Param;
        "windowed": number;
    }
    interface DiscoveryPie {
        "debug": boolean;
        "export": (type?: 'png' | 'svg') => Promise<string>;
        "height": number;
        "hide": (regexp: string) => Promise<void>;
        "options": Param | string;
        "resize": () => Promise<void>;
        "result": DataModel | string;
        "show": (regexp: string) => Promise<void>;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoverySpinner {
        "message": string;
    }
    interface DiscoverySvg {
        "chartTitle": string;
        "debug": boolean;
        "export": (type?: 'png' | 'svg') => Promise<any>;
        "height": number;
        "options": Param | string;
        "resize": () => Promise<void>;
        "result": DataModel | string;
        "start": number;
        "type": ChartType;
        "unit": string;
        "url": string;
        "width": number;
    }
    interface DiscoveryTabular {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "resize": () => Promise<void>;
        "result": DataModel | string;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoveryTile {
        "autoRefresh": number;
        "chartTitle": string;
        "debug": boolean;
        "exec": (refresh?: boolean) => Promise<void>;
        "export": (type?: 'png' | 'svg') => Promise<any>;
        "hide": (regexp: string) => Promise<void>;
        "language": 'warpscript' | 'flows';
        "options": Param | string;
        "resize": () => Promise<void>;
        "setFocus": (regexp: string, ts: number, value?: number) => Promise<void>;
        "setZoom": (dataZoom: { start: number; end: number; }) => Promise<void>;
        "show": (regexp: string) => Promise<void>;
        "type": ChartType;
        "unFocus": () => Promise<void>;
        "unit": string;
        "url": string;
        "vars": string;
    }
    interface DiscoveryTileResult {
        "chartTitle": string;
        "debug": boolean;
        "export": (type?: 'png' | 'svg') => Promise<any>;
        "height": number;
        "hide": (regexp: string) => Promise<void>;
        "options": Param | string;
        "resize": () => Promise<void>;
        "result": DataModel | string;
        "setFocus": (regexp: string, ts: number, value?: number) => Promise<void>;
        "setZoom": (dataZoom: { start: number; end: number; }) => Promise<void>;
        "show": (regexp: string) => Promise<void>;
        "start": number;
        "type": ChartType;
        "unFocus": () => Promise<void>;
        "unit": string;
        "url": string;
        "width": number;
    }
}
declare global {
    interface HTMLDiscoveryAnnotationElement extends Components.DiscoveryAnnotation, HTMLStencilElement {
    }
    var HTMLDiscoveryAnnotationElement: {
        prototype: HTMLDiscoveryAnnotationElement;
        new (): HTMLDiscoveryAnnotationElement;
    };
    interface HTMLDiscoveryBarElement extends Components.DiscoveryBar, HTMLStencilElement {
    }
    var HTMLDiscoveryBarElement: {
        prototype: HTMLDiscoveryBarElement;
        new (): HTMLDiscoveryBarElement;
    };
    interface HTMLDiscoveryButtonElement extends Components.DiscoveryButton, HTMLStencilElement {
    }
    var HTMLDiscoveryButtonElement: {
        prototype: HTMLDiscoveryButtonElement;
        new (): HTMLDiscoveryButtonElement;
    };
    interface HTMLDiscoveryDashboardElement extends Components.DiscoveryDashboard, HTMLStencilElement {
    }
    var HTMLDiscoveryDashboardElement: {
        prototype: HTMLDiscoveryDashboardElement;
        new (): HTMLDiscoveryDashboardElement;
    };
    interface HTMLDiscoveryDisplayElement extends Components.DiscoveryDisplay, HTMLStencilElement {
    }
    var HTMLDiscoveryDisplayElement: {
        prototype: HTMLDiscoveryDisplayElement;
        new (): HTMLDiscoveryDisplayElement;
    };
    interface HTMLDiscoveryEmptyElement extends Components.DiscoveryEmpty, HTMLStencilElement {
    }
    var HTMLDiscoveryEmptyElement: {
        prototype: HTMLDiscoveryEmptyElement;
        new (): HTMLDiscoveryEmptyElement;
    };
    interface HTMLDiscoveryGaugeElement extends Components.DiscoveryGauge, HTMLStencilElement {
    }
    var HTMLDiscoveryGaugeElement: {
        prototype: HTMLDiscoveryGaugeElement;
        new (): HTMLDiscoveryGaugeElement;
    };
    interface HTMLDiscoveryImageElement extends Components.DiscoveryImage, HTMLStencilElement {
    }
    var HTMLDiscoveryImageElement: {
        prototype: HTMLDiscoveryImageElement;
        new (): HTMLDiscoveryImageElement;
    };
    interface HTMLDiscoveryInputElement extends Components.DiscoveryInput, HTMLStencilElement {
    }
    var HTMLDiscoveryInputElement: {
        prototype: HTMLDiscoveryInputElement;
        new (): HTMLDiscoveryInputElement;
    };
    interface HTMLDiscoveryLineElement extends Components.DiscoveryLine, HTMLStencilElement {
    }
    var HTMLDiscoveryLineElement: {
        prototype: HTMLDiscoveryLineElement;
        new (): HTMLDiscoveryLineElement;
    };
    interface HTMLDiscoveryLinearGaugeElement extends Components.DiscoveryLinearGauge, HTMLStencilElement {
    }
    var HTMLDiscoveryLinearGaugeElement: {
        prototype: HTMLDiscoveryLinearGaugeElement;
        new (): HTMLDiscoveryLinearGaugeElement;
    };
    interface HTMLDiscoveryMapElement extends Components.DiscoveryMap, HTMLStencilElement {
    }
    var HTMLDiscoveryMapElement: {
        prototype: HTMLDiscoveryMapElement;
        new (): HTMLDiscoveryMapElement;
    };
    interface HTMLDiscoveryModalElement extends Components.DiscoveryModal, HTMLStencilElement {
    }
    var HTMLDiscoveryModalElement: {
        prototype: HTMLDiscoveryModalElement;
        new (): HTMLDiscoveryModalElement;
    };
    interface HTMLDiscoveryPageableElement extends Components.DiscoveryPageable, HTMLStencilElement {
    }
    var HTMLDiscoveryPageableElement: {
        prototype: HTMLDiscoveryPageableElement;
        new (): HTMLDiscoveryPageableElement;
    };
    interface HTMLDiscoveryPieElement extends Components.DiscoveryPie, HTMLStencilElement {
    }
    var HTMLDiscoveryPieElement: {
        prototype: HTMLDiscoveryPieElement;
        new (): HTMLDiscoveryPieElement;
    };
    interface HTMLDiscoverySpinnerElement extends Components.DiscoverySpinner, HTMLStencilElement {
    }
    var HTMLDiscoverySpinnerElement: {
        prototype: HTMLDiscoverySpinnerElement;
        new (): HTMLDiscoverySpinnerElement;
    };
    interface HTMLDiscoverySvgElement extends Components.DiscoverySvg, HTMLStencilElement {
    }
    var HTMLDiscoverySvgElement: {
        prototype: HTMLDiscoverySvgElement;
        new (): HTMLDiscoverySvgElement;
    };
    interface HTMLDiscoveryTabularElement extends Components.DiscoveryTabular, HTMLStencilElement {
    }
    var HTMLDiscoveryTabularElement: {
        prototype: HTMLDiscoveryTabularElement;
        new (): HTMLDiscoveryTabularElement;
    };
    interface HTMLDiscoveryTileElement extends Components.DiscoveryTile, HTMLStencilElement {
    }
    var HTMLDiscoveryTileElement: {
        prototype: HTMLDiscoveryTileElement;
        new (): HTMLDiscoveryTileElement;
    };
    interface HTMLDiscoveryTileResultElement extends Components.DiscoveryTileResult, HTMLStencilElement {
    }
    var HTMLDiscoveryTileResultElement: {
        prototype: HTMLDiscoveryTileResultElement;
        new (): HTMLDiscoveryTileResultElement;
    };
    interface HTMLElementTagNameMap {
        "discovery-annotation": HTMLDiscoveryAnnotationElement;
        "discovery-bar": HTMLDiscoveryBarElement;
        "discovery-button": HTMLDiscoveryButtonElement;
        "discovery-dashboard": HTMLDiscoveryDashboardElement;
        "discovery-display": HTMLDiscoveryDisplayElement;
        "discovery-empty": HTMLDiscoveryEmptyElement;
        "discovery-gauge": HTMLDiscoveryGaugeElement;
        "discovery-image": HTMLDiscoveryImageElement;
        "discovery-input": HTMLDiscoveryInputElement;
        "discovery-line": HTMLDiscoveryLineElement;
        "discovery-linear-gauge": HTMLDiscoveryLinearGaugeElement;
        "discovery-map": HTMLDiscoveryMapElement;
        "discovery-modal": HTMLDiscoveryModalElement;
        "discovery-pageable": HTMLDiscoveryPageableElement;
        "discovery-pie": HTMLDiscoveryPieElement;
        "discovery-spinner": HTMLDiscoverySpinnerElement;
        "discovery-svg": HTMLDiscoverySvgElement;
        "discovery-tabular": HTMLDiscoveryTabularElement;
        "discovery-tile": HTMLDiscoveryTileElement;
        "discovery-tile-result": HTMLDiscoveryTileResultElement;
    }
}
declare namespace LocalJSX {
    interface DiscoveryAnnotation {
        "debug"?: boolean;
        "height"?: number;
        "onDataPointOver"?: (event: CustomEvent<any>) => void;
        "onDataZoom"?: (event: CustomEvent<{ start: number, end: number, min: number, max: number }>) => void;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryBar {
        "debug"?: boolean;
        "height"?: number;
        "onDataPointOver"?: (event: CustomEvent<any>) => void;
        "onDataZoom"?: (event: CustomEvent<{ start: number, end: number, min: number, max: number }>) => void;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "onLeftMarginComputed"?: (event: CustomEvent<number>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryButton {
        "debug"?: boolean;
        "height"?: number;
        "onDiscoveryEvent"?: (event: CustomEvent<DiscoveryEvent>) => void;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "onExecResult"?: (event: CustomEvent<any[]>) => void;
        "onStatusError"?: (event: CustomEvent<any>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "url"?: string;
        "width"?: number;
    }
    interface DiscoveryDashboard {
        "autoRefresh"?: number;
        "cellHeight"?: number;
        "cols"?: number;
        "dashboardTitle"?: string;
        "debug"?: boolean;
        "onRendered"?: (event: CustomEvent<void>) => void;
        "onStatusError"?: (event: CustomEvent<any>) => void;
        "onStatusHeaders"?: (event: CustomEvent<string[]>) => void;
        "options"?: Param | string;
        "type"?: 'scada' | 'dashboard';
        "url"?: string;
    }
    interface DiscoveryDisplay {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryEmpty {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryGauge {
        "debug"?: boolean;
        "height"?: number;
        "onDataPointOver"?: (event: CustomEvent<any>) => void;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryImage {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryInput {
        "debug"?: boolean;
        "height"?: number;
        "onDiscoveryEvent"?: (event: CustomEvent<DiscoveryEvent>) => void;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "onExecResult"?: (event: CustomEvent<any[]>) => void;
        "onStatusError"?: (event: CustomEvent<any>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "url"?: string;
        "width"?: number;
    }
    interface DiscoveryLine {
        "debug"?: boolean;
        "height"?: number;
        "onDataPointOver"?: (event: CustomEvent<any>) => void;
        "onDataZoom"?: (event: CustomEvent<{ start: number, end: number, min: number, max: number }>) => void;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "onLeftMarginComputed"?: (event: CustomEvent<number>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryLinearGauge {
        "debug"?: boolean;
        "height"?: number;
        "onDataPointOver"?: (event: CustomEvent<any>) => void;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryMap {
        "debug"?: boolean;
        "height"?: number;
        "onDataPointOver"?: (event: CustomEvent<any>) => void;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "width"?: number;
    }
    interface DiscoveryModal {
        "data"?: Tile | Dashboard;
        "debug"?: boolean;
        "options"?: Param | string;
        "url"?: string;
    }
    interface DiscoveryPageable {
        "data"?: { name: string, values: any[], headers: string[] };
        "debug"?: boolean;
        "elemsCount"?: number;
        "options"?: Param;
        "windowed"?: number;
    }
    interface DiscoveryPie {
        "debug"?: boolean;
        "height"?: number;
        "onDataPointOver"?: (event: CustomEvent<any>) => void;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoverySpinner {
        "message"?: string;
    }
    interface DiscoverySvg {
        "chartTitle"?: string;
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "start"?: number;
        "type"?: ChartType;
        "unit"?: string;
        "url"?: string;
        "width"?: number;
    }
    interface DiscoveryTabular {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryTile {
        "autoRefresh"?: number;
        "chartTitle"?: string;
        "debug"?: boolean;
        "language"?: 'warpscript' | 'flows';
        "onExecResult"?: (event: CustomEvent<string>) => void;
        "onStatusError"?: (event: CustomEvent<any>) => void;
        "onStatusHeaders"?: (event: CustomEvent<string[]>) => void;
        "options"?: Param | string;
        "type"?: ChartType;
        "unit"?: string;
        "url"?: string;
        "vars"?: string;
    }
    interface DiscoveryTileResult {
        "chartTitle"?: string;
        "debug"?: boolean;
        "height"?: number;
        "onDiscoveryEvent"?: (event: CustomEvent<DiscoveryEvent>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "start"?: number;
        "type"?: ChartType;
        "unit"?: string;
        "url"?: string;
        "width"?: number;
    }
    interface IntrinsicElements {
        "discovery-annotation": DiscoveryAnnotation;
        "discovery-bar": DiscoveryBar;
        "discovery-button": DiscoveryButton;
        "discovery-dashboard": DiscoveryDashboard;
        "discovery-display": DiscoveryDisplay;
        "discovery-empty": DiscoveryEmpty;
        "discovery-gauge": DiscoveryGauge;
        "discovery-image": DiscoveryImage;
        "discovery-input": DiscoveryInput;
        "discovery-line": DiscoveryLine;
        "discovery-linear-gauge": DiscoveryLinearGauge;
        "discovery-map": DiscoveryMap;
        "discovery-modal": DiscoveryModal;
        "discovery-pageable": DiscoveryPageable;
        "discovery-pie": DiscoveryPie;
        "discovery-spinner": DiscoverySpinner;
        "discovery-svg": DiscoverySvg;
        "discovery-tabular": DiscoveryTabular;
        "discovery-tile": DiscoveryTile;
        "discovery-tile-result": DiscoveryTileResult;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "discovery-annotation": LocalJSX.DiscoveryAnnotation & JSXBase.HTMLAttributes<HTMLDiscoveryAnnotationElement>;
            "discovery-bar": LocalJSX.DiscoveryBar & JSXBase.HTMLAttributes<HTMLDiscoveryBarElement>;
            "discovery-button": LocalJSX.DiscoveryButton & JSXBase.HTMLAttributes<HTMLDiscoveryButtonElement>;
            "discovery-dashboard": LocalJSX.DiscoveryDashboard & JSXBase.HTMLAttributes<HTMLDiscoveryDashboardElement>;
            "discovery-display": LocalJSX.DiscoveryDisplay & JSXBase.HTMLAttributes<HTMLDiscoveryDisplayElement>;
            "discovery-empty": LocalJSX.DiscoveryEmpty & JSXBase.HTMLAttributes<HTMLDiscoveryEmptyElement>;
            "discovery-gauge": LocalJSX.DiscoveryGauge & JSXBase.HTMLAttributes<HTMLDiscoveryGaugeElement>;
            "discovery-image": LocalJSX.DiscoveryImage & JSXBase.HTMLAttributes<HTMLDiscoveryImageElement>;
            "discovery-input": LocalJSX.DiscoveryInput & JSXBase.HTMLAttributes<HTMLDiscoveryInputElement>;
            "discovery-line": LocalJSX.DiscoveryLine & JSXBase.HTMLAttributes<HTMLDiscoveryLineElement>;
            "discovery-linear-gauge": LocalJSX.DiscoveryLinearGauge & JSXBase.HTMLAttributes<HTMLDiscoveryLinearGaugeElement>;
            "discovery-map": LocalJSX.DiscoveryMap & JSXBase.HTMLAttributes<HTMLDiscoveryMapElement>;
            "discovery-modal": LocalJSX.DiscoveryModal & JSXBase.HTMLAttributes<HTMLDiscoveryModalElement>;
            "discovery-pageable": LocalJSX.DiscoveryPageable & JSXBase.HTMLAttributes<HTMLDiscoveryPageableElement>;
            "discovery-pie": LocalJSX.DiscoveryPie & JSXBase.HTMLAttributes<HTMLDiscoveryPieElement>;
            "discovery-spinner": LocalJSX.DiscoverySpinner & JSXBase.HTMLAttributes<HTMLDiscoverySpinnerElement>;
            "discovery-svg": LocalJSX.DiscoverySvg & JSXBase.HTMLAttributes<HTMLDiscoverySvgElement>;
            "discovery-tabular": LocalJSX.DiscoveryTabular & JSXBase.HTMLAttributes<HTMLDiscoveryTabularElement>;
            "discovery-tile": LocalJSX.DiscoveryTile & JSXBase.HTMLAttributes<HTMLDiscoveryTileElement>;
            "discovery-tile-result": LocalJSX.DiscoveryTileResult & JSXBase.HTMLAttributes<HTMLDiscoveryTileResultElement>;
        }
    }
}
