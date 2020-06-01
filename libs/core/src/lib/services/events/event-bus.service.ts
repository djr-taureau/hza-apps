import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EventData } from './event.class';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private subject$ = new Subject();

  constructor() { }

  emit(event: EventData) {
    this.subject$.next(event);
    // this.subject$.subscribe(v => console.log('service emit', v))
  }

  on(eventName: string, action: any): Subscription {
    // this.subject$.subscribe(v => console.log('service on', v))
    return this.subject$.pipe(
      filter( (e: EventData) => e.name === eventName),
      map( (e: EventData) => e["value"])).subscribe(action);
  }
}

export enum Events {
  DocUploadChanged
}