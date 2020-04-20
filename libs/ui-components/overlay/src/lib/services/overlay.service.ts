import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { MyOverlayRef } from '../components/overlay/my-overlay.ref';
import { OverlayComponent } from '../components/overlay/overlay.component';

@Injectable({
	providedIn: 'root'
})
export class OverlayService {
	
	overlayConfig: OverlayConfig;
	constructor(private overlay: Overlay, private injector: Injector) {}

	open<R = any, T = any>(content: string | TemplateRef<any> | Type<any>, data: T): MyOverlayRef<R> {
		
		const positionStrategy = this.overlay
			.position()
			.global()
			.width('1200px')
			.height('100px')
			.centerHorizontally()
			.centerVertically();

		this.overlayConfig = new OverlayConfig({
			positionStrategy
		});
		
		this.overlayConfig.hasBackdrop = true;
		this.overlayConfig.panelClass = ['modal', 'is-active'];
		this.overlayConfig.backdropClass = 'modal-background';

		const overlayRef = this.overlay.create(this.overlayConfig);

		const myOverlayRef = new MyOverlayRef<R, T>(overlayRef, content, data);

		const injector = this.createInjector(myOverlayRef, this.injector);
		overlayRef.attach(new ComponentPortal(OverlayComponent, null, injector));

		return myOverlayRef;
	}

	createInjector(ref: MyOverlayRef, inj: Injector) {
		const injectorTokens = new WeakMap([[MyOverlayRef, ref]]);
		return new PortalInjector(inj, injectorTokens);
	}
}
