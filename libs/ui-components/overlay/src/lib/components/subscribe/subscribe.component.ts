import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MyOverlayRef } from '../overlay/my-overlay.ref';
import { FormBuilder, Validators } from '@angular/forms';
// ** Use this for footer notification messages
@Component({
	selector: 'fay-subscribe',
	templateUrl: './subscribe.component.html',
	styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
	frmSubscribe = this.fb.group({
		name: 'John Doe',
		email: ['johndoe@gmail.com', Validators.compose([Validators.email, Validators.required])]
	});

	@ViewChild('name') nameField: ElementRef;
	editName(): void {
		this.nameField.nativeElement.focus();
	}
	constructor(private fb: FormBuilder, private ref: MyOverlayRef) {}

	ngOnInit() {
    this.editName();
  }

	submit() {
		this.ref.close(this.frmSubscribe.value);
	}

	cancel() {
		this.ref.close(null);
	}
}
