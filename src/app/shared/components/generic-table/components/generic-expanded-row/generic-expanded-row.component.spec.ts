import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericExpandedRowComponent } from './generic-expanded-row.component';

describe('GenericExpandedRowComponent', () => {
  let component: GenericExpandedRowComponent;
  let fixture: ComponentFixture<GenericExpandedRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericExpandedRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericExpandedRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
