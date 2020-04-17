import { async, TestBed } from '@angular/core/testing';
import { SharedLoanDetailModule } from './shared-loan-detail.module';

describe('SharedLoanDetailModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedLoanDetailModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLoanDetailModule).toBeDefined();
  });
});
