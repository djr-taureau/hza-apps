import {
	createHttpFactory,
	HTTPMethod,
	mockProvider,
	SpectatorHttp,
} from '@ngneat/spectator';
import { ApiEndpointService, ApiService, ConfigService } from '@hza/core';
import { LoansService } from '@hza/shared/loans/data-access/data';

describe('LoansService', () => {
	let spectator: SpectatorHttp<LoansService>;
	const createHttp = createHttpFactory({
		service: LoansService,
		providers: [
			mockProvider(ApiService),
			mockProvider(ConfigService),
		],
	});

	beforeEach(() => (spectator = createHttp()));

	describe('getLoans', () => {
		it('should call GET loans', () => {
			// spectator.service.getLoans().subscribe();
			spectator.expectOne('http://localhost:3000/loans', HTTPMethod.GET);
		});
	});
});