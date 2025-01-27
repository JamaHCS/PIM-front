import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { debounceTime } from 'rxjs';
import { GlobalService } from './core/services/global/global.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, ProgressBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public loading: boolean = false;
  public title = 'pim';

  public globalService: GlobalService = inject(GlobalService);
  public changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit() {
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
