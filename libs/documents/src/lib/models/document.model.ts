export interface Document {
	ID: number;
	DocumentID: string;
	MetaDataType: string;
	MetaDataValue: string;
	LoanNumber: string;
	SourceID: number;
	Key1: string;
	Key2: string;
	Key3: string;

	DocFileName: string;
	DocType: string;
	FileSize: number;
	CreatedDate: string;
	CreatedBy: string;
	IsDeleted: boolean;
	DeletedDate: string;
	DeletedBy: string;
	UpdatedDate: string;
	UpdatedBy: string;
	Extension: string;
	MeridianImport: boolean;
	ScanStatus: number;
}

export type Documents = Document[];

export const mockDoc1: Document = {
	ID: 8004775,
	DocumentID: 'ad5e7986-5075-4601-8f75-6ea82d12f2e9',
	MetaDataType: null,
	MetaDataValue: null,
	LoanNumber: '0000016094',
	SourceID: 1,
	Key1: null,
	Key2: null,
	Key3: null,
	DocFileName: 'TracyCascioNewAmCard',
	DocType: 'Miscellaneous',
	FileSize: null,
	CreatedDate: '2016-08-15T14:39:56',
	CreatedBy: 'Fay_BulkLoad',
	IsDeleted: false,
	DeletedDate: null,
	DeletedBy: null,
	UpdatedDate: null,
	UpdatedBy: null,
	Extension: '.pdf',
	MeridianImport: true,
	ScanStatus: 1
};

export const mockDoc2: Document = {
	ID: 8004777,
	DocumentID: '4e88c45a-0a52-47fc-aeba-fcd60c22607c',
	MetaDataType: null,
	MetaDataValue: null,
	LoanNumber: '0000016094',
	SourceID: 1,
	Key1: null,
	Key2: null,
	Key3: null,
	DocFileName: '16094 Romero Skip Trace 3-5-13',
	DocType: 'Miscellaneous',
	FileSize: null,
	CreatedDate: '2013-03-05T11:46:36',
	CreatedBy: 'JNorton',
	IsDeleted: false,
	DeletedDate: null,
	DeletedBy: null,
	UpdatedDate: null,
	UpdatedBy: null,
	Extension: '.pdf',
	MeridianImport: true,
	ScanStatus: 1
};
