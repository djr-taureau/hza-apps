import { Inject, Injectable } from '@angular/core';
import { ApiEndpoints, API_ENDPOINTS } from './endpoints.config';


@Injectable({
	providedIn: 'root',
})
export class EndpointsService {
	public get docsService(): string {
		return `${this.endpoints.docsService}`;
	}

	public get loansService(): string {
		return `${this.endpoints.loansService}`;
	}

	private endpoints: ApiEndpoints;

	constructor(@Inject(API_ENDPOINTS) endpoints: ApiEndpoints) {
		this.endpoints = Object.keys(endpoints).reduce(
			(ep, key) => {
				return { ...ep, [key]: this.removeTrailingSlash(endpoints[key]) };
			},
			{} as ApiEndpoints,
		);
	}

	private removeTrailingSlash(str: string): string {
		return str.replace(/\/$/, '');
	}
}