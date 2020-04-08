import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'client-paging-demo',
  template: `
    <div>
      <h3>
        Client-side Paging
      </h3>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [columns]="[{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }]"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="50"
        rowHeight="auto"
        [limit]="10"
      >
      </ngx-datatable>
    </div>
  `
})
export class ClientPagingComponent {
  rows = [];

  ColumnMode = ColumnMode;

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
}
