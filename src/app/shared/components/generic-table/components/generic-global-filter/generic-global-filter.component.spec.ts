import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericGlobalFilterComponent } from './generic-global-filter.component';

describe('GenericGlobalFilterComponent', () => {
  let component: GenericGlobalFilterComponent;
  let fixture: ComponentFixture<GenericGlobalFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericGlobalFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericGlobalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
