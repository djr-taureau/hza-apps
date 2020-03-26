import { RequestType } from './request-type.model';
export interface Reo extends RequestType {
    contractPrice: string;
    listPriceAmount: string;
    outStandingHOADues: string;
    outstandingTaxes: string;
};