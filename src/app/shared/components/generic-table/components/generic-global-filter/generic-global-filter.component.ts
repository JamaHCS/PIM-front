import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-generic-global-filter',
  imports: [ButtonModule, ReactiveFormsModule],
  templateUrl: './generic-global-filter.component.html',
})
/**
 * @component GenericGlobalFilterComponent
 *
 * A reusable component that provides a global filter input for tables.
 * It accepts an Angular `FormControl` for managing the filter input value and provides
 * an option to clear the filter through an event emitter.
 */
export class GenericGlobalFilterComponent {
  /**
   * @Input() control
   * The FormControl that manages the filter input field. This is passed from the parent component.
   */
  @Input() control: FormControl;

  /**
   * @Output() clearFilter
   * An event emitter that notifies the parent component when the filter has been cleared.
   */
  @Output() clearFilter: EventEmitter<void> = new EventEmitter<void>();

  /**
   * @method onClearFilter
   * Emits the `clearFilter` event to notify the parent component to reset the filter.
   */
  onClearFilter = () => this.clearFilter.emit();
}
