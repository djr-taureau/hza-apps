export interface Configuration {
	apis: {
		docs: string;
		common: string;
		amq: string;
		cars: string;
		tasks: string;
	};
}

export const defaultConfig: Configuration = {
  apis: {
		docs: '',
		common: '',
		amq: '',
		cars: '',
		tasks: ''
	}
};
