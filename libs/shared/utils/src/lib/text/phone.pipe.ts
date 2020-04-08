import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from '@hza/shared/utils';
import { slice } from 'ramda';
import { isNotUseable } from '../utility';

@Pipe({
	name: 'phone'
})
export class PhonePipe implements PipeTransform {
	transform(phone: string, singleLine: boolean = false): any {
		if (isNotUseable(phone)) {
			return '';
		}
		return `(${slice(0, 3, phone)}) ${slice(3, 6, phone)}-${slice(6, Infinity, phone)}`;
	}
}
