import { Component, OnInit } from '@angular/core';
import { MyOverlayRef } from '../overlay/my-overlay.ref';

@Component({
  selector: 'fay-yes-no',
  templateUrl: './yes-no.component.html'
})
export class YesNoComponent implements OnInit {
  constructor(private ref: MyOverlayRef) {}

  ngOnInit() {}

  close(value: string) {
    this.ref.close(value);
  }
}