import { Component, OnInit, Input } from '@angular/core';
import { Loan } from '../../../models/loan.model';

@Component({
  selector: 'hza-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent implements OnInit {

	opened: boolean;
  @Input() loans: Loan[];
  
  constructor() { }

  ngOnInit() {
    this.opened = false;
  }
  
  	openModal() {
		this.opened = !this.opened;
	}

}
