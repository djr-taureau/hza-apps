import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { path } from 'ramda';

import { Configuration, defaultConfig } from './configuration';
import { getConfigError, getInvalidConfigError } from './config-errors';
import { isNotUseable } from '@hza/shared/utils';
import { catchError, map } from 'rxjs/operators';
import { ApiEndpointService } from '../api-endpoint.service';
import { Logger } from '@hza/shared/utils';
import { BehaviorSubject } from 'rxjs';

export const CONFIG_URL = new InjectionToken('CONFIG_URL');

@Injectable({
	providedIn: 'root'
})
export class ConfigService {
	config: Configuration;
	private config$: BehaviorSubject<Configuration> = new BehaviorSubject(defaultConfig);

	constructor(@Inject(CONFIG_URL) private configUrl: string, private http: HttpClient) {}

	load() {
		return this.http
			.get<Configuration>(this.configUrl)
			.toPromise()
			.then((result) => (this.config = result))
			.catch(() => {
				throw getConfigError(this.configUrl);
			});
		this.updateApiEndpoint(this.config);
		this.config$.next(this.config);
	}

	getHzApiUri() {
		if (isNotUseable(this.config)) throw getInvalidConfigError();

		return path(['apis', 'hza'], this.config);
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
	public getConfigApiEndpoint(): string {
		return this.getConfigValue().apis.hza;
	}

	/**
     * Update the API endpoint with data from the loaded config.
     * @param config
     */
	private updateApiEndpoint(config: Configuration): void {
		ApiEndpointService.BASE_URL.FROM_CONFIG = config.apis.hza;
	}
}

export const appInitializer = (appConfig: ConfigService) => () => appConfig.load();
