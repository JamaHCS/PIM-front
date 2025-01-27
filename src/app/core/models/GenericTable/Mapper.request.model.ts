import { HeaderDTO } from './Header.model';

/**
 * @interface MapperGenericTable
 * Represents the structure for mapping data to a table, including optional configurations for title, columns, and JSON functionalities.
 * This interface is used to transform or map raw data into a structured table format for display.
 */
export interface MapperGenericTable {
  /**
   * @property {string} [title]
   * Optional property representing the title of the table. It can be used for display purposes in the UI, such as the table header.
   */
  title?: string;

  /**
   * @property {unknown[]} data
   * The array of objects or raw data to be mapped into rows. Each entry in the array represents a row of data in the table.
   */
  data: unknown[];

  /**
   * @property {HeaderDTO[]} [columns]
   * Optional array of column definitions that describe the structure of the table. Each `HeaderDTO` object defines a column's field, label, and data type.
   */
  columns?: HeaderDTO[];

  /**
   * @property {boolean} [jsonEnabled]
   * Optional property that indicates whether JSON-related functionalities should be enabled for the table (e.g., export to JSON).
   * Defaults to `false` if not provided.
   */
  jsonEnabled?: boolean;
}
