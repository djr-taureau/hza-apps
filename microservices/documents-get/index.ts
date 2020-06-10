import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { errorResponse, queryResponse } from '../libs/function-utilities';
import { DocumentService } from '../libs/services';
import '../libs/typeorm/connect';

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
	context.log('HTTP trigger function processed a request.');
	const documents = new DocumentService();
	try {
		const results = await documents.getDocuments(req.query);
		context.res.body = queryResponse(req.query, results);
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
};

export default httpTrigger;
