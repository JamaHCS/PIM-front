export interface Role {
  id: string;
  name: string;
  description?: string;
  permissions?: Permission[];
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
}

export interface Permission {
  id: string;
  name: string;
  description: string;
  frontendRoute?: string;
  order?: string;
  label?: string;
  icon?: string;
}
