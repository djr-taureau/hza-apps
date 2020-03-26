import { Component, OnInit, Input } from '@angular/core';
import { Loan } from '../../../models/loan.model';

@Component({
  selector: 'hza-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.css']
})
export class LoansListComponent implements OnInit {

  @Input() loans: Loan[];
  
  constructor() { }

  ngOnInit() {
  }

}
