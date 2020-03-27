import { RequestType } from './request-type.model';


export interface PropertyPreservation extends RequestType {
    repairsAmount: string;
    bidAmount: string;
    listPriceAmount: string;
};
