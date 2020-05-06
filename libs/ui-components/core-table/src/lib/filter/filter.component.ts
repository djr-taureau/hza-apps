import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	Output,
	ViewChild,
	TemplateRef,
	ViewContainerRef,
	HostBinding
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MatInput } from '@angular/material/input';
import { PopoverService, PopoverRef } from '@hza/ui-components/overlay';
import { TemplatePortalDirective, TemplatePortal } from '@angular/cdk/portal';
import { ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
	selector: 'core-table-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreTableFilterComponent implements AfterViewInit {
	@Output() change: Observable<(text: string) => boolean>;

	@ViewChild(MatInput) input: MatInput;
	@ViewChild(MatMenuTrigger) menu: MatMenuTrigger;

	@ViewChild('overlayTemplate') overlayTemplate: TemplatePortalDirective;

	filter = new FormControl();
	operation = new FormControl();
	operations: any[];
	
	overlayRef: PopoverRef;

	// @HostBinding('class.has-value')
	// get hasValue(): boolean {
	// 	return !this.needsFilter || this.filter.value;
	// }

	// @HostBinding('class.show-trigger')
	// get showTrigger(): boolean {
	// 	return this.menu.menuOpen || this.hasValue;
	// }

	// get needsFilter(): boolean {
	// 	return this.operation.value.needsFilter;
	// }

	constructor(private popover: PopoverService) {
		this.operations = operations;
		this.operation.setValue(operations[0]);

		this.change = merge(this.filter.valueChanges, this.operation.valueChanges).pipe(
			filter((value) => value != null),
			map(() => ({
				fn: this.operation.value.predicate,
				b: simplify(this.filter.value)
			})),
			map(({ fn, b }) => (text: string) => fn(simplify(text), b))
		);
	}

	ngAfterViewInit() {
		// this.menu.menuOpened.subscribe(() => this.input && this.input.focus());
		// if (this.showTrigger) {
		// 	console.log('who')
		// }
		// this.menu.menuOpened.subscribe(() => this.input && this.input.focus());
	}
		show(content: TemplateRef<any>, origin) {
		this.overlayRef = this.popover.open<{ values: string[] }>({
			content,
			origin,
			data: {
				values: ['1', '2', '3']
			}
		});
		

		// this.overlayRef.afterClosed$.subscribe((res) => {
		// 	if (this.loanQuery) {
		// 		this.updateSearchBox(this.loanQuery.loanSearch);
		// 	}
		// });
	}
 
}

const contains = (a: string, b: string): boolean => a.includes(b);
const equals = (a: string, b: string): boolean => a === b;
const startsWith = (a: string, b: string): boolean => a.startsWith(b);
const endsWith = (a: string, b: string): boolean => a.endsWith(b);
const empty = (a: string): boolean => !a;
const notEmpty = (a: string): boolean => !!a;

const fnArgumentCount = (fn: Function): number =>
	fn
		.toString()
		.replace(/\((.*?)\) *?=>.*/, '$1') // for lambdas
		.replace(/function.*?\((.*?)\).*/, '$1') // for functions
		.split(',').length;

const operations = [contains, equals, startsWith, endsWith, empty, notEmpty].map((predicate) => ({
	predicate,
	name: predicate.name,
	text: textify(predicate.name),
	needsFilter: fnArgumentCount(predicate) === 2
}));

/**
 * Simplifies a string (trims and lowerCases)
 */
function simplify(s: string): string {
	return `${s}`.trim().toLowerCase();
}

function textify(text: string) {
	return text
		.replace(/([A-Z])/g, (char) => ` ${char.toLowerCase()}`)
		.replace(/^([a-z])/, (char) => char.toUpperCase());
}
