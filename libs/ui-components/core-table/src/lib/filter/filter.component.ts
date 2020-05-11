import { TemplatePortalDirective } from '@angular/cdk/portal';
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Output,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
	AfterContentInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatMenuTrigger } from '@angular/material/menu';
import { OverlayService, PopoverRef, PopoverService } from '@hza/ui-components/overlay';
import { merge, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
	selector: 'core-table-filter',
	templateUrl: './filter.component.html',
	styleUrls: [ './filter.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreTableFilterComponent implements AfterViewInit {
	@Output() change: Observable<(text: string) => boolean>;

	@ViewChild(MatInput) input: MatInput;
	@ViewChild(MatMenuTrigger) filterMenu: MatMenuTrigger;

	@ViewChild('overlayTemplate') overlayTemplate: TemplatePortalDirective;

	filter = new FormControl();
	operation = new FormControl();
	operations: any[];
	@ViewChild('filterButton') filterButton: ElementRef;

	overlayRef: PopoverRef;

	constructor(
		private popover: PopoverService,
		private overlayService: OverlayService,
		private _viewContainerRef: ViewContainerRef
	) {
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
		// this.input.focus()
		this.filterButton.nativeElement.focus();
		//  this.filterMenu.menuOpened.subscribe(() => this.input && this.input.focus());
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
				values: [ '1', '2', '3' ]
			},
			width: '5vw',
			height: '30px'
		});
		this.overlayRef.afterClosed$.subscribe((res) => {
			console.log(res);
		});
	}

	open(content: TemplateRef<any>) {
		const ref = this.overlayService.open(content, this.filterButton);

		ref.afterClosed$.subscribe((res) => {
			console.log(res);
		});
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

const operations = [ contains, equals, startsWith, endsWith, empty, notEmpty ].map((predicate) => ({
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
