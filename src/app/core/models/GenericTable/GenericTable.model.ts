import { GenericObject } from '../../types/GenericObject.type';
import { HeaderDTO } from './Header.model';

/**
 * @interface GenericTable
 * Represents the structure of a table data object, which includes both the row data and column definitions.
 * This interface is used to pass data and configuration options to table components.
 */
export interface GenericTable {
  /**
   * @property {GenericObject[]} data
   * The array of objects representing the rows in the table. Each object corresponds to a row, and its properties correspond to the table's columns.
   */
  data: GenericObject[];

  /**
   * @property {HeaderDTO[]} columns
   * The array of column definitions, where each entry describes the properties of a column, such as field name, header label, and data type.
   */
  columns: HeaderDTO[];

  /**
   * @property {string} title
   * The title of the table, typically used for display purposes such as in the UI header or for report identification.
   */
  title: string;

  /**
   * @property {boolean} [jsonEnabled]
   * Optional property that indicates whether the table should enable JSON-related functionalities, such as exporting data in JSON format.
   * Defaults to `false` if not provided.
   */
  jsonEnabled?: boolean;
}
