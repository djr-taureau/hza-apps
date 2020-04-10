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

	constructor(@Inject(CONFIG_URL) private configUrl: string, private http: HttpClient) {}

	load() {
		return this.http
			.get<Configuration>(this.configUrl)
			.toPromise()
			.then((result) => (this.config = result))
			.catch(() => {
				throw getConfigError(this.configUrl);
			});
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
