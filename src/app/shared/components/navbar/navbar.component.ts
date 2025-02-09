import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { UserLogged } from 'src/app/core/models/Users/Me.DTO';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { MenuModule } from 'primeng/menu';
import { Permission, Role } from 'src/app/core/models/Roles/Roles.DTO';
import { GlobalService } from 'src/app/core/services/global/global.service';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, RouterModule, MenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public userLogged: UserLogged | null;
  public items: MenuItem[] = [];
  public menuItems: MenuItem[] = [];
  public roles: Role[] = [];
  public publicPermissions: Permission[] = [];
  public permissions: Permission[] = [];

  private authService = inject(AuthService);
  private router = inject(Router);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private globalService = inject(GlobalService);

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe({
      next: res => {
        this.userLogged = res;
        this.changeDetectorRef.detectChanges();
      },
    });

    this.setItems();
    this.getData();
  }

  setItems = () => {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        tabindex: '0',
        command: () => this.router.navigate(['/']),
      },
    ];

    this.menuItems = [
      {
        label: 'Logout',
        icon: 'pi pi-user',
        command: () => this.authService.logout(),
      },
    ];
  };

  getData = () => {
    this.authService.getRoles().subscribe({
      next: res => {
        this.roles = res;

        this.roles.map(role => role.permissions?.map(permission => this.permissions.push(permission)));

        const itemsFromPermission: MenuItem[] = this.permissions
          .filter(e => e.frontendRoute)
          .map(e => ({
            label: e.label,
            icon: e.icon,
            tabindex: e.order,
            command: () => this.router.navigate([`/${e.frontendRoute}`]),
          }));

        this.items = [...this.items, ...itemsFromPermission].sort((a, b) => Number(a.tabindex) - Number(b.tabindex));

        this.changeDetectorRef.detectChanges();
      },
    });

    this.globalService.getPermissions().subscribe({ next: res => (this.publicPermissions = res) });
  };
}
