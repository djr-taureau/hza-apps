import { async, TestBed } from '@angular/core/testing';
import { UiComponentsButtonsModule } from './ui-components-buttons.module';

describe('UiComponentsButtonsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiComponentsButtonsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiComponentsButtonsModule).toBeDefined();
  });
});
