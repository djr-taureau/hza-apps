import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
	selector: 'hza-header-container',
	template: `
        <hza-header [appTitle]="appTitle"></hza-header>
    `
})
export class HeaderContainer implements OnInit {
	appTitle = 'Test App';
	public constructor() {}

	public ngOnInit() {}
}
