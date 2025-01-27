import { TestBed } from '@angular/core/testing';
import { GenericTableService } from './generic-table.service';
import { SentenceFromCamelCasePipe } from '../../pipes/sentence-from-camel-case/sentence-from-camel-case.pipe';
import { MapperGenericTable } from '../../models/GenericTable/Mapper.request.model';

describe('GenericTableService', () => {
  let service: GenericTableService;
  let mockPipe: SentenceFromCamelCasePipe;

  beforeEach(() => {
    mockPipe = {
      transform: jest.fn((value: string) =>
        value.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/^./, str => str.toUpperCase())
      ),
    } as unknown as SentenceFromCamelCasePipe;

    TestBed.configureTestingModule({
      providers: [GenericTableService, { provide: SentenceFromCamelCasePipe, useValue: mockPipe }],
    });

    service = TestBed.inject(GenericTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('onFormatCode', () => {
    it('should return an observable of formatCodeActive$', done => {
      service.onFormatCode().subscribe(status => {
        expect(status).toBe(false);
        done();
      });
    });
  });

  describe('setFormatCode', () => {
    it('should update the formatCodeActive$ value', done => {
      service.setFormatCode(true);
      service.onFormatCode().subscribe(status => {
        expect(status).toBe(true);
        done();
      });
    });
  });

  describe('mapper', () => {
    it('should map request data into a structured GenericTable when columns are not provided', () => {
      const request: MapperGenericTable = {
        data: [{ firstName: 'John', lastName: 'Doe' }],
        columns: undefined,
        title: 'Test Table',
        jsonEnabled: false,
      };

      const result = service.mapper(request);

      expect(mockPipe.transform).toHaveBeenCalledWith('firstName');
      expect(mockPipe.transform).toHaveBeenCalledWith('lastName');
      expect(result.columns).toEqual([
        {
          dataType: 'String',
          field: 'firstName',
          header: 'First Name',
          customExportHeader: 'First Name',
          exported: true,
          hidden: false,
        },
        {
          dataType: 'String',
          field: 'lastName',
          header: 'Last Name',
          customExportHeader: 'Last Name',
          exported: true,
          hidden: false,
        },
      ]);
      expect(result.data).toEqual([{ firstName: 'John', lastName: 'Doe', genericNumberId: 0 }]);
    });

    it('should preserve provided columns and add json button column if jsonEnabled is true', () => {
      const request: MapperGenericTable = {
        data: [{ firstName: 'John', lastName: 'Doe' }],
        columns: [{ dataType: 'String', field: 'customField', header: 'Custom Header' }],
        title: 'Test Table',
        jsonEnabled: true,
      };

      const result = service.mapper(request);

      expect(result.columns).toContainEqual({
        dataType: 'button',
        field: 'json',
        header: 'Details',
      });
    });

    it('should handle empty data gracefully', () => {
      const request: MapperGenericTable = {
        data: [],
        columns: undefined,
        title: 'Empty Table',
        jsonEnabled: false,
      };

      const result = service.mapper(request);

      expect(result.columns).toEqual([]);
      expect(result.data).toEqual([]);
    });
  });
});
