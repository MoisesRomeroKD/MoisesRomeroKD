import { Component, HostListener, OnDestroy, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

import { ThemeService } from '../../services/theme';

export const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/moisés-romero-ar';
export const INSTAGRAM_PROFILE_URL = '';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})


export class Navbar implements OnDestroy {
  readonly LINKEDIN_PROFILE_URL = LINKEDIN_PROFILE_URL;
  readonly INSTAGRAM_PROFILE_URL = INSTAGRAM_PROFILE_URL;
  readonly isMenuOpen = signal(false);
  private previousBodyOverflow: string | null = null;

  // El constructor inyecta el servicio para que esté disponible
  constructor(readonly themeService: ThemeService, router: Router) {
    router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => this.closeMenu());
  }

  openMenu(): void {
    if (this.isMenuOpen()) {
      return;
    }

    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    this.isMenuOpen.set(true);
  }

  closeMenu(): void {
    if (!this.isMenuOpen()) {
      return;
    }

    document.body.style.overflow = this.previousBodyOverflow ?? '';
    this.previousBodyOverflow = null;
    this.isMenuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  ngOnDestroy(): void {
    this.closeMenu();
  }
}