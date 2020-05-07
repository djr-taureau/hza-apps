import { filter, contains, pathOr, indexOf, pick, pathEq, path, find, propEq, findIndex } from 'ramda';

const fileExtensions = [
	{
		iconText: 'faFileWord',
		matchCriteria: '.docx'
	},
	{
		iconText: 'faEnvelope',
		matchCriteria: '.msg'
	},
	{
		iconText: 'faFileExcel',
		matchCriteria: '.xlsx'
	},
	{
		iconText: 'faFilePdf',
		matchCriteria: '.pdf'
	}
];

const getFileType = (n) => findIndex(propEq('matchCriteria', n))(fileExtensions);


export const fileType = (fileExtension: string) => {
	const idx = getFileType(fileExtension);
	return fileExtensions[idx].iconText;
};
