export interface Loan {

  loanNumber: string;
  sourceID: number;
  source: string;
  borrower: string;
  coBorrower: string;
  borrowerPrimarySSN: string;
  borrowerSecondarySSN: string;
  borrowerPrimaryEmailAddress: string;
  borrowerPrimaryPhoneNumber: string;
  borrowerSecondaryPhoneNumber: string;
  propertyAddress1: string;
  propertyCity: string;
}

export interface LoanDetail {
  borrower: string;
  borrowerPrimarySSN: string;
  coBorrower: string;
  borrowerSecondarySSN: string;
  propertyAddress1: string;
  propertyCity: string;
}


export function toLoanFormValue<T extends LoanDetail>(data: T): LoanDetail {
  return {
    borrower: data.borrower,
    borrowerPrimarySSN: data.borrowerPrimarySSN,
    coBorrower: data.coBorrower,
    borrowerSecondarySSN: data.borrowerSecondarySSN,
    propertyAddress1: data.propertyAddress1,
    propertyCity: data.propertyCity
  }
}



