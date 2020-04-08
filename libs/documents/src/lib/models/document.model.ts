export interface Document {
  id: number;
  Documentid: string;
  MetaDataType: string;
  MetaDataValue: string;
  LoanNumber: string;
  SourceID: string;
  Key1: string;
  Key2: string;
  Key3: string;

  DocFileName: string;
  DocType: string;
  FileSize: number;
  CreatedDated: Date;
  CreatedBy: string;
  IsDeleted: boolean;
  DeletedDated: Date;
  DeletedBy: string;
  UpdatedDate: string;
  updatedBy: string;
  Extension: string;
  MeridianImport: boolean;
  ScanStatus: string;
}
