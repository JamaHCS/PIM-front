import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SentenceFromCamelCasePipe } from '../../pipes/sentence-from-camel-case/sentence-from-camel-case.pipe';
import { GenericTable } from '../../models/GenericTable/GenericTable.model';
import { MapperGenericTable } from '../../models/GenericTable/Mapper.request.model';
import { GenericObject } from '../../types/GenericObject.type';

@Injectable({
  providedIn: 'root',
})
/**
 * @service GenericTableService
 *
 * A service to manage the state of a format code toggle for a generic table component.
 * It uses a `BehaviorSubject` to store and emit the status of the format code toggle, allowing other components to subscribe and react to changes.
 */
export class GenericTableService {
  /**
   * @property {BehaviorSubject<boolean>} formatCodeActive$
   * A BehaviorSubject that holds the current state of the format code (active or inactive).
   */
  private formatCodeActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
   * @constructor
   * Initializes the service with the necessary dependencies.
   *
   * @param {SentenceFromCamelCasePipe} SentenceFromCamelCasePipe - A pipe that converts camelCase strings into sentence-formatted strings.
   */
  constructor(private SentenceFromCamelCasePipe: SentenceFromCamelCasePipe) {}

  /**
   * @method onFormatCode
   * Returns an observable that emits the current state of the format code whenever it changes.
   *
   * @returns {Observable<boolean>} An observable that emits the format code status (true for active, false for inactive).
   */
  onFormatCode = (): Observable<boolean> => this.formatCodeActive$.asObservable();

  /**
   * @method setFormatCode
   * Updates the current state of the format code and notifies all subscribers of the change.
   *
   * @param {boolean} status - The new state of the format code (true for active, false for inactive).
   */
  setFormatCode = (status: boolean) => this.formatCodeActive$.next(status);

  /**
   * @method mapper
   * Maps the raw data from the request into a structured format that can be used in a generic table component.
   * It automatically generates column headers based on the data keys if no columns are provided in the request.
   *
   * @param {MapperGenericTable} request - The request object containing the raw data and configuration for the table.
   * @returns {GenericTable} - The mapped table data including columns, rows, and additional metadata for display.
   *
   */
  mapper = (request: MapperGenericTable): GenericTable => {
    if (!request.columns) {
      if (request.data.length > 0) {
        const keys: string[] = Object.keys((request.data as GenericObject[])[0]);

        request.columns = keys.map(e => ({
          dataType: 'String',
          field: e,
          header: this.SentenceFromCamelCasePipe.transform(e),
          customExportHeader: this.SentenceFromCamelCasePipe.transform(e),
          exported: true,
          hidden: false,
        }));
      } else {
        request.columns = [];
      }
    }

    const data: GenericObject[] = request.data.map((e, index: number) => ({
      ...(e as GenericObject),
      genericNumberId: index,
    }));

    if (request.jsonEnabled) {
      request.columns.push({ dataType: 'button', field: 'json', header: 'Details' });
    }

    return { columns: request.columns, data: data, title: request.title ?? '', jsonEnabled: request.jsonEnabled };
  };
}
