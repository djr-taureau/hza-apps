import { async, TestBed } from '@angular/core/testing';
import { SharedLoansDataAccessStateModule } from './shared-loans-data-access-state.module';

describe('SharedLoansDataAccessStateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedLoansDataAccessStateModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLoansDataAccessStateModule).toBeDefined();
  });
});
