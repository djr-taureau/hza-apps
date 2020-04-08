import { ApiService } from '@fay/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { DocumentsService } from './documents.service';

describe('DocumentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DocumentsService, ApiService],
    });
  });

  it('should be created', inject([DocumentsService], (service: DocumentsService) => {
    expect(service).toBeTruthy();
  }));
});