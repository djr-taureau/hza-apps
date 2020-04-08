export interface Loan {
  id: number;
  LoanNumber: string;
  SourceID: number;
  Name: string;
  Phone: string;
  City: string;
}

export function generateMockLoan(): Loan {
  return {
    id: 2,
    LoanNumber: '3404040',
    SourceID: 1,
    Name: 'Mary Johnson',
    Phone: '2142239999',
    City: 'Dallas',
  };
}
