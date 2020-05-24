export interface LoanDetailDoc {
	SourceId: number;
	LoanNumber: string;
	InvestorName: string;
	BorrowerPrimaryFullName: string;
	BorrowerPrimaryFirstName: string;
	BorrowerPrimaryLastName: string;
	BorrowerSSN: string;
	BorrowerPrimaryEmailAddress: string;
	BorrowerPrimaryPhoneNumber: string;
	BorrowerFICOScore: number;
	FICOScoreDate: string;
	BorrowerSecondaryFullName: string;
	BorrowerCoSSN: string;
	BorrowerSecondaryPhoneNumber: string;
	BorrowerSecondaryPhoneNumberMSP: string;
	PropertyStreet: string;
	PropertyCity: string;
	PropertyStateCode: string;
	PropertyZipCode: string;
	MailingStreet: string;
	MailingCity: string;
	MailingState: string;
	MailingZipCode: string;
	BrokerPriceOpinionValue: number;
	BrokerPriceOpinionDate: string;
	BasisAmount: number;
	CurrentLegalBalanceAmt: number;
	UnpaidBalance: number;
	SuspenseBalanceAmt: number;
	NextPaymentDueDate: string;
	LastPaymentDate: string;
	ProjectedResolutionType: string;
	ProjectedResolutionDate: string;
	EscrowBalance: number;
	LoanType: string;
	FCAttorneyPhoneNumber: string;
	PaymentHistory: string;
	MonthlyInsurance: number;
	MonthlyPIAmount: number;
	PITIAmt: number;
	AutoACHInd: string;
	AutoACHDate: string;
	CurrentMonthlyTaxAmt: number;
	CurrentMonthlyMortgageInsAmt: number;
	EscrowProjectedShortageAmt: number;
	AttorneyOnFileInd: string;
	LastSkipTraceDate: string;
	LastDoorKnockDate: string;
	NoContactLetterSentDate: string;
	DefaultReasonDescr: string;
	PriorDefaultReasonDescr: string;
	PaymentPlanNextDueDate: string;
	OTDDate: string;
	OTDAmount: number;
	PaymentChangeDate: string;
	PaymentChangeAmt: number;
	PaymentPlanType: string;
	PaymentPlanPaymentAmt: number;
	PaymentPlanNumberOfPayments: number;
	PaymentPlanFinalPaymentDate: string;
	LMLastBAFSentDate: string;
	LossMitRemovalDate: string;
	BankruptcyChapterDescr: string;
	BankruptcySurrender: string;
	BankruptcyDischargedInd: string;
	Terminated: string;
	BankruptcyRemovalDate: string;
	FCProcessor: string;
	FCAttorney: string;
	DemandLetterSentDate: string;
	DemandLetterExpirationDate: string;
	MostRecentEvalSentDate: string;
	InvestorLoanNumber: string;
	LatestValuationValue: number;
	LatestValuationDate: string;
	ContactBoardDate: string;
	DeferredBalance: number;
	LegalBalance: number;
	TaxLastPaidPayeeName: string;
	TaxLastPaidAmt: number;
	TaxLastPaidDate: string;
	TaxNextDueAmt: number;
	TaxNextDueDate: string;
	HazardLastPaidPayeeName: string;
	HazardLastPaidAmt: number;
	HazardLastPaidDate: string;
	HazardNextDueAmt: number;
	HazardNextDueDate: string;
	HazardPolicyNumber: string;
	MILastPaidPayeeName: string;
	MILastPaidDate: string;
	MILastPaidAmt: number;
	MINextDueAmt: number;
	MINextDueDate: string;
	NextPmtDueDate: string;
	PropertyInspectionDate: string;
	PropertyConditionDescr: string;
	AnnualTaxes: number;
	LMSetupDate: string;
	BKIsActiveInd: string;
	LMStatusCode: string;
	FCStatusCode: string;
	FCIsActiveInd: string;
	FCSaleScheduledDate: string;
	CurrentMonthlyHazardInsAmt: number;
	LocationOccupancyStatusDescr: string;
	TaxNextDue: string;
	ActiveLM: string;
	WaterfallStatus: string;
	LastApplicationReceived: string;
	CompleteApplicationReceived: string;
	IsUSSoldierInd: string;
	FCHoldFlag: string;
	FCHoldReason: string;
	FCHoldStartDate: string;
	FCHoldProjectedEndDate: string;
	FCTotalHoldDays: number;
	DaysInFC: number;
	DaysInFCAtFay: number;
	DaysInFCAtFayNotOnHold: number;
	ContestedFlag: boolean;
	FCReferralDate: string;
	FirstLegalDate: string;
	FCServiceCompletedDate: string;
	FCAnswerFiledDate: string;
	FCJudgementDate: string;
	FCSaleActualDate: string;
	FCBidAmount: number;
	FCSuccessfulBidAmount: number;
	FCThirdPartyFlag: string;
	FCAttorneyEmail: string;
	FCRemovalReason: string;
	BKFilingDate: string;
	BKCaseNumber: number;
	DebtorAttorney: string;
	BKCourt: string;
	BKSetupDate: string;
	BKAttorney: string;
	BKAttorneyPhoneNumber: string;
	BKAttorneyEmail: string;
	MFRReferredDate: string;
	MFRFilingDeadline: string;
	MFRFiledDate: string;
	InRemMFRReferredDate: string;
	MFRHearingDate: string;
	MFRGrantedFlag: string;
	MFRGrantedDate: string;
	MFRDeniedDate: string;
	POCBarDate: string;
	POCFiledDate: string;
	TOCFiledDate: string;
	TrusteePayAllFlag: string;
	PostPetitionDueDate: string;
	CramdownFlag: boolean;
	LitigationFlag: boolean;
	AgreedOrderDefault: string;
	AgreedOrderDefaultReferred: string;
	PlanReviewReferred: string;
	StatementReconciliationCompleteDate: string;
	ConfirmationHearingDate: string;
	PlanConfirmedDate: string;
	BKDischargeDate: string;
	BKDismissalDate: string;
	InvestorHeader: string;
	InvestorPortfolioName: string;
	PriorServicerLoanID: string;
	AmqLoanType: string;
	CurrentInterestRatePct: number;
	RecoverCorpAdvanceBalance: number;
	NonRecCorpAdvanceBalance: number;
	TotalCorpAdvanceBalance: number;
	FirstDueDate: string;
	EscAdvanceBalance: number;
	LienPosition: string;
	NoteDate: string;
	MaturityDate: string;
	OriginalBalance: number;
	ModificationFlag: string;
	ModificationDate: string;
	LiquidationReason: string;
	AmqLiquidationDate: string;
	ServiceTransferFlag: boolean;
	PaymentHistory36Months: string;
	PriorModFlag: string;
	PriorModDate: string;
	DaysinStage: number;
	LastDocumentReceived: string;
	Template: string;
	LossMitRemovalReason: string;
	AppealTask: string;
	AppealTaskStatus: string;
	AppealTaskStartDate: string;
	AppealTaskCloseDate: string;
	InteriorBPORequested: boolean;
	InteriorBPOReceived: boolean;
	DILTitleCurativeInitiated: boolean;
	DILTitleClear: boolean;
	DILInvestorApproval: boolean;
	DILDocsToBorrower: boolean;
	DILDocsExecuted: boolean;
	ReceivedTPA: boolean;
	ConfirmPropertyListed: boolean;
	ApprovedListPrice: number;
	ApprovedListPriceDate: null;
	ReceivedSaleContract: boolean;
	ShortSaleInvestorApprovalReceived: boolean;
	ShortSaleApprovalLetterSent: boolean;
	ShortSaleScheduledClosingDate: string;
	ShortSaleActualClosingDate: string;
	ShortSaleContractPrice: number;
	ShortSaleNetProceeds: number;
	LoType: string;
	AM: string;
	AMPhone: string;
	AMEmail: string;
	AMSupervisor: string;
	AMMessage: string;
	TitleEmployee: string;
	Location: string;
	TopSegmentName: string;
	TopSubsegmentName: string;
	CallWindowStart: string;
	CallWindowEnd: string;
	IsInCallWindow: number;
	IsProcessed: number;
	CampaignDesc: string;
	PaymentLastAmt: number;
	LossMitigationType: string;
	DelinquencyDays: number;
	EscrowRestrictedBalance: number;
	ND7Flag: boolean;
	BKFlag: boolean;
	ConditionalMessage: string;
	CallUrgency: number;
	ForeignAddress: number;
	AssignedUserId: string;
	DelinquencyClassCode: string;
	BKStatusCode: string;
	HiType: string;
	ReferralOriginations: string;
	ReferralInsurance: boolean;
	FollowUpDate: string;
	LastContactDate: string;
	LastAttemptDate: string;
	Segmentation: string;
	VMAppPrimary: boolean;
	VMAppSecondary: boolean;
	AltLanguage: string;
	AttorneyOnFile: boolean;
	EmailAuth: boolean;
	EmailId: string;
	ReasonForDefault: string;
	ResolutionType: string;
	VlmOccupancy: string;
	VlmOccupancyDate: string;
	PTPAmount: number;
	PTPDate: string;
	PTPAffirm: string;
	ActiveREOCode: string;
	LateFeeBalance: number;
	NSFFeeBalance: number;
	TotalAmountDue: number;
	BankruptcyRemovalCode: string;
	LitigationStatusCode: string;
	FEMAIndicator: string;
	LastOrigination: string;
	LastInsurance: string;
	ModExplanationLoanOfficer: string;
	ModExplanationPerformed: boolean;
	OptionsOffered: boolean;
}

