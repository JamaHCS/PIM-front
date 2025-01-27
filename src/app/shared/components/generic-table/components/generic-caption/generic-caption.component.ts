import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Table } from 'primeng/table';
import { ExportsFormatsAvailable } from 'src/app/core/types/ExportsFormatsAvailable.type';
import { GenericGlobalFilterComponent } from '../generic-global-filter/generic-global-filter.component';
import { GenericExportTableComponent } from '../generic-export-table/generic-export-table.component';

@Component({
  selector: 'app-generic-caption',
  templateUrl: './generic-caption.component.html',
  imports: [GenericGlobalFilterComponent, GenericExportTableComponent],
})
/**
 * @class GenericCaptionComponent
 *
 * A reusable component that provides a global filter and export functionality for PrimeNG tables.
 * It allows enabling/disabling the filter and export features and emits events to clear filters.
 */
export class GenericCaptionComponent {
  /**
   * @property {boolean} globalFilterEnabled
   * Flag to enable or disable the global filter functionality.
   */
  @Input() globalFilterEnabled: boolean = true;

  /**
   * @property {boolean} exportTableEnabled
   * Flag to enable or disable the export table functionality.
   */
  @Input() exportTableEnabled: boolean = true;

  /**
   * @property {FormControl} globalFilter
   * The form control for global filtering of the table data.
   */
  @Input() globalFilter: FormControl;

  /**
   * @property {Table} table
   * Reference to the PrimeNG `Table` component for performing actions like filtering and exporting.
   */
  @Input() table: Table;

  /**
   * @property {string} exportName
   * The name used for the exported file (default is 'download').
   */
  @Input() exportName: string = 'download';

  /**
   * @property {ExportsFormatsAvailable[]} exportsAvailable
   * An array of available export formats such as 'XLSX' or 'CSV'.
   */
  @Input() exportsAvailable: ExportsFormatsAvailable[] = [];

  /**
   * @event clearFilter
   * An event emitter that triggers when the user requests to clear the global filter.
   */
  @Output() clearFilter: EventEmitter<void> = new EventEmitter<void>();

  /**
   * @method onClearFilter
   * Emits the `clearFilter` event to notify the parent component that the global filter should be cleared.
   */
  onClearFilter = () => this.clearFilter.emit();
}
