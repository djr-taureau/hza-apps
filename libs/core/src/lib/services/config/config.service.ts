import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

	constructor(@Inject(CONFIG_URL) private configUrl: string, private http: HttpClient) {}

    public load(): Promise<Configuration> {
        // const url = this.apiEndpointService.getEndpoint(ApiEndpointService.ENDPOINT.CONFIG, null, null, true);
        // ConfigService.logger.debug(`load()`);
        return (
            this.http
                .get(this.configUrl)
                .pipe(
                    map((response: Configuration) => {
                        const config: Configuration = {
                            ...(response as Configuration),
                        };

                        // Order matters here...
                        // 1) Update the ADAL auth config with data from loaded config.
                        // 2) Set a flag that ADAL auth is good to go.
                        // 3) Update the API Endpoint service with the value from config.
                        // 4) Set the latest config on the service's observable config.
                        // this.updateAdalAuthConfig(config);
                        // this.updateApiEndpoint(config);
                        // this.config$.next(config);
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

	getDocsApiUri() {
		if (isNotUseable(this.config)) throw getInvalidConfigError();

		return path(
			[
				'apis',
				'docs'
			],
			this.config
		);
	}

	getCommonApiUri() {
		if (isNotUseable(this.config)) throw getInvalidConfigError();

		return path(
			[
				'apis',
				'common'
			],
			this.config
		);
	}
}

export const appInitializer = (appConfig: ConfigService) => () => appConfig.load();
