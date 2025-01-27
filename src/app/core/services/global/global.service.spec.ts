import { TestBed } from '@angular/core/testing';
import { GlobalService } from './global.service';

describe('GlobalService', () => {
  let service: GlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with loading$ set to false and totalRequest set to 0', () => {
    expect(service.loading$.getValue()).toBe(false);
    expect(service.totalRequest).toBe(0);
  });

  it('should show spinner when showSpinner is called', () => {
    service.showSpinner();
    expect(service.loading$.getValue()).toBe(true);
  });

  it('should hide spinner when hideSpinner is called', () => {
    service.showSpinner(); // Ensure spinner is shown first
    service.hideSpinner();
    expect(service.loading$.getValue()).toBe(false);
  });

  it('should update loading$ when setSpinner is called with true', () => {
    service.setSpinner(true);
    expect(service.totalRequest).toBe(1);
    expect(service.loading$.getValue()).toBe(true);
  });

  it('should decrement totalRequest and hide spinner when setSpinner is called with false', () => {
    service.setSpinner(true); // Increment the counter
    service.setSpinner(false); // Decrement the counter
    expect(service.totalRequest).toBe(0);
    expect(service.loading$.getValue()).toBe(false);
  });

  it('should not decrement totalRequest below 0', () => {
    service.setSpinner(false); // Attempt to decrement below 0
    expect(service.totalRequest).toBe(0);
  });

  it('should emit correct loading$ value based on totalRequest', () => {
    service.setSpinner(true); // Increment the counter
    service.setSpinner(true); // Increment again
    expect(service.loading$.getValue()).toBe(true);

    service.setSpinner(false); // Decrement the counter
    expect(service.loading$.getValue()).toBe(true); // Spinner should still show

    service.setSpinner(false); // Decrement to 0
    expect(service.loading$.getValue()).toBe(false); // Spinner should hide
  });

  it('should not emit duplicate values for loading$ unnecessarily', () => {
    const spy = jest.fn();
    service.loading$.subscribe(spy);

    service.setSpinner(true); // Emits `true`
    service.setSpinner(true); // No emit (value doesn't change)
    service.setSpinner(false); // Emits `true` again (still > 0 requests)
    service.setSpinner(false); // Emits `false` (no requests left)

    expect(spy).toHaveBeenCalledTimes(3); // `false`, `true`, `false`
  });

  it('should provide an observable from onSpinner', done => {
    service.onSpinner().subscribe(loading => {
      expect(loading).toBe(false);
      done();
    });
  });
});
