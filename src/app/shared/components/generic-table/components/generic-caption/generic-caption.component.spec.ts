import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCaptionComponent } from './generic-caption.component';

describe('GenericCaptionComponent', () => {
  let component: GenericCaptionComponent;
  let fixture: ComponentFixture<GenericCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericCaptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
