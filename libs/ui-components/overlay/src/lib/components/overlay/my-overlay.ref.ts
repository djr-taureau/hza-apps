import { Subject } from 'rxjs';

import { OverlayRef } from '@angular/cdk/overlay';

import { TemplateRef, Type, ElementRef } from '@angular/core';

export type OverlayContent = TemplateRef<any> | Type<any> | string;

export type OverlayParams<T> = {
 origin: HTMLElement;
 content: OverlayContent;
 data?: T;
 width?: string | number;
 height: string | number;
}

export interface OverlayCloseEvent<R> {
  type: 'backdropClick' | 'close';
  data: R;
}

// R = Response Data Type, T = Data passed to Modal Type
export class MyOverlayRef<T = any> {
  private afterClosed = new Subject<OverlayCloseEvent<T>>();
   afterClosed$ = this.afterClosed.asObservable();

  constructor(
    public overlay: OverlayRef,
    public content: OverlayContent,
    public data: T, // pass data to modal i.e. FormData
  ) {
    overlay.backdropClick().subscribe(() => this._close('backdropClick', data));
  }

  close(data?: T) {
    this._close('close', data);
  }

  private _close(type: 'backdropClick' | 'close', data: T) {
    this.overlay.dispose();
    this.afterClosed.next({
      type,
      data
    });

    this.afterClosed.complete();
  }
}