import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './title.component';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [TitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct content in the <h3> element', () => {
    const content = 'Test Title';
    component.content = content;
    fixture.detectChanges();

    const h3Element = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3Element.textContent).toBe(content);
  });

  it('should apply the "border-active" class when borderEnabled is true', () => {
    component.borderEnabled = true;
    fixture.detectChanges();

    const h3Element = fixture.debugElement.query(By.css('h3'));
    expect(h3Element.classes['border-active']).toBe(true);
  });

  it('should not apply the "border-active" class when borderEnabled is false', () => {
    component.borderEnabled = false;
    fixture.detectChanges();

    const h3Element = fixture.debugElement.query(By.css('h3'));
    expect(h3Element.classes['border-active']).toBe(false);
  });

  it('should render with default styles', () => {
    const h3Element = fixture.debugElement.query(By.css('h3')).nativeElement;
    const styles = window.getComputedStyle(h3Element);

    expect(styles.fontFamily).toContain('dinot');
    expect(styles.textTransform).toBe('uppercase');
    expect(styles.color).toBe('rgb(255, 185, 29)'); // Hex #ffb91d converted to RGB
    expect(styles.fontSize).toBe('24px'); // 1.5rem converted to pixels at 16px base font size
    expect(styles.fontWeight).toBe('900');
  });
});
