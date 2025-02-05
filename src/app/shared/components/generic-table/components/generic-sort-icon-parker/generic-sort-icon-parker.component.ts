import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-sort-icon-parker',
  imports: [CommonModule],
  templateUrl: './generic-sort-icon-parker.component.html',
})
/**
 * @component GenericSortIconParkerComponent
 *
 * A component that dynamically displays an icon representing the sorting order.
 * The component uses PrimeNG's icons for displaying ascending and descending sort indicators
 * based on the input value of `sortOrder`.
 */
export class GenericSortIconParkerComponent {
  /**
   * @Input() sortOrder
   * A number that represents the sorting order. A value of `1` indicates ascending order (down arrow),
   * and a value of `-1` indicates descending order (up arrow).
   *
   * @type {number}
   */
  @Input() sortOrder: number = 1;
}
