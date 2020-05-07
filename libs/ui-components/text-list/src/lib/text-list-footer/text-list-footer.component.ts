import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hza-text-list-footer, [hzaTextListFooter]',
  templateUrl: './text-list-footer.component.html',
  styleUrls: ['./text-list-footer.component.scss'],
})
export class TextListLocationComponent implements OnInit {
  @Input() location: string;
  constructor() {}

  ngOnInit() {}
}
