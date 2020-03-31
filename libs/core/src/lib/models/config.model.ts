export interface Config {
    // Base url with trailing slash 
    apiEndpoint: string;

    // Flag indicating if the config has been initialized.
    initialized: boolean;
}

export const defaultConfig: Config = {
    apiEndpoint: "",
    initialized: false
};