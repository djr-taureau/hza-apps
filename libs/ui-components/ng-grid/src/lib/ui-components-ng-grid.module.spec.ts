import { async, TestBed } from '@angular/core/testing';
import { UiComponentsNgGridModule } from './ui-components-ng-grid.module';

describe('UiComponentsNgGridModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiComponentsNgGridModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiComponentsNgGridModule).toBeDefined();
  });
});
