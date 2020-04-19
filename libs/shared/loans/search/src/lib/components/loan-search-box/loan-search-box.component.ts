import { Component, OnInit, TemplateRef, HostListener } from '@angular/core';
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

	constructor(private overlayService: OverlayService, private router: Router) {}

	ngOnInit() {}

	dispatch($event) {
		console.log($event);
	}

	open(content: TemplateRef<any> | ComponentType<any> | string) {
		console.log(content);

		const ref = this.overlayService.open(content, null);
    console.log(ref)
		ref.afterClosed$.subscribe((res) => {
			if (content === this.loanSearchComponent) {
				this.loanSearchComponentResponse = res.data;
			}
		});
	}
}
