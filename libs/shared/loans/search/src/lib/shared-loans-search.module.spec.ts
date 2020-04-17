import { async, TestBed } from '@angular/core/testing';
import { SharedLoansSearchModule } from './shared-loans-search.module';

describe('SharedLoansSearchModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedLoansSearchModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLoansSearchModule).toBeDefined();
  });
});
