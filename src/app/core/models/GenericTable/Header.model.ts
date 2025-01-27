import { FilterType } from '../../types/Filter.type';
import { Typing } from '../../types/Typing.type';

/**
 * @interface HeaderDTO
 *
 * Represents the structure of a header object used for table components or data representations.
 * This interface defines the key-value pairs for displaying, identifying, and typing headers in the application.
 */
export interface HeaderDTO {
  /**
   * @property {string} field
   * The unique key identifier for the header. This key is typically used for accessing data or for internal logic.
   */
  field: string;

  /**
   * @property {string} header
   * The display label for the header. This label is typically shown in the UI to represent the column or field.
   */
  header: string;

  /**
   * @property {Typing} dataType
   * Specifies the data type of the header. This defines how the data will be interpreted or displayed in the application.
   * The `Typing` type includes the possible data types for the headers.
   */
  dataType: Typing;

  /**
   * @property {string} [customExportHeader]
   * An optional property that allows for specifying a custom export header.
   * If provided, this custom header will be used during data export operations (e.g., CSV, XLSX) instead of the default `header` value.
   */
  customExportHeader?: string;

  /**
   * @property {boolean} [hidden]
   * Optional property that determines whether the header should be hidden in the table or not. Defaults to `false`.
   */
  hidden?: boolean;

  /**
   * @property {boolean} [filterEnabled]
   * Optional property that enables filtering for the given column. If `true`, the column will have a filter input.
   */
  filterEnabled?: boolean;

  /**
   * @property {FilterType} [filterMode]
   * Optional property that defines the type of filter to apply. `FilterType` includes possible filter modes (e.g., 'text', 'dropdown').
   */
  filterMode?: FilterType;

  /**
   * @property {unknown[]} [filterOptions]
   * Optional property to provide filtering options when `filterMode` is set to 'dropdown'.
   * This array defines the list of possible values that users can select for filtering the column.
   */
  filterOptions?: unknown[];
}
