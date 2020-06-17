import {
	Component,







	EventEmitter,
	OnChanges, Output, ViewEncapsulation
} from '@angular/core';
import { EventBusService, EventData } from '@hza/shared/services';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
@Component({
	selector: 'hza-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: [ './file-upload.component.scss' ],
	host: { class: 'hza-file-upload' },
	encapsulation: ViewEncapsulation.None
})
export class FileUploadComponent implements OnChanges {
	@Output() sendFiles = new EventEmitter<File[]>();
	public chosenFiles: File[] = [];
	public files: NgxFileDropEntry[] = [];

	constructor(private eventBus: EventBusService) {}

	public dropped(files: NgxFileDropEntry[]) {
		this.files = files;
		console.log(this.files);
		for (const droppedFile of files) {
			// Is it a file?
			if (droppedFile.fileEntry.isFile) {
				const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
				fileEntry.file((file: File) => {
					// Here you can access the real file
					this.chosenFiles.push(file);
					console.log(this.chosenFiles);
					this.sendFiles.emit(this.chosenFiles);
				});
			} else {
				const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
				console.log(droppedFile.relativePath, fileEntry);
			}
		}
	}

	public fileOver(event) {
		console.log(event);
	}

	public fileLeave(event) {
		console.log(event);
	}

	public fileDelete(i) {
		this.files.splice(i, 1);
		this.chosenFiles.splice(i, 1);
		this.eventBus.emit(new EventData('DocUploadChanged', this.chosenFiles));
		this.sendFiles.emit(this.chosenFiles);
	}

	ngOnChanges() {
		this.sendFiles.emit(this.chosenFiles);
	}

	get hasFiles(): boolean {
		return this.files.length ? true : false;
	}
}
