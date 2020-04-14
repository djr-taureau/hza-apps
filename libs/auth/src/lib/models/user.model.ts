export interface User {
  machine: string;
  role: string;
  status: string;
  session: string;
  name: string;
  phone: string;
  email: string;
  employeeID: number;
  processorIDFay: string;
  processorIDFSB: string;
  user: string;
  shortUser: string;
  allRoles: Role[];
  allCurrentRoles: string;
  isSuper: boolean;
}

export interface Role {
   app: string;
   appRole: string;
   description: string; 
}