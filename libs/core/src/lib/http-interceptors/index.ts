import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './logging.interceptor';
import { CacheInterceptor } from './cache-interceptor';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { LogHttpInterceptor } from './log-http.interceptor';
import { LogHeadersInterceptor } from './log-headers.interceptor';
import { BusyInterceptor } from './busy.interceptor';
import { TransformResponseInterceptor } from './transform-response.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LogHttpInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LogHeadersInterceptor, multi: true },
  // Busy: Should be first so it can turn on first, and off last.
  { provide: HTTP_INTERCEPTORS, useClass: BusyInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: TransformResponseInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
];