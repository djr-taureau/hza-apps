import { async, TestBed } from '@angular/core/testing';
import { LoansModule } from './loans.module';

describe('LoansModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoansModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LoansModule).toBeDefined();
  });
});
