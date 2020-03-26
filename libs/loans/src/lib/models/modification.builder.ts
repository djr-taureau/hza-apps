import { Modification } from "./modification.model";

export class ModificationBuilder {
  private readonly _modification: Modification;

  constructor() {
    this._modification = {
      bpoDate: '',
,
      bpoValueQuickSale: '',  
      hampModification: '',
      fullyCapitalizedAmount: '',
      amortizedAmount: '',
      remainingBalance: '',
      remainingBalanceAction: '',
      interestRate: '',
      termInMonths: '',
      amortizedTerm: '',
      monthlyPIPaymentAmount: '',
      monthlyEscrowPayment: '',
      hoaPayment: '',
      monthlyPitiPayment: '',
      firstPaymentDueDate: '',
      postModificationLTV: '',
      simpleYield: '',
      liquidationType: '',
      liquidationDate: '',
      dtiProposedPITI: '',
      disposableIncome: '',
      grossIncome: '',
      verifiedReserves: '',
      
    };
  }

  bpoDate(bpoDate: string): ModificationBuilder {
    this._modification.bpoDate = bpoDate;
    return this;
  }
  
  bpoValueAsIs(bpoValueAsIs: string): ModificationBuilder {
    this._modification.bpoValueAsIs = bpoValueAsIs;
    return this;
  }
  
  bpoValueQuickSale(bpoValueQuickSale: string): ModificationBuilder {
    this._modification.bpoValueQuickSale = bpoValueQuickSale;
    return this;
  }

  build(): Modification {
    return this._modification;
  }
}