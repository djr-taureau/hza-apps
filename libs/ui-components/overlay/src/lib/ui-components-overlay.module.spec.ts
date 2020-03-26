import { async, TestBed } from '@angular/core/testing';
import { UiComponentsOverlayModule } from './ui-components-overlay.module';

describe('UiComponentsOverlayModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiComponentsOverlayModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiComponentsOverlayModule).toBeDefined();
  });
});
