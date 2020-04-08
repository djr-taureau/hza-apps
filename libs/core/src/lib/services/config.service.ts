import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Config, defaultConfig } from "./config/config.model";
import { catchError, map } from "rxjs/operators";
import { ApiEndpointService } from "./api-endpoint.service";
import { Logger } from "@hza/shared/utils";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ConfigService {
    /**
     * Internal logger.
     */
    private static logger: Logger = Logger.getLogger("ConfigService");

    /**
     * Reference to the application's local JSON config data. Saved for later
     * as the data is loaded before app init and therefore not ready to save
     * to app store.
     */
    private config$: BehaviorSubject<Config> = new BehaviorSubject(defaultConfig);

    /**
     * Constructor.
     */
    constructor(
        protected http: HttpClient,
        private apiEndpointService: ApiEndpointService,
    ) {
        ConfigService.logger.debug(`constructor()`);
    }

    /**
     * Requests the application's config data.
     */
    public load(): Promise<Config> {
        const url = this.apiEndpointService.getEndpoint(ApiEndpointService.ENDPOINT.CONFIG, null, null, true);
        ConfigService.logger.debug(`load()`);
        return (
            this.http
                .get(url)
                .pipe(
                    map((response: Config) => {
                        ConfigService.logger.debug(`loadSuccess()`);
                        const config: Config = {
                            ...(response as Config),
                            initialized: true
                        };
                        this.updateApiEndpoint(config);
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
                        ConfigService.logger.warn(`loadFault( ${fault.message} )`);
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

    /**
     * Accessor for the private member config as an observable stream.
     */
    public getConfig(): BehaviorSubject<Config> {
        return this.config$;
    }

    /**
     * Accessor for the private member config value.
     */
    public getConfigValue(): Config {
        return this.getConfig().value;
    }

    /**
     * Accessor for the config's API endpoint.
     */
    public getConfigApiEndpoint(): string {
        return this.getConfigValue().apiEndpoint;
    }

    /**
     * Update the API endpoint with data from the loaded config.
     * @param config
     */
    private updateApiEndpoint(config: Config): void {
        ApiEndpointService.BASE_URL.FROM_CONFIG = config.apiEndpoint;
    }

}