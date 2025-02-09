import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authentication',
  template: `<router-outlet></router-outlet> `,
  imports: [RouterOutlet],
})
export class AuthenticationComponent {}
