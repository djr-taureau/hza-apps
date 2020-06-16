import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'hzaFileSize'
})
export class FileSizePipe implements PipeTransform {
	private units = [ 'bytes', 'KB', 'MB', 'GB', 'TB', 'PB' ];
	transform(value: number, args?: any): any {
		return this.transformSize(value);
	}

	transformSize(bytes: number = 0, precision: number = 2): string {
		if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) return '?';

		let unit = 0;

		while (bytes >= 1000) {
			bytes /= 1000;
			unit++;
		}

		return bytes.toFixed(+precision) + ' ' + this.units[unit];
	}
}
