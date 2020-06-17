import { API_ENDPOINTS } from './endpoints.config';
import { EndpointsService } from './endpoints.service';


export const getEndpointMock = () => [
	EndpointsService,
	{
		provide: API_ENDPOINTS,
		useValue: {
			docsService: 'http://localhost:3000/documents',
			loansService: 'http://localhost:3000/loans',
		},
	},
];