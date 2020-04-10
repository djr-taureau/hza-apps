import { Injectable } from '@angular/core';
import { ConfigService } from './config/config.service';
import { UrlUtil } from '@hza/shared/utils';
import * as StringUtil from '@hza/shared/utils';
import * as _ from 'lodash';

@Injectable({
	providedIn: 'root'
})
export class ApiEndpointService {
	/**
     * Map of contexts for API endpoints.
     */
	// ** do not use for testing mocks
	public static CONTEXT = 'api';
	/**
     * Map of contexts for API endpoints.
     */
	public static AUTH_CONTEXT = 'users/';
	/**
     * Mock API context.
     */
	public static MOCK_CONTEXT = 'assets/data/';
	public static SESSIONS_CONTEXT = 'sessions';
	/**
     * Map of API endpoints.
     */
	public static ENDPOINT = {
		CONFIG: `assets/config/configuration.local.json`,
		LOGIN: `auth/login/`,
		DOWNTIME: `downtime/{applications}`,
		DOWNTIME_EXTERNAL: `downtime/{application}/{external:bool}`,
		ERROR: `error/{application}/{user?}/{shortmessage?}/{detail?}/{errorlevel?}`,
		LOANS: `loans/search/{source:int}/{search}`,
		LOAN: `loan/search/{source}/{search}/{value}`,
		LOAN_COMMENTS: `loan/comment/{source:int}/{loan}/{workstation?}/{filtertype?}/{filter?}`,
		CARS: 'cars',
		DOCUMENTS: 'documents'
	};

	/**
     * List of secure API endpoints.
     */
	public static endpoints = [
		ApiEndpointService.ENDPOINT.LOANS,
		ApiEndpointService.ENDPOINT.LOAN,
		ApiEndpointService.ENDPOINT.LOAN_COMMENTS,
		ApiEndpointService.ENDPOINT.DOWNTIME
	];

	/**
     * Constructor.
     */
	constructor(private configService: ConfigService) {}

	public getEndpoint(url: string, endpoint: string, params?: {}, query?: {}, noCache: boolean = false): string {
		const baseUrl = `${url}${endpoint}`;
		const urlWithParams: string = StringUtil.replaceTokens(baseUrl, params);

		// if (endpoint === ApiEndpointService.ENDPOINT.REVENUE) {
		//     return `${ApiEndpointService.MOCK_CONTEXT}ryde-rev-2018-03-31.json`;
		// }

		if (noCache) {
			query = this.addNoCacheToQuery(query);
		}
		return this.addQueryParams(urlWithParams, query);
	}

   public addQueryParams(template, params): string {
        let result = template;

        let i = 0;
        const useableParams = _.pickBy(params, (p) => !_.isNil(p) && p !== "");
        // add the params
        _.forEach(useableParams, (v, k) => {
            const startQuery = i === 0 || result.indexOf("?") === -1;
            result += startQuery ? "?" : "&";
            result += k + "=" + v;
            i++;
        });

        return result;
    }

    /**
     * Adds a `noCache` parameter to the query string object.
     * @param query
     */
    private addNoCacheToQuery(query: object): object {
        const noCache: string = String(new Date().getTime());
        return Object.assign(query || {}, { noCache });
    }
}
