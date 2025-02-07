import { Role } from '../Roles/Roles.DTO';

export interface UserLogged {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  motherLastName: string;
  email: string;
  dateOfBirth: Date;
  createdAt: Date;
  createdBy: Date | null;
  updatedAt: Date | null;
  updatedBy: string | null;
  lastLoginAt: Date | null;
  deletedBy: string | null;
  deletedAt: Date | null;
  deleted: boolean;
  phoneNumber: string;
  roles: Role[];
}
