import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Table } from 'primeng/table';
import { HeaderDTO } from 'src/app/core/models/GenericTable/Header.model';
import { ExportsFormatsAvailable } from 'src/app/core/types/ExportsFormatsAvailable.type';
import { GenericObject } from 'src/app/core/types/GenericObject.type';
import { utils, WorkBook, WorkSheet, writeFileXLSX } from 'xlsx';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-generic-export-table',
  imports: [MenuModule, ButtonModule],
  templateUrl: './generic-export-table.component.html',
}) /**
 * @component GenericExportTableComponent
 *
 * A component for exporting PrimeNG table data into different formats, such as XLSX and CSV.
 * The component provides buttons to export the filtered or full data in the table using the formats available.
 */
export class GenericExportTableComponent implements OnInit {
  public items: MenuItem[] = [];

  /**
   * @Input() exportName
   * The name of the file to be exported. This name is used as the filename during export.
   *
   * @type {string}
   */
  @Input() exportName: string = 'download';

  /**
   * @Input() table
   * The PrimeNG table instance that holds the data to be exported.
   *
   * @type {Table}
   */
  @Input() table: Table;

  /**
   * @Input() exportsAvailable
   * The list of export formats available for the table. For example, 'XLSX' or 'CSV'.
   *
   * @type {ExportsFormatsAvailable[]}
   */
  @Input() exportsAvailable: ExportsFormatsAvailable[] = [];

  /**
   * @method ngOnInit
   * Lifecycle hook that initializes the export options menu based on the available export formats.
   */
  ngOnInit(): void {
    this.items = [
      {
        label: 'XLSX',
        icon: PrimeIcons.FILE_EXCEL,
        command: () => this.onExportExcel(),
        visible: !!this.exportsAvailable.find(format => format === 'XLSX'),
      },
      {
        label: 'CSV',
        icon: PrimeIcons.FILE,
        command: () => this.onExportCSV(),
        visible: !!this.exportsAvailable.find(format => format === 'CSV'),
      },
    ];
  }

  /**
   * @method onExportCSV
   * Exports the table data to a CSV file. It uses PrimeNG's `exportCSV` method for exporting.
   */
  onExportCSV() {
    this.table.exportFilename = this.exportName;

    const headersTemp: HeaderDTO[] = [...(this.table.columns as HeaderDTO[])];

    this.table.columns = (this.table.columns as HeaderDTO[]).filter(e => e.dataType !== 'button');

    this.table.exportCSV();

    this.table.columns = headersTemp;
  }

  /**
   * @method onExportExcel
   * Exports the table data to an XLSX file. It processes the table data, maps it with custom headers, and exports the file using the `xlsx` library.
   */
  onExportExcel() {
    const headers: HeaderDTO[] = (this.table.columns as HeaderDTO[]).filter(e => e.dataType !== 'button') ?? [];
    const data: GenericObject[] = this.table.filteredValue ?? this.table.value;

    const dataToExport: GenericObject[] = this.mapDataWithCustomHeaders(headers, data);

    const workSheet: WorkSheet = utils.json_to_sheet(dataToExport);
    const workBook: WorkBook = utils.book_new();

    utils.book_append_sheet(workBook, workSheet, this.exportName);

    writeFileXLSX(workBook, `${this.exportName}.xlsx`);
  }

  /**
   * @method mapDataWithCustomHeaders
   * Maps the table data with custom headers for export. It generates an object with the appropriate column headers and corresponding data for each row.
   *
   * @param {HeaderDTO[]} headers - The list of headers that define the table columns.
   * @param {GenericObject[]} data - The table data to be exported.
   * @returns {GenericObject[]} - The data mapped with the custom headers.
   */
  mapDataWithCustomHeaders(headers: HeaderDTO[], data: GenericObject[]): GenericObject[] {
    return data.map(item =>
      headers.reduce((acc, header) => {
        const exportKey = header.customExportHeader || header.header;
        return {
          ...acc,
          [exportKey]: item[header.field],
        };
      }, {} as GenericObject)
    );
  }
}
