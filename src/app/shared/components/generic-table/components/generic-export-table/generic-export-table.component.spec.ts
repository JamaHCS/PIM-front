import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericExportTableComponent } from './generic-export-table.component';

describe('GenericExportTableComponent', () => {
  let component: GenericExportTableComponent;
  let fixture: ComponentFixture<GenericExportTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericExportTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericExportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
