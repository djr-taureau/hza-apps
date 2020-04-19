import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { PopoverRef } from '@hza/ui-components/overlay';

@Component({
	selector: 'hza-loan-search',
	templateUrl: './loan-search.component.html',
	styleUrls: ['./loan-search.component.scss']
})
export class LoanSearchComponent implements OnInit {
	 skills;


	constructor(private popoverRef: PopoverRef) {
		this.skills = this.popoverRef.data.skills;
	}

	ngOnInit() {
	
	}
	
	
  close() {
    this.popoverRef.close({ id: 1 });
  }
}
