export interface Configuration {
	apis: {
		documents: string;
		common: string;
		amq: string;
		cars: string;
		tasks: string;
	};
}

export const defaultConfig: Configuration = {
  apis: {
		documents: '',
		common: '',
		amq: '',
		cars: '',
		tasks: ''
	}
};
