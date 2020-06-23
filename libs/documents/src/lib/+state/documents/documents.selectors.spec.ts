import { mockDoc1, mockDoc2, Document } from '../../models';
import { docsQuery } from './index';
import { mockDocType1, mockDocType2 } from '../../models/code-table.model';

describe('Documentss Selectors', () => {
  let storeState;
  const doc1 = mockDoc1 as Document;
  const doc2 = mockDoc2 as Document;

  beforeEach(() => {
    storeState = {
      documents: {
        ids: [doc1.ID, doc2.ID],
        entities: {
          [doc1.ID]: doc1,
          [doc2.ID]: doc2,
        },
        selectedDocId: 8004777,
        isLoading: false,
        loaded: true,
        docTypes: [mockDocType1, mockDocType2],
      },
    };
  });

  describe('Document Selectors', () => {
    it('SelectAllDocss', () => {
      const results = docsQuery.selectAllDocs(storeState);
      const entities = [doc1, doc2];
      expect(results.length).toBe(2);
      expect(entities).toBe(entities);
    });

    it('getSelectedDocId() should return the selected Entity', () => {
      const result = docsQuery.selectCurrentDocId(storeState);
      const selectedId = result;
      expect(selectedId).toEqual(8004777);
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = docsQuery.loadedDocs(storeState);
      expect(result).toBe(true);
    });

    it('getDocTypes() should return Doc types', () => {
      const results = docsQuery.selectDocTypes(storeState);
      const docTypes = [mockDocType1, mockDocType2];
      expect(results.length).toBe(2);
      expect(docTypes).toBe(docTypes);
    });
  });
});
