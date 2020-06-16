
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { SharedDataAccessModule } from './shared-data-access.module';


describe(`SharedDataAccessModule`, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedDataAccessModule.forRoot()]
    });
  });

  it(`should provide 'Store' service`, () => {
    expect(() => TestBed.inject(Store)).toBeTruthy();
  });
});