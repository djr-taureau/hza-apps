import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BroadcastService, MsalConfig} from '@azure/msal-angular';
import { MsalService, MSAL_CONFIG } from '@azure/msal-angular';
import { AUTH_CONFIG, AUTH_PROVIDER } from '@hza/auth';
import { getFullUrl } from '@hza/shared/utils';
import { AzureADAuthProviderConfig } from './azure-ad-auth-config';
import { AzureAdAuthProvider } from './azure-ad-auth.provider';


@NgModule({
	imports: [CommonModule],
	providers: [
		{
			provide: MSAL_CONFIG,
			useFactory: msalConfigFactory,
			deps: [AUTH_CONFIG]
		},
		MsalService,
		BroadcastService,
		{ provide: AUTH_PROVIDER, useClass: AzureAdAuthProvider }
	]
})
export class AzureAdAuthProviderModule {}

export function msalConfigFactory(
	config: AzureADAuthProviderConfig
): MsalConfig {
	return {
		clientID: config.clientID,
		cacheLocation: 'localStorage',
		authority: config.authority,
		// redirectUri,
		postLogoutRedirectUri: getFullUrl('/logout'),
		popUp: false,
		consentScopes: config.scopes,
		isAngular: true
	};
}
