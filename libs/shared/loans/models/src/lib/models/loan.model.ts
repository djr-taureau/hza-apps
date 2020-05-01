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
  propertyAddress1: string;
  propertyCity: string;
}


export function toLoanFormValue<T extends LoanDetail>(data: T): LoanDetail {
  return {
    borrower: data.borrower,
    borrowerPrimarySSN: data.borrowerPrimarySSN,
    propertyAddress1: data.propertyAddress1,
    propertyCity: data.propertyCity
  }
}

// export function generateMockLoan(): Loan {
//   return {

//     loanNumber: '0000014049',
//     sourceID: 1,
//     source: 'Fay',
//     borrower: 'BRETT STALLARD',
//     coBorrower: null,
//     borrowerPrimarySSN: 'xxx-xx-0095',
//     borrowerSecondarySSN: '',
//     borrowerPrimaryEmailAddress: 'bsstallar@yahoo.com',
//     borrowPrimaryPhone: '9726793244',
//     borrowerSecondaryPhoneNumber: null,
//     propertyAddress1: '6058  KENWOOD AVE',
//     propertyCity: 'Dallas',
//   };
// }


