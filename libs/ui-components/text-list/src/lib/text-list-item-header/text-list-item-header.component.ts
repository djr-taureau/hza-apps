import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hza-text-list-item-header, [hzaTextListItemHeader]',
  templateUrl: './text-list-item-header.component.html',
  styleUrls: ['./text-list-item-header.component.scss'],
})
export class TextListItemHeaderComponent implements OnInit {
  @Input() location: string;
  constructor() {}

  ngOnInit() {}
}
