import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private readonly authService: AuthService = inject(AuthService);

  private readonly router: Router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
