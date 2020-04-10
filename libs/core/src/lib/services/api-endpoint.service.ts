import { Injectable } from '@angular/core';
import { UrlUtil } from '@hza/shared/utils';
import * as StringUtil from '@hza/shared/utils';
import * as _ from 'lodash';

@Injectable({
	providedIn: 'root'
})
export class ApiEndpointService {
	/**
     * Map of possible base url values.
     *
     * Local: Uses the local Node API URL.
     * Remote: Uses the remote AWS API URL.
     * Build: Uses the compile time provided API URL.
     */
	public static BASE_URL = {
		LOCAL: 'http://localhost:3000/',
		REMOTE: '',
		FROM_CONFIG: 'POPULATED_BY_CONFIG.JSON'
	};

	/**
     * Map of possible base url values.
     *
     * Local: Uses the local Node API URL.
     * Remote: Uses the remote AWS API URL.
     * Build: Uses the compile time provided API URL.
     */
	public static API_CONTEXT = {
		LOCAL: 'local',
		REMOTE: 'remote',
		BUILD: 'build'
	};

	/**
     * Map of protocols for API endpoints.
     */
	public static PROTOCOL = {
		HTTP: 'http://',
		HTTPS: 'https://'
	};

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
		DOCUMENTS: 'documents',
	};

	/**
     * List of secure API endpoints.
     */
	public static secureEndpoints = [
		ApiEndpointService.ENDPOINT.LOANS,
		ApiEndpointService.ENDPOINT.LOAN,
		ApiEndpointService.ENDPOINT.LOAN_COMMENTS,
		ApiEndpointService.ENDPOINT.DOWNTIME
	];

	/**
     * Constructor.
     */
	constructor() {}

	/**
     * Constructs an API endpoint.
     *
     * NOTE: In the future this could construct API endpoints using environmental configs provided
     * at build time or at runtime via (for example) query string params...but for now we'll
     * keep this dumb simple.
     */

	public getEndpoint(endpoint: string, params?: {}, query?: {}, noCache: boolean = false): string {
		const isConfig = ApiEndpointService.ENDPOINT.CONFIG === endpoint;
		const baseUrl = `${this.getBaseUrl()}${endpoint}`;
		const urlWithParams: string = StringUtil.replaceTokens(baseUrl, params);

		if (noCache) {
			query = this.addNoCacheToQuery(query);
		}
		return this.addQueryParams(urlWithParams, query);
	}

	/**
     * Getter for the base URL for the API.
     */
	public getBaseUrl(): string {
		return `${ApiEndpointService.BASE_URL.LOCAL}`;
	}

	/**
     * Determines if the requested URL is an authentication API endpoint.
     * @param {string} url
     * @returns {boolean}
     */
	public isAuthEndpoint(url: string = ''): boolean {
		return url.toLowerCase().indexOf(ApiEndpointService.AUTH_CONTEXT) > -1;
	}

	/**
     * Determines if the requested URL is an API endpoint.
     * @param {string} url
     * @returns {boolean}
     */
	public isApiEndpoint(url: string = ''): boolean {
		return url.toLowerCase().indexOf(ApiEndpointService.CONTEXT) > -1;
	}

	/**
     * Determines if the requested URL is a secure API endpoint.
     * @param {string} requestedUrl
     * @returns {boolean}
     */
	public isSecureEndpoint(requestedUrl: string = ''): boolean {
		const check = ApiEndpointService.secureEndpoints.some(
			(url: string) => requestedUrl.toLowerCase().indexOf(url) > -1
		);
		return check;
	}
	/**
     * Adds query string params to a URL.
     * @param template
     * @param params
     */
	public addQueryParams(template, params): string {
		let result = template;

		let i = 0;
		const useableParams = _.pickBy(params, (p) => !_.isNil(p) && p !== '');
		// add the params
		_.forEach(useableParams, (v, k) => {
			const startQuery = i === 0 || result.indexOf('?') === -1;
			result += startQuery ? '?' : '&';
			result += k + '=' + v;
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
