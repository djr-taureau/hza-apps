import { Component, OnInit, TemplateRef, Type } from '@angular/core';
import { MyOverlayRef, OverlayContent } from './my-overlay.ref';

@Component({
  selector: 'hza-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  renderMethod: 'template' | 'component' | 'text' = 'component';
  contentType: 'template' | 'string' | 'component';
  content: OverlayContent;
  context;

  constructor(private ref: MyOverlayRef) {}

  close() {
    this.ref.close(null);
  }

 ngOnInit() {
   this.content = this.ref.content;

   if (typeof this.content === 'string') {
     this.renderMethod = 'text';
   } else if(this.content instanceof TemplateRef) {
     this.renderMethod = 'template';
     this.context = {
       close: this.ref.close.bind(this.ref)
     }
   }
 }
}