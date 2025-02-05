import { HttpCode } from '../../enum/HttpCodes.enum';

export interface ApiResponse<T> {
  value: T;
  success: boolean;
  errors: string | string[];
  status: HttpCode;
  version: string;
}
