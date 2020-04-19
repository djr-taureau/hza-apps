import { Component, OnInit, TemplateRef, HostListener, ElementRef, ViewChild } from '@angular/core';
import { OverlayPositionBuilder, ConnectedPosition } from '@angular/cdk/overlay';
import { Overlay, ConnectionPositionPair, PositionStrategy, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal, PortalInjector } from '@angular/cdk/portal';
import { PopoverService } from '@hza/ui-components/overlay';
import { LoanSearchComponent } from '../loan-search/loan-search.component';

import { OverlayService } from '@hza/ui-components/overlay';
import { ComponentType } from '@angular/cdk/portal';
import { Router } from '@angular/router';

@Component({
	selector: 'hza-loan-search-box',
	templateUrl: './loan-search-box.component.html',
	styleUrls: ['./loan-search-box.component.scss']
})
export class LoanSearchBoxComponent implements OnInit {
	loanSearchComponent = LoanSearchComponent;
	loanSearchComponentResponse = null;
	@ViewChild('searchBox') searchBox: ElementRef;

	constructor(private popover: PopoverService, private overlayService: OverlayService, private router: Router) {}

	ngOnInit() {}

	dispatch($event) {
		console.log($event);
	}
	
	  show(content: TemplateRef<any>, origin) {
    const ref = this.popover.open<{ skills: number[] }>({
      content,
      //  content: 'Hello world!',
      // content: InsidePopoverComponent,
      origin,
      width: '200px',
      data: {
        skills: [1, 2, 3]
      }
    });

    ref.afterClosed$.subscribe(res => {
        console.log(res);
    })

  }

}
