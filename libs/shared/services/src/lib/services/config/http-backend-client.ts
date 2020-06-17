import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpBackendClient extends HttpClient {
    constructor(handler: HttpBackend) {
        super(handler);
    }
}