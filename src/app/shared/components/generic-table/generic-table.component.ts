import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { Table, TableModule } from 'primeng/table';
import { HeaderDTO } from 'src/app/core/models/GenericTable/Header.model';
import { GenericObject } from 'src/app/core/types/GenericObject.type';
import { GenericTable } from 'src/app/core/models/GenericTable/GenericTable.model';
import { TitleComponent } from '../title/title.component';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'primeng/api';
import { GenericCaptionComponent } from './components/generic-caption/generic-caption.component';
import { GenericSortIconParkerComponent } from './components/generic-sort-icon-parker/generic-sort-icon-parker.component';
import { GenericExpandedRowComponent } from './components/generic-expanded-row/generic-expanded-row.component';
import { HighlightSearchPipe } from 'src/app/core/pipes/highlight-search/highlight-search.pipe';
import { GenericDetailsButtonComponent } from './components/generic-details-button/generic-details-button.component';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  imports: [
    TitleComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    MultiSelectModule,
    GenericCaptionComponent,
    GenericSortIconParkerComponent,
    GenericExpandedRowComponent,
    GenericDetailsButtonComponent,
    HighlightSearchPipe,
  ],
})
/**
 * @component GenericTableComponent
 *
 * A reusable table component that handles data display, filtering, and row expansion. It is integrated with PrimeNG's `p-table` component and provides
 * functionalities such as sorting, filtering, row expansion, and handling resizable columns.
 */
export class GenericTableComponent implements OnInit, OnDestroy, AfterViewInit {
  public globalFilter: FormControl = new FormControl('');
  public selectedRow: GenericObject;
  public selectedField: keyof GenericObject;
  public _data: GenericObject[] = [];
  public cols: HeaderDTO[] = [];
  public title: string = '';
  public globalFilterFields: string[] = [];
  public expandedRows: Record<number, boolean> = {};
  public expandedData: string = '';
  public identifier: string = '';
  public captionWidth: number = 0;
  public rowIdExpanded?: number;
  public filtersEnabled: boolean = false;

  private resizeObserver: ResizeObserver;

  private onGlobalFilterSubscription: Subscription;

  /**
   * @property {Table} table
   * Reference to the PrimeNG table component.
   */
  @ViewChild('table', { static: true }) table: Table;

  @ViewChild('caption', { static: false }) caption: ElementRef;

  /**
   * @property {boolean} loading
   * Input property to control the loading state of the table. When `true`, the table displays a loading indicator.
   */
  @Input() loading: boolean = false;

  /**
   * @method set data
   * Input setter to populate the data and reset the table's filters and sorting when a new list of data is passed.
   *
   * @param {GenericTable} data - The list of data to display in the table.
   */
  @Input() set data(data: GenericTable) {
    this._data = data.data;
    this.cols = data.columns;
    this.title = data.title;

    this.globalFilterFields = this.cols.filter(e => !e.hidden).map(e => e.field);

    if (this.cols.some(e => e.filterEnabled)) {
      this.filtersEnabled = true;

      this.cols.map(e => {
        if (e.filterEnabled && e.filterMode === 'dropdown') {
          const options: unknown[] = this._data.map(data => data[e.field]);

          e.filterOptions = Array.from(new Set(options));
        }
      });
    }

    if (this._data.length > 0)
      this.identifier =
        'genericNumberId' in this._data[0]
          ? 'genericNumberId'
          : 'Id' in this._data[0]
            ? 'Id'
            : 'id' in this._data[0]
              ? 'id'
              : '';

    this.clear(this.table);
  }

  /**
   * @method ngOnInit
   * Lifecycle hook that initializes the component. It sets up the global filter subscription
   * and defines the columns and fields used for filtering and displaying in the table.
   */
  ngOnInit(): void {
    this.onGlobalFilterSubscription = this.globalFilter.valueChanges.pipe(debounceTime(200)).subscribe({
      next: res => {
        this.table.filterGlobal(res, 'contains');
      },
    });
  }

  /**
   * @method ngAfterViewInit
   * Lifecycle hook that sets up a `ResizeObserver` to monitor changes to the caption element's width.
   * The width of the caption is updated whenever a resize event occurs.
   */
  ngAfterViewInit(): void {
    this.resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        this.captionWidth = entry.contentRect.width;
      }
    });

    // Start observing the div for resize changes
    this.resizeObserver.observe(this.caption.nativeElement);
  }

  /**
   * @method ngOnDestroy
   * Lifecycle hook that unsubscribes from the global filter subscription when the component is destroyed.
   */
  ngOnDestroy(): void {
    if (this.onGlobalFilterSubscription) this.onGlobalFilterSubscription.unsubscribe();
  }

  /**
   * @method clear
   * Clears the current table filters and sorting. Resets the global filter, table sort field, sort order,
   * and sorts the table by the first column header.
   *
   * @param {Table} table - The PrimeNG table instance to clear.
   */
  clear = (table: Table) => {
    this.globalFilter.setValue('');

    table.clear();

    table.sortField = this.identifier;
    table.sortOrder = 1;

    table.sortSingle();
  };

  /**
   * @method toggleRow
   * Toggles the expansion of a row in the table, displaying the selected field's data in the expanded section.
   *
   * @param {GenericObject} rowData - The data of the row being expanded or collapsed.
   * @param {keyof GenericObject} column - The column being expanded for detailed viewing.
   */
  toggleRow(rowData: GenericObject, column: keyof GenericObject) {
    if (!rowData[column]) return;

    const rowId: number = Number(rowData[this.identifier] ?? 0);

    this.expandedData = rowData[column]?.toString() ?? '';

    if (this.expandedRows[rowId] && this.selectedField === column) {
      delete this.expandedRows[rowId];
      this.rowIdExpanded = undefined;
    } else {
      this.expandedRows = {};
      this.expandedRows[rowId] = true;
      this.rowIdExpanded = rowId;
    }

    this.selectedField = column;
  }
}
