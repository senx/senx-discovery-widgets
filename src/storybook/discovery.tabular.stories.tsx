/*
 *   Copyright 2022  SenX S.A.S.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import tile, {Usage} from './discovery.tile.stories';
import {Param} from "../model/param";
import {Colors} from "../utils/color-lib";

export default {
  ...tile,
  title: 'UI/Tabular data'
};

export const InitialUsage = Usage.bind({});
InitialUsage.args = {
  ...Usage.args,
  type: 'tabular',
  ws: `0 2 <% 'j' STORE
  NEWGTS 'serie' $j TOSTRING + RENAME 'g' STORE
  1 1000 <%
    'ts' STORE
    NOW $ts STU * 50.0 / - 'ts' STORE
    $g $ts NaN NaN NaN $ts 50 * STU / 60.0 / SIN ADDVALUE DROP %> FOR
  $g
%> FOR`
};

export const InitialUsageWithFixedWidth = Usage.bind({});
InitialUsageWithFixedWidth.args = {
  ...InitialUsage.args,
  options: {... new Param(), tabular: {fixedWidth: true}}
};

export const SmallAmountOfData = Usage.bind({});
SmallAmountOfData.args = {
  ...InitialUsage.args,
  ws: `NEWGTS 'serie' RENAME 'g' STORE
  1 16 <%
    'ts' STORE
    NOW $ts STU * 50.0 / - 'ts' STORE
    $g $ts NaN NaN NaN $ts 50 * STU / 60.0 / SIN ADDVALUE DROP %> FOR
  $g`
};

export const CustomData = Usage.bind({});
CustomData.args = {
  ...InitialUsage.args,
  ws: `{
'title' 'Test'
'columns'  [ 'Name' 'A' 'B' 'C' 'Link' ]
'rows' [
  [ 'label X' 15 56 44 '<' 'a href="https://warp10.io/">Warp 10</' + 'a>' + ]
  [ 'label Y' 1 5 4 '<' 'a href="https://senx.io/">SenX</' + 'a>' + ]
  [ 'label Z' 14 45 78 '<' 'img src="https://warp10.io/assets/img/header-w-white.png" />' + ]
]
} 'values' STORE
{ 'data' $values }`
};

export const WithAutoRefresh = Usage.bind({});
WithAutoRefresh.args = {
  ...InitialUsage.args,
  ws: `NEWGTS 'serie' RENAME 'g' STORE
  1 1000 <%
    'ts' STORE
    NOW $ts STU * 50.0 / - 'ts' STORE
    $g $ts NaN NaN NaN $ts 50 * STU / 60.0 / SIN ADDVALUE DROP %> FOR
  $g`,
  options: {...new Param(), autoRefresh: 1}
}

export const WithCustomStyle = ({url, ws, lang, options, unit, title, type}) => `
<style>
:root {
--warp-view-dashboard-background:  #333540;
    --wc-split-gutter-color: #404040;
    --warp-view-pagination-bg-color: #343a40 !important;
    --warp-view-pagination-border-color: #6c757d;
    --warp-view-datagrid-odd-bg-color: rgba(255, 255, 255, .05);
    --warp-view-datagrid-odd-color: #FFFFFF;
    --warp-view-datagrid-even-bg-color: #212529;
    --warp-view-datagrid-even-color: #FFFFFF;
    --warp-view-font-color: #FFFFFF;
    --warp-view-chart-label-color: #FFFFFF;
    --gts-stack-font-color: #FFFFFF;
    --warp-view-resize-handle-color: #111111;
    --warp-view-chart-legend-bg: #000;
    --gts-labelvalue-font-color: #ccc;
    --gts-separator-font-color: #FFFFFF;
    --gts-labelname-font-color: rgb(105, 223, 184);
    --gts-classname-font-color: rgb(126, 189, 245);
    --warp-view-chart-legend-color: #FFFFFF;
    --wc-tab-header-color: #FFFFFF;
    --wc-tab-header-selected-color: #404040;
    --warp-view-tile-background: #3A3C46;
    --warp-view-bg-color: #3A3C46;
    --warp-view-modal-bg-color: #333540;
  }
</style>
<div style="height: 600px;width: 100%;min-height: 100px; resize: both; padding: 10px; overflow: hidden;">
  <div class="card" style="height: 100%;width: 100%;min-height: 100%;">
      <div class="card-body">
    <discovery-tile url="${url}" type="${type}" lang="${lang}"
        unit="${unit || ''}" chart-title="${title || ''}" debug
    options='${JSON.stringify(options)}'>${ws}</discovery-tile>
    </div>
    </div>
</div>`;
WithCustomStyle.args = {
  ...InitialUsage.args,
  options: {...Usage.args.options, scheme: Colors.ATLANTIS},
  ws: `0 2 <% 'j' STORE
    NEWGTS 'serie' $j TOSTRING + RENAME NOW NaN NaN NaN RAND ADDVALUE
%> FOR`
};

export const  CustomStyleAndAutoRefresh= WithCustomStyle.bind({});
CustomStyleAndAutoRefresh.args = {
  ...InitialUsage.args,
  options: {...Usage.args.options, scheme: Colors.CHARTANA, autoRefresh: 10},
  ws: `0 2 <% 'j' STORE
    NEWGTS 'serie' $j TOSTRING + RENAME NOW NaN NaN NaN RAND ADDVALUE
%> FOR`
};
