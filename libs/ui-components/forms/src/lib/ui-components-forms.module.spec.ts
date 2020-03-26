import { async, TestBed } from '@angular/core/testing';
import { UiComponentsFormsModule } from './ui-components-forms.module';

describe('UiComponentsFormsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiComponentsFormsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiComponentsFormsModule).toBeDefined();
  });
});
