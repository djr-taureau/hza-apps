import { RequestType } from './request-type.model';
export interface ShortSale extends RequestType {
    ficoScore: string;
    hafa: string;
    hafaRecoveryAmount: string;
    miCoverage: string;
    miCompany: string;
    miCoverageDetails: string;
    listPriceAmount: string;
    commentOnListPrice: string;
    contractPrice: string;
    juniorLiens: string;
    cashForKeysRequestedAmount: string;
    closingCosts: string;
    netProceeds: string;
    daysOnMarket: string;
    commentOnDaysOnMarket;
};
