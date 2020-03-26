import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'basic-bootstrap-theme-demo',
  template: `
    <div>
      <h3>
        Bootstrap Theme
      </h3>
      <ngx-datatable
        class="bootstrap"
        [rows]="rows"
        [loadingIndicator]="loadingIndicator"
        [columns]="columns"
        [columnMode]="ColumnMode.force"
        [headerHeight]="40"
        [summaryRow]="true"
        [summaryPosition]="'bottom'"
        [footerHeight]="40"
        [limit]="10"
        rowHeight="auto"
        [reorderable]="reorderable"
      >
      </ngx-datatable>
    </div>
  `
})
export class BootstrapThemeComponent {
  rows = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: 'name', summaryFunc: () => null },
    { name: 'Gender', summaryFunc: cells => this.summaryForGender(cells) },
    { name: 'Company', summaryFunc: () => null }
  ];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 1500);
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

  private summaryForGender(cells: string[]) {
    const males = cells.filter(cell => cell === 'male').length;
    const females = cells.filter(cell => cell === 'female').length;

    return `males: ${males}, females: ${females}`;
  }
}
