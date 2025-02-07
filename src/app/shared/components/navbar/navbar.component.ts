import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { UserLogged } from 'src/app/core/models/Users/Me.DTO';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, RouterModule, MenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public userLogged: UserLogged | null;
  public items: MenuItem[];
  public menuItems: MenuItem[];

  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe({
      next: res => {
        this.userLogged = res;
      },
    });

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => this.router.navigate(['/']),
      },
      {
        label: 'Login',
        icon: 'pi pi-user',
        command: () => this.router.navigate(['/auth/login']),
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            separator: true,
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
        ],
      },
    ];

    this.menuItems = [
      {
        label: 'Logout',
        icon: 'pi pi-user',
        command: () => this.authService.logout(),
      },
    ];
  }
}
