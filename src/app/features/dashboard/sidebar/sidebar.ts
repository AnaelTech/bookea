import { Component, inject, input, output, signal } from '@angular/core';
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

  /** État replié/déplié sur desktop */
  isCollapsed = signal(false);

  /** Ouverture du drawer sur mobile, contrôlé par le parent */
  mobileOpen = input(false);

  /** Notifie le parent de fermer le drawer */
  closeMobile = output<void>();

  toggleSidebar() {
    this.isCollapsed.update((collapsed) => !collapsed);
  }

  onCloseMobile() {
    this.closeMobile.emit();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
