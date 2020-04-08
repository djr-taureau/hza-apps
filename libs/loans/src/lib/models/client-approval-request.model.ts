

export interface ClientApprovalRequest {
    ID: number;
    InitialID: number;
    SourceID: number;
    LoanNumber: string;
    MSPSnapShot: string;
    RequestType: number;
    Request: object;
    Requester: string;
    Created: string;
    Comments: object[];
    InvestorName: string;
    Closed: string;
    Assignee: string;
    Completeted: string;
    OriginalComment: string;
    ClientLoanNumber: string;
    LogID: string;
    TimesSentToClient: number;
}