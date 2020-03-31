import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Logger } from '@hza/shared/utils';

/**
 * Internal logger.
 */
const logger: Logger = Logger.getLogger('AppInitializerModule');

/**
 * Factory function tat allows Angular to call the ConfigService's load method
 * before the Angular app initializes.
 */
const loadConfig = (configService: ConfigService) => () => configService.load();

@NgModule({
	imports: [],
	exports: [],
	declarations: [],
	providers: [
		// Define services to use as providers as app initializer services.
		ConfigService,

		// Define any service providers to use at app startup.
		{
			provide: APP_INITIALIZER,
			useFactory: loadConfig,
			deps: [ConfigService],
			multi: true
		}
	]
})
export class AppInitializerModule {
	/**
     * Constructor.
     */
	constructor() {
		logger.info(`constructor()`);
	}
}