export class LoanDetailDocModel {
	SourceId: number;
	LoanNumber: string;
	InvestorName: string;
	BorrowerPrimaryFullName: string;
	BorrowerPrimaryFirstName: string;
	BorrowerPrimaryLastName: string;
	BorrowerSSN: string;
	BorrowerPrimaryEmailAddress: string;
	BorrowerPrimaryPhoneNumber: string;
	BorrowerFICOScore: number;
	FICOScoreDate: string;
	BorrowerSecondaryFullName: string;
	BorrowerCoSSN: string;
	BorrowerSecondaryPhoneNumber: string;
	BorrowerSecondaryPhoneNumberMSP: string;
	PropertyStreet: string;
	PropertyCity: string;
	PropertyStateCode: string;
	PropertyZipCode: string;
	MailingStreet: string;
	MailingCity: string;
	MailingState: string;
	MailingZipCode: string;
	BrokerPriceOpinionValue: number;
	BrokerPriceOpinionDate: string;
	BasisAmount: number;
	CurrentLegalBalanceAmt: number;
	UnpaidBalance: number;
	SuspenseBalanceAmt: number;
	NextPaymentDueDate: string;
	LastPaymentDate: string;
	ProjectedResolutionType: string;
	ProjectedResolutionDate: string;
	EscrowBalance: number;
	LoanType: string;
	FCAttorneyPhoneNumber: string;
	PaymentHistory: string;
	MonthlyInsurance: number;
	MonthlyPIAmount: number;
	PITIAmt: number;
	AutoACHInd: string;
	AutoACHDate: string;
	CurrentMonthlyTaxAmt: number;
	CurrentMonthlyMortgageInsAmt: number;
	EscrowProjectedShortageAmt: number;
	AttorneyOnFileInd: string;
	LastSkipTraceDate: string;
	LastDoorKnockDate: string;
	NoContactLetterSentDate: string;
	DefaultReasonDescr: string;
	PriorDefaultReasonDescr: string;
	PaymentPlanNextDueDate: string;
	OTDDate: string;
	OTDAmount: number;
	PaymentChangeDate: string;
	PaymentChangeAmt: number;
	PaymentPlanType: string;
	PaymentPlanPaymentAmt: number;
	PaymentPlanNumberOfPayments: number;
	PaymentPlanFinalPaymentDate: string;
	LMLastBAFSentDate: string;
	LossMitRemovalDate: string;
	BankruptcyChapterDescr: string;
	BankruptcySurrender: string;
	BankruptcyDischargedInd: string;
	Terminated: string;
	BankruptcyRemovalDate: string;
	FCProcessor: string;
	FCAttorney: string;
	DemandLetterSentDate: string;
	DemandLetterExpirationDate: string;
	MostRecentEvalSentDate: string;
	InvestorLoanNumber: string;
	LatestValuationValue: number;
	LatestValuationDate: string;
	ContactBoardDate: string;
	DeferredBalance: number;
	LegalBalance: number;
	TaxLastPaidPayeeName: string;
	TaxLastPaidAmt: number;
	TaxLastPaidDate: string;
	TaxNextDueAmt: number;
	TaxNextDueDate: string;
	HazardLastPaidPayeeName: string;
	HazardLastPaidAmt: number;
	HazardLastPaidDate: string;
	HazardNextDueAmt: number;
	HazardNextDueDate: string;
	HazardPolicyNumber: string;
	MILastPaidPayeeName: string;
	MILastPaidDate: string;
	MILastPaidAmt: number;
	MINextDueAmt: number;
	MINextDueDate: string;
	NextPmtDueDate: string;
	PropertyInspectionDate: string;
	PropertyConditionDescr: string;
	AnnualTaxes: number;
	LMSetupDate: string;
	BKIsActiveInd: string;
	LMStatusCode: string;
	FCStatusCode: string;
	FCIsActiveInd: string;
	FCSaleScheduledDate: string;
	CurrentMonthlyHazardInsAmt: number;
	LocationOccupancyStatusDescr: string;
	TaxNextDue: string;
	ActiveLM: string;
	WaterfallStatus: string;
	LastApplicationReceived: string;
	CompleteApplicationReceived: string;
	IsUSSoldierInd: string;
	FCHoldFlag: string;
	FCHoldReason: string;
	FCHoldStartDate: string;
	FCHoldProjectedEndDate: string;
	FCTotalHoldDays: number;
	DaysInFC: number;
	DaysInFCAtFay: number;
	DaysInFCAtFayNotOnHold: number;
	ContestedFlag: boolean;
	FCReferralDate: string;
	FirstLegalDate: string;
	FCServiceCompletedDate: string;
	FCAnswerFiledDate: string;
	FCJudgementDate: string;
	FCSaleActualDate: string;
	FCBidAmount: number;
	FCSuccessfulBidAmount: number;
	FCThirdPartyFlag: string;
	FCAttorneyEmail: string;
	FCRemovalReason: string;
	BKFilingDate: string;
	BKCaseNumber: number;
	DebtorAttorney: string;
	BKCourt: string;
	BKSetupDate: string;
	BKAttorney: string;
	BKAttorneyPhoneNumber: string;
	BKAttorneyEmail: string;
	MFRReferredDate: string;
	MFRFilingDeadline: string;
	MFRFiledDate: string;
	InRemMFRReferredDate: string;
	MFRHearingDate: string;
	MFRGrantedFlag: string;
	MFRGrantedDate: string;
	MFRDeniedDate: string;
	POCBarDate: string;
	POCFiledDate: string;
	TOCFiledDate: string;
	TrusteePayAllFlag: string;
	PostPetitionDueDate: string;
	CramdownFlag: boolean;
	LitigationFlag: boolean;
	AgreedOrderDefault: string;
	AgreedOrderDefaultReferred: string;
	PlanReviewReferred: string;
	StatementReconciliationCompleteDate: string;
	ConfirmationHearingDate: string;
	PlanConfirmedDate: string;
	BKDischargeDate: string;
	BKDismissalDate: string;
	InvestorHeader: string;
	InvestorPortfolioName: string;
	PriorServicerLoanID: string;
	AmqLoanType: string;
	CurrentInterestRatePct: number;
	RecoverCorpAdvanceBalance: number;
	NonRecCorpAdvanceBalance: number;
	TotalCorpAdvanceBalance: number;
	FirstDueDate: string;
	EscAdvanceBalance: number;
	LienPosition: string;
	NoteDate: string;
	MaturityDate: string;
	OriginalBalance: number;
	ModificationFlag: string;
	ModificationDate: string;
	LiquidationReason: string;
	AmqLiquidationDate: string;
	ServiceTransferFlag: boolean;
	PaymentHistory36Months: string;
	PriorModFlag: string;
	PriorModDate: string;
	DaysinStage: number;
	LastDocumentReceived: string;
	Template: string;
	LossMitRemovalReason: string;
	AppealTask: string;
	AppealTaskStatus: string;
	AppealTaskStartDate: string;
	AppealTaskCloseDate: string;
	InteriorBPORequested: boolean;
	InteriorBPOReceived: boolean;
	DILTitleCurativeInitiated: boolean;
	DILTitleClear: boolean;
	DILInvestorApproval: boolean;
	DILDocsToBorrower: boolean;
	DILDocsExecuted: boolean;
	ReceivedTPA: boolean;
	ConfirmPropertyListed: boolean;
	ApprovedListPrice: number;
	ApprovedListPriceDate: null;
	ReceivedSaleContract: boolean;
	ShortSaleInvestorApprovalReceived: boolean;
	ShortSaleApprovalLetterSent: boolean;
	ShortSaleScheduledClosingDate: string;
	ShortSaleActualClosingDate: string;
	ShortSaleContractPrice: number;
	ShortSaleNetProceeds: number;
	LoType: string;
	AM: string;
	AMPhone: string;
	AMEmail: string;
	AMSupervisor: string;
	AMMessage: string;
	TitleEmployee: string;
	Location: string;
	TopSegmentName: string;
	TopSubsegmentName: string;
	CallWindowStart: string;
	CallWindowEnd: string;
	IsInCallWindow: number;
	IsProcessed: number;
	CampaignDesc: string;
	PaymentLastAmt: number;
	LossMitigationType: string;
	DelinquencyDays: number;
	EscrowRestrictedBalance: number;
	ND7Flag: boolean;
	BKFlag: boolean;
	ConditionalMessage: string;
	CallUrgency: number;
	ForeignAddress: number;
	AssignedUserId: string;
	DelinquencyClassCode: string;
	BKStatusCode: string;
	HiType: string;
	ReferralOriginations: string;
	ReferralInsurance: boolean;
	FollowUpDate: string;
	LastContactDate: string;
	LastAttemptDate: string;
	Segmentation: string;
	VMAppPrimary: boolean;
	VMAppSecondary: boolean;
	AltLanguage: string;
	AttorneyOnFile: boolean;
	EmailAuth: boolean;
	EmailId: string;
	ReasonForDefault: string;
	ResolutionType: string;
	VlmOccupancy: string;
	VlmOccupancyDate: string;
	PTPAmount: number;
	PTPDate: string;
	PTPAffirm: string;
	ActiveREOCode: string;
	LateFeeBalance: number;
	NSFFeeBalance: number;
	TotalAmountDue: number;
	BankruptcyRemovalCode: string;
	LitigationStatusCode: string;
	FEMAIndicator: string;
	LastOrigination: string;
	LastInsurance: string;
	ModExplanationLoanOfficer: string;
	ModExplanationPerformed: boolean;
	OptionsOffered: boolean;
	
	
  static fromJson(data: any): LoanDetailDocModel {
    return Object.assign(new LoanDetailDocModel(), {
      ...data,
      start_at: data.start_at
        ? new Date(data.start_at)
        : null,
      end_at: data.end_at
        ? new Date(data.end_at)
        : null
    });
  }

