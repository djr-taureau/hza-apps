/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DocDataListComponent } from './doc-data-list.component';

describe('DocDataListComponent', () => {
  let component: DocDataListComponent;
  let fixture: ComponentFixture<DocDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
