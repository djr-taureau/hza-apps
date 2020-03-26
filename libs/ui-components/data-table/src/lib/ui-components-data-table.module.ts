import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DataTableCoreModule, DataTableRoutingModule } from './+modules';
import { TableListComponent } from './components/table-list.component';
// -- Basic
import { BasicFixedComponent } from './components/basic/basic-fixed.component';
import { BasicAutoComponent } from './components/basic/basic-auto.component';
import { VirtualScrollComponent } from './components/basic/virtual.component';
import { InlineEditComponent } from './components/basic/inline.component';
import { HorzVertScrolling } from './components/basic/scrolling.component';
import { MultipleTablesComponent } from './components/basic/multiple.component';
import { FullScreenComponent } from './components/basic/fullscreen.component';
import { RowDetailsComponent } from './components/basic/row-detail.component';
import { ResponsiveComponent } from './components/basic/responsive.component';
import { FilterBarComponent } from './components/basic/filter.component';
import { TabsDemoComponent } from './components/basic/tabs.component';
import { LiveDataComponent } from './components/basic/live.component';
import { RxDemoComponent } from './components/basic/rx.component';
import { ContextMenuDemoComponent } from './components/basic/contextmenu.component';
import { RowCssComponent } from './components/basic/css.component';
import { DynamicHeightComponent } from './components/basic/dynamic-height.component';
import { FooterDemoComponent } from './components/basic/footer.component';
import { RowGroupingComponent } from './components/basic/row-grouping.component';

// -- Themes
import { BootstrapThemeComponent } from './components/basic/bootstrap.component';
import { DarkThemeComponent } from './components/basic/dark-theme.component';

// -- Paging
import { ClientPagingComponent } from './components/paging/paging-client.component';
import { ServerPagingComponent } from './components/paging/paging-server.component';
import { ServerScrollingComponent } from './components/paging/scrolling-server.component';
import { VirtualPagingComponent } from './components/paging/paging-virtual.component';
import { PagingScrollingNoVirtualizationComponent } from './components/paging/paging-scrolling-novirtualization.component';

// -- Sorting
import { SortingComparatorComponent } from './components/sorting/sorting-comparator.component';
import { DefaultSortingComponent } from './components/sorting/sorting-default.component';
import { ServerSortingComponent } from './components/sorting/sorting-server.component';
import { ClientSortingComponent } from './components/sorting/sorting-client.component';

// -- Templates
import { InlineTemplatesComponent } from './components/templates/template-dom.component';
import { TemplateRefTemplatesComponent } from './components/templates/template-obj.component';

// -- Tree
import { FullScreenTreeComponent } from './components/tree/fullscreen.component';
import { ClientTreeComponent } from './components/tree/client-tree.component';

// -- Selection
import { CellSelectionComponent } from './components/selection/selection-cell.component';
import { MultiSelectionComponent } from './components/selection/selection-multi.component';
import { SingleSelectionComponent } from './components/selection/selection-single.component';
import { MultiDisableSelectionComponent } from './components/selection/selection-disabled.component';
import { CheckboxSelectionComponent } from './components/selection/selection-chkbox.component';
import { MultiClickSelectionComponent } from './components/selection/selection-multi-click.component';
import { CustomCheckboxSelectionComponent } from './components/selection/selection-chkbox-template.component';

// -- Columns
import { ColumnToggleComponent } from './components/columns/column-toggle.component';
import { ColumnStandardComponent } from './components/columns/column-standard.component';
import { ColumnForceComponent } from './components/columns/column-force.component';
import { ColumnFlexComponent } from './components/columns/column-flex.component';
import { ColumnPinningComponent } from './components/columns/pinning.component';
import { ColumnReorderComponent } from './components/columns/column-reorder.component';

// -- Summary row
import { SummaryRowSimpleComponent } from './components/summary/summary-row-simple.component';
import { SummaryRowCustomTemplateComponent } from './components/summary/summary-row-custom-template.component';
import { SummaryRowServerPagingComponent } from './components/summary/summary-row-server-paging.component';
import { SummaryRowInlineHtmlComponent } from './components/summary/summary-row-inline-html.component';

const COMPONENTS = [
    TableListComponent,
    BasicAutoComponent,
    BasicFixedComponent,
    FullScreenComponent,
    FullScreenTreeComponent,
    InlineEditComponent,
    VirtualScrollComponent,
    HorzVertScrolling,
    MultipleTablesComponent,
    RowDetailsComponent,
    ResponsiveComponent,
    ClientPagingComponent,
    ServerPagingComponent,
    PagingScrollingNoVirtualizationComponent,
    ServerScrollingComponent,
    ClientSortingComponent,
    DefaultSortingComponent,
    ServerSortingComponent,
    SortingComparatorComponent,
    CellSelectionComponent,
    MultiSelectionComponent,
    InlineTemplatesComponent,
    TemplateRefTemplatesComponent,
    ColumnFlexComponent,
    ColumnToggleComponent,
    ColumnStandardComponent,
    ColumnForceComponent,
    ColumnPinningComponent,
    ColumnReorderComponent,
    FilterBarComponent,
    VirtualPagingComponent,
    DarkThemeComponent,
    TabsDemoComponent,
    SingleSelectionComponent,
    LiveDataComponent,
    MultiDisableSelectionComponent,
    RxDemoComponent,
    ContextMenuDemoComponent,
    CheckboxSelectionComponent,
    CustomCheckboxSelectionComponent,
    MultiClickSelectionComponent,
    RowCssComponent,
    DynamicHeightComponent,
    FooterDemoComponent,
    RowGroupingComponent,
    BootstrapThemeComponent,
    ClientTreeComponent,
    SummaryRowSimpleComponent,
    SummaryRowCustomTemplateComponent,
    SummaryRowServerPagingComponent,
    SummaryRowInlineHtmlComponent 
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    DataTableCoreModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    })
  ],
  exports: COMPONENTS
})
export class UiComponentsDataTableModule {}