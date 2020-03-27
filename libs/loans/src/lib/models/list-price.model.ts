import { RequestType } from './request-type.model';
export interface ListPrice extends RequestType {
    shortSaleREO: string;
    intialOrUpdatedListPrice: string;
    approvedBy: string;
    suggestedListPriceAmount: string;
};