import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericSortIconParkerComponent } from './generic-sort-icon-parker.component';

describe('GenericSortIconParkerComponent', () => {
  let component: GenericSortIconParkerComponent;
  let fixture: ComponentFixture<GenericSortIconParkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericSortIconParkerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericSortIconParkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
