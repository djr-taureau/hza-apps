import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'virtual-scroll-demo',
  template: `
    <div>
      <h3>
        Virtual Scrolling with 10k Rows
      </h3>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [columnMode]="ColumnMode.force"
        headerHeight="50"
        footerHeight="50"
        [scrollbarV]="true"
        (page)="onPage($event)"
      >
        <ngx-datatable-column name="Name" width="300">
          <ng-template let-value="value" ngx-datatable-cell-template>
            <strong>{{ value }}</strong>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Gender" width="300">
          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
            <i [innerHTML]="row['name']"></i> and <i>{{ value }}</i>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Row Height" prop="height" width="80"> </ngx-datatable-column>
      </ngx-datatable>
    </div>
  `
})
export class VirtualScrollComponent {
  rows;
  expanded = {};
  timeout: any;

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      const rows = JSON.parse(req.response);

      for (const row of rows) {
        row.height = Math.floor(Math.random() * 80) + 50;
      }

      cb(rows);
    };

    req.send();
  }

  getRowHeight(row) {
    return row.height;
  }
}
