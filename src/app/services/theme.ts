import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly darkMode = signal(true);

  readonly isDark = this.darkMode.asReadonly();

  constructor() {
    this.initTheme();
  }

  initTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    this.applyTheme(savedTheme === 'light' ? 'light' : 'dark');
  }

  toggleTheme(): void {
    this.applyTheme(this.darkMode() ? 'light' : 'dark');
  }

  private applyTheme(theme: 'dark' | 'light'): void {
    document.documentElement.setAttribute('data-theme', theme);
    this.darkMode.set(theme === 'dark');
    localStorage.setItem('theme', theme);
  }
}