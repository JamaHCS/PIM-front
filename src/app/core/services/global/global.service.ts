import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Permission } from '../../models/Roles/Roles.DTO';

@Injectable({
  providedIn: 'root',
})
/**
 * @service GlobalService
 *
 * The `GlobalService` provides a centralized mechanism for managing global state, particularly for handling a loading spinner across the application.
 * It tracks the total number of ongoing requests and determines whether the loading spinner should be shown or hidden.
 */
export class GlobalService {
  public totalRequest: number = 0;

  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public permissions$: BehaviorSubject<Permission[]> = new BehaviorSubject<Permission[]>([]);

  setPermissions = (permissions: Permission[]) => this.permissions$.next(permissions);
  getPermissions = (): Observable<Permission[]> => this.permissions$.asObservable();

  /**
   * @method showSpinner
   * Manually triggers the spinner to show.
   */
  showSpinner = () => this.loading$.next(true);

  /**
   * @method hideSpinner
   * Manually triggers the spinner to hide.
   */
  hideSpinner = () => this.loading$.next(false);

  /**
   * @method onSpinner
   * Provides an observable for the spinner's visibility state.
   *
   * @returns {Observable<boolean>} An observable that emits the current spinner visibility status.
   */
  onSpinner = (): Observable<boolean> => this.loading$.asObservable();

  /**
   * @method setSpinner
   * Dynamically updates the spinner's visibility based on the status of requests.
   * Increments or decrements the `totalRequest` counter and updates the spinner state accordingly.
   *
   * @param {boolean} status - `true` to indicate a new request has started, `false` to indicate a request has completed.
   */
  setSpinner(status: boolean): void {
    if (status) {
      this.totalRequest++;
    } else {
      this.totalRequest = Math.max(this.totalRequest - 1, 0);
    }

    const shouldShowSpinner = this.totalRequest > 0;

    // Only update the state if it has changed to prevent unnecessary re-renders.
    if (this.loading$.getValue() !== shouldShowSpinner) {
      this.loading$.next(shouldShowSpinner);
    }
  }
}
