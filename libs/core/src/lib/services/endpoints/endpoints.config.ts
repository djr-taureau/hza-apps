import { InjectionToken } from '@angular/core';

export interface ApiEndpoints {
	docsService: string;
	loansService: string;
}

export const API_ENDPOINTS = new InjectionToken<ApiEndpoints>(
	'core.api-endpoints',
);