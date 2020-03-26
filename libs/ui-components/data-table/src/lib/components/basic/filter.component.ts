import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'filter-demo',
  template: `
    <div>
      <h3>
        Client-side Search and Filtering
      </h3>
      <input
        type="text"
        style="padding:8px;margin:15px auto;width:30%;"
        placeholder="Type to filter the name column..."
        (keyup)="updateFilter($event)"
      />
      
      <ngx-datatable
        #table
        class="material"
        [columns]="columns"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="50"
        rowHeight="auto"
        [limit]="10"
        [rows]="rows"
      >
      </ngx-datatable>
    </div>
  `
})
export class FilterBarComponent {
  rows = [];

  temp = [];

  columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      // cache our list
      this.temp = [...data];

      // push our inital complete list
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

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
