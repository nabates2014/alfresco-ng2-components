---
Added: v2.0.0
Status: Active
---

# Activiti Analytics List Component

Shows a list of all available reports

## Basic Usage

```html
<analytics-report-list
    [layoutType]="'LIST'">
</analytics-report-list>
```

## Class members

### Properties

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| appId | `number` |  |  |
| layoutType | `string` |  |  |
| selectFirst | `boolean` | false |  |

### Events

| Name | Type | Description |
| ---- | ---- | ----------- |
| error | [`EventEmitter`](https://angular.io/api/core/EventEmitter)`<Object>` |  |
| reportClick | [`EventEmitter`](https://angular.io/api/core/EventEmitter)`<`[`ReportParametersModel`](../../lib/insights/diagram/models/report/reportParameters.model.ts)`>` |  |
| success | [`EventEmitter`](https://angular.io/api/core/EventEmitter)`<Object>` |  |
