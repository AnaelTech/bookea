import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  mobileSidebarOpen = signal(false);

  openMobileSidebar() {
    this.mobileSidebarOpen.set(true);
  }

  closeMobileSidebar() {
    this.mobileSidebarOpen.set(false);
  }
}
