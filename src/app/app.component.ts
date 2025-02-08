import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { debounceTime } from 'rxjs';
import { GlobalService } from './core/services/global/global.service';
import { ToastModule } from 'primeng/toast';
import { AuthService } from './core/services/auth/auth.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RoleService } from './core/services/roles/role.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, ProgressBarModule, ToastModule, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public loading: boolean = false;
  public title = 'pim';

  private globalService = inject(GlobalService);
  private authService = inject(AuthService);
  private roleService = inject(RoleService);

  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit() {
    this.authService.getMe().subscribe();
    this.roleService.getPermissions().subscribe({ next: res => this.globalService.setPermissions(res.value) });

    this.globalService
      .onSpinner()
      .pipe(debounceTime(200))
      .subscribe({
        next: res => {
          this.loading = res;
          this.changeDetectorRef.detectChanges();
        },
      });
  }
}
