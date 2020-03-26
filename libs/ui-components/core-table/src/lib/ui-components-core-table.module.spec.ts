import { async, TestBed } from '@angular/core/testing';
import { UiComponentsCoreTableModule } from './ui-components-core-table.module';

describe('UiComponentsCoreTableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiComponentsCoreTableModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiComponentsCoreTableModule).toBeDefined();
  });
});
