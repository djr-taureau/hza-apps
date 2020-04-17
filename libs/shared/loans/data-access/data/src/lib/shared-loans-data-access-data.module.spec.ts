import { async, TestBed } from '@angular/core/testing';
import { SharedLoansDataAccessDataModule } from './shared-loans-data-access-data.module';

describe('SharedLoansDataAccessDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedLoansDataAccessDataModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLoansDataAccessDataModule).toBeDefined();
  });
});
