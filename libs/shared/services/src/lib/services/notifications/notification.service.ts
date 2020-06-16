import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  latestNotification: Notification = {
    "id": 0,
    "title": "XXX",
    "body": "xxxxxxxxxxxxxxxxxxxxxxxxx"
  };
  private notificationSubject$ = new BehaviorSubject<Notification>(this.latestNotification);
  notificationChanged$ = this.notificationSubject$.asObservable();

  constructor() { }

  addToFooter(message: Notification) {
    this.latestNotification = message;
    this.notificationSubject$.next(message);
  }
}