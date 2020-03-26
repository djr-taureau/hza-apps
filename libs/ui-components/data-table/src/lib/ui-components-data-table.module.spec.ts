import { async, TestBed } from '@angular/core/testing';
import { UiComponentsDataTableModule } from './ui-components-data-table.module';

describe('UiComponentsDataTableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiComponentsDataTableModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiComponentsDataTableModule).toBeDefined();
  });
});
