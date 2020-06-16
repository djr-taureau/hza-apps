import {Component, AfterViewInit, TemplateRef, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import {ComponentPortal, Portal, TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'hza-tabs',
  templateUrl: './tabs-template.component.html',
  styleUrls: ['./tabs-template.component.scss']
})
export class TabsTemplateComponent implements AfterViewInit {

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;
  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<ComponentPortalExample>;
  templatePortal: TemplatePortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
  }

}



@Component({
  selector: 'hza-component-portal',
  template: 'Hello, this is a component portal'
})
export class ComponentPortalExample {}