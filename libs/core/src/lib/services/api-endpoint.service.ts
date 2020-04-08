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
		// ** for versioning of APIs
		V5: '',
		REMOTE: '',
		FROM_CONFIG: 'http://localhost:3000/'
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
	public static AUTH_CONTEXT = 'auth/';

	/**
     * Mock API context.
     */
	public static MOCK_CONTEXT = 'assets/data/';

	/**
     * Map of API endpoints.
     */
	public static ENDPOINT = {
		CONFIG: `assets/config/configuration.local.json`,
		LOGIN: `auth/login/`,
		REGISTER: `auth/register`,
		EXAMPLE_DETAILS: 'example/{id}/details/{id}',
		LOANS: 'loans',
		CARS: 'cars',
		DOCUMENTS: 'documents',
		COMPANY_INITIATIVES: `assets/data/mock-initiatives.json`,
		LOAN_DOCUMENTS: 'companies/{id}/documents',
		COMPANY_CASH: 'companies/{id}/cash',
		TEAMS: 'companies/{id}/team-members',
		TEAM_MEMBER: 'companies/{id}/team-members/{member_id}',
		VALUATION: 'companies/{id}/valuation',
		REVENUE: 'companies/{id}/revenue',
		EBIDTA: 'companies/{id}/ebitda',
		KPI: 'companies/{id}/kpis'
	};

	/**
     * List of secure API endpoints.
     */
	public static secureEndpoints = [
		ApiEndpointService.ENDPOINT.LOAN_DOCUMENTS,
		ApiEndpointService.ENDPOINT.TEAMS,
		ApiEndpointService.ENDPOINT.TEAM_MEMBER,
		ApiEndpointService.ENDPOINT.REVENUE
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
     * Determines if the current route is a mock for UX testing.
     * @param {string} url
     * @returns {boolean}
     */
	public isMockRoute(url: string = ''): boolean {
		return url.toLowerCase().indexOf('mock') > -1;
	}

	/**
     * Determines if the API should use mock API endpoints.
     */
	public useMockEndpoint(): boolean {
		return !!UrlUtil.getQueryStringParamValue('mocks', UrlUtil.STRING_TYPE);
	}

	/**
     * Determines if the API should use mock API endpoints.
     */
	public getMockEndpoint(endpoint: string): string {
		const mocks: string = UrlUtil.getQueryStringParamValue('mocks', UrlUtil.STRING_TYPE) as string;
		const baseMockUrl = 'assets/data/';

		if (endpoint === ApiEndpointService.ENDPOINT.REVENUE) {
			if (mocks.indexOf('revenue') !== -1) {
				return `${baseMockUrl}db.json`;
			} else {
				return '';
			}
		} else {
			return '';
		}
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
