import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { GenericTable } from 'src/app/core/models/GenericTable/GenericTable.model';
import { HeaderDTO } from 'src/app/core/models/GenericTable/Header.model';
import { Role } from 'src/app/core/models/Roles/Roles.DTO';
import { RoleService } from 'src/app/core/services/roles/role.service';
import { GenericObject } from 'src/app/core/types/GenericObject.type';
import { GenericTableComponent } from 'src/app/shared/components/generic-table/generic-table.component';

@Component({
  selector: 'app-index',
  imports: [GenericTableComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  public roles: Role[] = [];
  public genericTable: GenericTable;
  public columns: HeaderDTO[] = [];
  public loading: boolean = false;

  private roleService = inject(RoleService);
  private changeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    this.genericTable = {
      title: 'Roles',
      jsonEnabled: false,
      columns: [],
      data: [],
    };
  }

  ngOnInit(): void {
    this.setColumns();

    this.loading = true;

    this.roleService.getRoles().subscribe({
      next: res => {
        this.roles = res.value;

        this.genericTable.columns.push(...this.columns);
        this.genericTable.data.push(...res.value.map(e => e as unknown as GenericObject));

        this.changeDetectorRef.detectChanges();
      },
      complete: () => {
        this.loading = false;
        this.changeDetectorRef.detectChanges();
      },
    });
  }

  setColumns = () => {
    this.columns = [
      {
        dataType: 'string',
        field: 'id',
        header: 'Id',
        filterEnabled: true,
        filterMode: 'text',
      },
      {
        dataType: 'string',
        field: 'name',
        header: 'Rol',
        filterEnabled: true,
        filterMode: 'text',
      },
      {
        dataType: 'string',
        field: 'description',
        header: 'Descripción',
        filterEnabled: true,
        filterMode: 'text',
      },
      {
        dataType: 'datetime',
        field: 'createdAt',
        header: 'Fecha de creación',
        filterEnabled: true,
        filterMode: 'text',
      },
    ];
  };
}
