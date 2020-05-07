//tslint:disable: use-host-property-decorator directive-selector
import { Component, OnInit, ViewEncapsulation, Directive } from '@angular/core';

@Component({
  selector: 'hza-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'hza-text-list' },
})
export class TextListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@Directive({
  selector: 'hza-text-list-title, [hzaTextListTitle]',
  host: { class: 'hza-text-list-title' },
})
export class TextListTitleDirective {}
