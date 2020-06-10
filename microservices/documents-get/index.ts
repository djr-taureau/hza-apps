import { Context, HttpRequest } from '../libs/azure-function-types';
import { errorResponse, queryResponse } from '../libs/function-utilities';
import { DocumentService } from '../libs/services';
import '../libs/typeorm/connect';


export default async function run(context: Context, req: HttpRequest) {
    const documents = new DocumentService();

	try {
		const results = await documents.getDocuments(req.query);
		context.res.body = queryResponse(req.query, results);
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}