import { Component } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'cell-selection-demo',
  template: `
    <div>
      <h3>
        Cell Selection

      </h3>
      <ngx-datatable
        class="material selection-cell"
        [rows]="rows"
        [columnMode]="ColumnMode.force"
        [columns]="columns"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="50"
        [selected]="selected"
        [selectionType]="SelectionType.cell"
        (select)="onSelect($event)"
        (activate)="onActivate($event)"
      >
      </ngx-datatable>
    </div>
  `
})
export class CellSelectionComponent {
  rows: any[] = [];
  selected: any[] = [];
  columns: any[] = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect(event) {
    console.log('Event: select', event, this.selected);
  }

  onActivate(event) {
    console.log('Event: activate', event);
  }
}
