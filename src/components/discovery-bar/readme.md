# discovery-bar



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                                                                                                                                                                                     | Default       |
| --------- | --------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `debug`   | `debug`   |             | `boolean`                                                                                                                                                                                | `false`       |
| `height`  | `height`  |             | `number`                                                                                                                                                                                 | `undefined`   |
| `options` | `options` |             | `Param \| string`                                                                                                                                                                        | `new Param()` |
| `result`  | `result`  |             | `DataModel \| string`                                                                                                                                                                    | `undefined`   |
| `type`    | `type`    |             | `"annotation" \| "area" \| "bar" \| "button" \| "display" \| "gauge" \| "image" \| "line" \| "map" \| "scatter" \| "spline" \| "spline-area" \| "step" \| "step-after" \| "step-before"` | `undefined`   |
| `unit`    | `unit`    |             | `string`                                                                                                                                                                                 | `undefined`   |
| `width`   | `width`   |             | `number`                                                                                                                                                                                 | `undefined`   |


## Events

| Event  | Description | Type                |
| ------ | ----------- | ------------------- |
| `draw` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [discovery-tile-result](../discovery-tile-result)

### Depends on

- [discovery-spinner](../discovery-spinner)

### Graph
```mermaid
graph TD;
  discovery-bar --> discovery-spinner
  discovery-tile-result --> discovery-bar
  style discovery-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*