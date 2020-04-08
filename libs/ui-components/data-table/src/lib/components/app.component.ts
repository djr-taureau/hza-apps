import { Component, ViewEncapsulation } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';


@Component({
  selector: 'fay-table-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss',
    '../../projects/swimlane/ngx-datatable/src/lib/themes/material.scss',
    '../../projects/swimlane/ngx-datatable/src/lib/themes/dark.scss',
    '../../projects/swimlane/ngx-datatable/src/lib/themes/bootstrap.scss'
  ],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class AppComponent {
  state: any;

  version = packageInfo.version;

  constructor(location: Location) {
    this.state = location.path(true);
  }
}