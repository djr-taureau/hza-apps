import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiEndpointService } from '../api-endpoint.service';
import { Configuration, defaultConfig } from './configuration';
import { HttpBackendClient } from './http-backend-client';


export const CONFIG_URL = new InjectionToken('CONFIG_URL');

@Injectable({
	providedIn: 'root'
})
export class ConfigService {

	private config$: BehaviorSubject<Configuration> = new BehaviorSubject(defaultConfig);
	config: Configuration;

	constructor(
		// @Inject(CONFIG_URL) private configUrl: string,
		private http: HttpBackendClient,
		private apiEndpointService: ApiEndpointService
	) {}

	public load(): Promise<Configuration> {
		const url = this.apiEndpointService.getEndpoint(ApiEndpointService.ENDPOINT.CONFIG, null, null, true);
		return (
			this.http
				.get(`assets/config/configuration.local.json`)
				.pipe(
					map((response: Configuration) => {
						const config: Configuration = response;
						this.config$.next(config);
						return config;
					}),
					// It's possible that the HTTP request fails or our above mapping fails...
					// If the HTTP request fails we need to create a generic Error using the message.
					// If it's already an Error we simply rethrow it.
					//
					// This is so we can catch the error below once we convert the observable stream
					// to a promise.
					catchError((fault: Error | HttpErrorResponse) => {
						throw fault;
					})
				)
				// Handle any errors here and make sure we swallow the error so the app
				// still loads -- if we continue the error propagation we'll stop the
				// app loading and the user will be stuck on the loading spinner...now
				// we can specifically set the `initialized` flag in the config object to
				// false and show an error message in the app.
				.toPromise()
				.catch((error: Error) => {
					throw new Error(`Could not load initial, required config data!!!`);
				})
		);
	}

	public getConfig(): BehaviorSubject<Configuration> {
		return this.config$;
	}

	/**
     * Accessor for the private member config value.
     */
	public getConfigValue(): Configuration {
		return this.getConfig().value;
	}

	/**
     * Accessor for the config's API endpoint.
     */
	public getDocsApiEndpoint(): string {
		return this.getConfigValue().apis.documents;
	}

	public getCommonApiEndpoint(): string {
		return this.getConfigValue().apis.common;
	}
}

export const appInitializer = (appConfig: ConfigService) => () => appConfig.load();
