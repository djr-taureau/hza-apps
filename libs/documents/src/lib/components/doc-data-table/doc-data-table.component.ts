import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Document } from './../../models/document.model';

@Component({
  selector: 'hza-doc-data-table',
  templateUrl: './doc-data-table.component.html',
  styleUrls: ['./doc-data-table.component.scss']
})
export class DocDataTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.rows = this.documents;
  }

  @Input() documents: Document[];
  @ViewChild('myTable') table: any;

  rows: any[] = [];
  expanded: any = {};
  timeout: any;

  ColumnMode = ColumnMode;


  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }


  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
}