  static fromJsonList(arr: any[]): LoanDetailDocModel[] {
    return arr.map(data => LoanDetailDocModel.fromJson(data));
  }
}
export const mockLoanDetailDoc: LoanDetailDoc = {
	SourceId: 1,

	LoanNumber: '0000018591',

	InvestorName: 'MetLife',

	BorrowerPrimaryFullName: 'MARIA PINA',

	BorrowerPrimaryFirstName: 'MARIA',

	BorrowerPrimaryLastName: 'PINA',

	BorrowerSSN: 'xxx-xx-2905',

	BorrowerPrimaryEmailAddress: null,

	BorrowerPrimaryPhoneNumber: '4693345939',

	BorrowerFICOScore: 694,

	FICOScoreDate: '2020-03-31T00:00:00',

	BorrowerSecondaryFullName: null,

	BorrowerCoSSN: null,

	BorrowerSecondaryPhoneNumber: '2143392363',

	BorrowerSecondaryPhoneNumberMSP: '2143392363',

	PropertyStreet: '1103  HANSBORO AVE',

	PropertyCity: 'DALLAS',

	PropertyStateCode: 'TX',

	PropertyZipCode: '75224',

	MailingStreet: '1103 HANSBORO AVE',

	MailingCity: 'DALLAS',

	MailingState: 'TX',

	MailingZipCode: '75224',

	BrokerPriceOpinionValue: 68100.0,

	BrokerPriceOpinionDate: '2013-02-20T00:00:00',

	BasisAmount: 34679.9,

	CurrentLegalBalanceAmt: 2383.64,

	UnpaidBalance: 4279.79,

	SuspenseBalanceAmt: 484.69,

	NextPaymentDueDate: '2020-05-01T00:00:00',

	LastPaymentDate: '2020-04-09T00:00:00',

	ProjectedResolutionType: 'Full Amortization',

	ProjectedResolutionDate: '2020-12-01T00:00:00',

	EscrowBalance: 1444.13,

	LoanType: 'ARM',

	FCAttorneyPhoneNumber: null,

	PaymentHistory: 'PPPPPPPPPPPP',

	MonthlyInsurance: 148.78,

	MonthlyPIAmount: 614.47,

	PITIAmt: 930.97,

	AutoACHInd: 'Y',

	AutoACHDate: '2020-05-01T00:00:00',

	CurrentMonthlyTaxAmt: 142.45,

	CurrentMonthlyMortgageInsAmt: 0.0,

	EscrowProjectedShortageAmt: null,

	AttorneyOnFileInd: 'N',

	LastSkipTraceDate: null,

	LastDoorKnockDate: null,

	NoContactLetterSentDate: null,

	DefaultReasonDescr: 'NWK - REASON UNKNOWN',

	PriorDefaultReasonDescr: 'NWK - Reason Unknown',

	PaymentPlanNextDueDate: null,

	OTDDate: null,

	OTDAmount: null,

	PaymentChangeDate: '2020-05-01T00:00:00',

	PaymentChangeAmt: 930.97,

	PaymentPlanType: null,

	PaymentPlanPaymentAmt: null,

	PaymentPlanNumberOfPayments: null,

	PaymentPlanFinalPaymentDate: null,

	LMLastBAFSentDate: null,

	LossMitRemovalDate: null,

	BankruptcyChapterDescr: null,

	BankruptcySurrender: null,

	BankruptcyDischargedInd: null,

	Terminated: null,

	BankruptcyRemovalDate: null,

	FCProcessor: null,

	FCAttorney: null,

	DemandLetterSentDate: null,

	DemandLetterExpirationDate: null,

	MostRecentEvalSentDate: null,

	InvestorLoanNumber: '225065364',

	LatestValuationValue: 99500.0,

	LatestValuationDate: '2016-03-13T00:00:00',

	ContactBoardDate: '2013-04-10T00:00:00',

	DeferredBalance: 0.0,

	LegalBalance: 614.47,

	TaxLastPaidPayeeName: 'DALLAS COUNTY',

	TaxLastPaidAmt: -1709.38,

	TaxLastPaidDate: '2019-12-05T00:00:00',

	TaxNextDueAmt: 1709.38,

	TaxNextDueDate: '2020-12-01T00:00:00',

	HazardLastPaidPayeeName: 'STATE FARM INS CO',

	HazardLastPaidAmt: -1785.39,

	HazardLastPaidDate: '2019-09-26T00:00:00',

	HazardNextDueAmt: 1785.39,

	HazardNextDueDate: '2020-10-01T00:00:00',

	HazardPolicyNumber: '58CAL6381',

	MILastPaidPayeeName: null,

	MILastPaidDate: null,

	MILastPaidAmt: null,

	MINextDueAmt: null,

	MINextDueDate: null,

	NextPmtDueDate: '2020-05-01T00:00:00',

	PropertyInspectionDate: null,

	PropertyConditionDescr: null,

	AnnualTaxes: 1709.4,

	LMSetupDate: null,

	BKIsActiveInd: 'N',

	LMStatusCode: null,

	FCStatusCode: null,

	FCIsActiveInd: 'N',

	FCSaleScheduledDate: null,

	CurrentMonthlyHazardInsAmt: 148.78,

	LocationOccupancyStatusDescr: 'OCCUPIED BY UNKNOWN',

	TaxNextDue: null,

	ActiveLM: 'N',

	WaterfallStatus: 'ACTIVE',

	LastApplicationReceived: null,

	CompleteApplicationReceived: null,

	IsUSSoldierInd: null,

	FCHoldFlag: null,

	FCHoldReason: null,

	FCHoldStartDate: null,

	FCHoldProjectedEndDate: null,

	FCTotalHoldDays: null,

	DaysInFC: null,

	DaysInFCAtFay: null,

	DaysInFCAtFayNotOnHold: null,

	ContestedFlag: null,

	FCReferralDate: null,

	FirstLegalDate: null,

	FCServiceCompletedDate: null,

	FCAnswerFiledDate: null,

	FCJudgementDate: null,

	FCSaleActualDate: null,

	FCBidAmount: null,

	FCSuccessfulBidAmount: null,

	FCThirdPartyFlag: null,

	FCAttorneyEmail: null,

	FCRemovalReason: null,

	BKFilingDate: null,

	BKCaseNumber: null,

	DebtorAttorney: null,

	BKCourt: null,

	BKSetupDate: null,

	BKAttorney: null,

	BKAttorneyPhoneNumber: null,

	BKAttorneyEmail: null,

	MFRReferredDate: null,

	MFRFilingDeadline: null,

	MFRFiledDate: null,

	InRemMFRReferredDate: null,

	MFRHearingDate: null,

	MFRGrantedFlag: 'N',

	MFRGrantedDate: null,

	MFRDeniedDate: null,

	POCBarDate: null,

	POCFiledDate: null,

	TOCFiledDate: null,

	TrusteePayAllFlag: null,

	PostPetitionDueDate: null,

	CramdownFlag: null,

	LitigationFlag: null,

	AgreedOrderDefault: null,

	AgreedOrderDefaultReferred: null,

	PlanReviewReferred: null,

	StatementReconciliationCompleteDate: null,

	ConfirmationHearingDate: null,

	PlanConfirmedDate: null,

	BKDischargeDate: null,

	BKDismissalDate: null,

	InvestorHeader: 'A30',

	InvestorPortfolioName: 'MLIC',

	PriorServicerLoanID: '274261114',

	AmqLoanType: 'ARM',

	CurrentInterestRatePct: 9.95,

	RecoverCorpAdvanceBalance: 0.0,

	NonRecCorpAdvanceBalance: 117.56,

	TotalCorpAdvanceBalance: 117.56,

	FirstDueDate: '2006-01-01T00:00:00',

	EscAdvanceBalance: 0.0,

	LienPosition: '1',

	NoteDate: '2005-11-07T00:00:00',

	MaturityDate: '2020-12-01T00:00:00',

	OriginalBalance: 81600.0,

	ModificationFlag: 'N',

	ModificationDate: null,

	LiquidationReason: null,

	AmqLiquidationDate: null,

	ServiceTransferFlag: null,

	PaymentHistory36Months: 'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP',

	PriorModFlag: 'N',

	PriorModDate: null,

	DaysinStage: 0,

	LastDocumentReceived: null,

	Template: null,

	LossMitRemovalReason: null,

	AppealTask: null,

	AppealTaskStatus: null,

	AppealTaskStartDate: null,

	AppealTaskCloseDate: null,

	InteriorBPORequested: null,

	InteriorBPOReceived: null,

	DILTitleCurativeInitiated: null,

	DILTitleClear: null,

	DILInvestorApproval: null,

	DILDocsToBorrower: null,

	DILDocsExecuted: null,

	ReceivedTPA: null,

	ConfirmPropertyListed: null,

	ApprovedListPrice: null,

	ApprovedListPriceDate: null,

	ReceivedSaleContract: null,

	ShortSaleInvestorApprovalReceived: null,

	ShortSaleApprovalLetterSent: null,

	ShortSaleScheduledClosingDate: null,

	ShortSaleActualClosingDate: null,

	ShortSaleContractPrice: null,

	ShortSaleNetProceeds: null,

	LoType: '3',

	AM: 'Customer Service',

	AMPhone: null,

	AMEmail: null,

	AMSupervisor: null,

	AMMessage:
		'Pandemic Assistance: Eligible for 90-day Forbearance Plan.  Bi-Weekly Auto ACH\n4/6/16 - Need permission to leave VM',

	TitleEmployee: null,

	Location: null,

	TopSegmentName: 'Current',

	TopSubsegmentName: 'Auto ACH',

	CallWindowStart: '2020-04-29T08:00:00',

	CallWindowEnd: '2020-04-29T20:45:00',

	IsInCallWindow: 1,

	IsProcessed: 0,

	CampaignDesc: null,

	PaymentLastAmt: null,

	LossMitigationType: 'No Loss Mit',

	DelinquencyDays: 0,

	EscrowRestrictedBalance: 0.0,

	ND7Flag: false,

	BKFlag: false,

	ConditionalMessage: 'RAUL PINA AUTH SPOUSE 12/7/17',

	CallUrgency: 100,

	ForeignAddress: 0,

	AssignedUserId: '+c1',

	DelinquencyClassCode: 'C1',

	BKStatusCode: null,

	HiType: '1',

	ReferralOriginations: null,

	ReferralInsurance: true,

	FollowUpDate: null,

	LastContactDate: '2017-12-07T12:52:23',

	LastAttemptDate: '2017-12-07T12:52:23',

	Segmentation: '',

	VMAppPrimary: false,

	VMAppSecondary: false,

	AltLanguage: '& ',

	AttorneyOnFile: null,

	EmailAuth: false,

	EmailId: '',

	ReasonForDefault: '015',

	ResolutionType: 'Full Amortization',

	VlmOccupancy: null,

	VlmOccupancyDate: null,

	PTPAmount: null,

	PTPDate: null,

	PTPAffirm: null,

	ActiveREOCode: null,

	LateFeeBalance: 0.0,

	NSFFeeBalance: 0.0,

	TotalAmountDue: 0.0,

	BankruptcyRemovalCode: null,

	LitigationStatusCode: null,

	FEMAIndicator: null,

	LastOrigination: null,

	LastInsurance: null,

	ModExplanationLoanOfficer: null,

	ModExplanationPerformed: null,

	OptionsOffered: null
};
