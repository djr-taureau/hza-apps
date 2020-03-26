import { async, TestBed } from '@angular/core/testing';
import { UiComponentsTabsModule } from './ui-components-tabs.module';

describe('UiComponentsTabsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiComponentsTabsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiComponentsTabsModule).toBeDefined();
  });
});
