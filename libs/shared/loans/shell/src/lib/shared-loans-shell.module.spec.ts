import { async, TestBed } from '@angular/core/testing';
import { SharedLoansShellModule } from './shared-loans-shell.module';

describe('SharedLoansShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedLoansShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLoansShellModule).toBeDefined();
  });
});
