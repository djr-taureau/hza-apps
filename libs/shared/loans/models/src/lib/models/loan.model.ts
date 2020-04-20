export interface Loan {
  id: number;
  LoanNumber: string;
  SourceID: number;
  borrower: string;
  coBorrower: string;
  borrowerPrimarySSN: string;
  borrowerSecondarySSN: string;
  borrowerPrimaryEmailAddress: string;
  borrowPrimaryPhone: string;
  borrowerSecondaryPhoneNumber: string;
  propertyAddress1: string;
  propertyCity: string;
}

export function generateMockLoan(): Loan {
  return {
    id: 2,
    LoanNumber: '0000014049',
    SourceID: 1,
    borrower: 'BRETT STALLARD',
    coBorrower: null,
    borrowerPrimarySSN: 'xxx-xx-0095',
    borrowerSecondarySSN: '',
    borrowerPrimaryEmailAddress: 'bsstallar@yahoo.com',
    borrowPrimaryPhone: '9726793244',
    borrowerSecondaryPhoneNumber: null,
    propertyAddress1: '6058  KENWOOD AVE',
    propertyCity: 'Dallas',
  };
}


