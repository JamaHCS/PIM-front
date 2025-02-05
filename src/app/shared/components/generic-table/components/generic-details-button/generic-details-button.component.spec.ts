import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDetailsButtonComponent } from './generic-details-button.component';

describe('GenericDetailsButtonComponent', () => {
  let component: GenericDetailsButtonComponent;
  let fixture: ComponentFixture<GenericDetailsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericDetailsButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericDetailsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
