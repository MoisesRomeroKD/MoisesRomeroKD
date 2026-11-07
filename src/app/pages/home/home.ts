import { Component, HostListener, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnDestroy {
  readonly isAiDrawerOpen = signal(false);
  private previousBodyOverflow: string | null = null;

  readonly aiTools = ['Gemini', 'Claude', 'ChatGPT', 'DeepSeek', 'NotebookLM'];
  readonly agents = ['Antigravity', 'Codex', 'Claude Code', 'Devin', 'GitHub Copilot'];
  readonly stackGroups = [
    {
      name: 'Frontend',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Angular',
        'Astro',
        'Next.js',
        'Bootstrap',
        'Tailwind CSS'
      ]
    },
    {
      name: 'Backend',
      technologies: ['Node.js', 'Express.js', 'Python', 'Django', 'Spring Boot']
    },
    {
      name: 'Bases de datos',
      technologies: ['PostgreSQL', 'MongoDB', 'MariaDB', 'Supabase']
    },
    {
      name: 'Frameworks y herramientas',
      technologies: ['Prisma', 'Leaflet', 'OpenStreetMap', 'WebSockets', 'STOMP', 'Binance Pay']
    },
    {
      name: 'DevOps y despliegue',
      technologies: ['GitHub', 'Vercel', 'Render']
    },
    {
      name: 'Inteligencia Artificial',
      technologies: [
        'ChatGPT',
        'Claude',
        'Gemini',
        'GitHub Copilot',
        'Codex',
        'Antigravity',
        'Windsurf',
        'Lovable',
        'Google Stitch'
      ]
    }
  ];

  openAiDrawer(): void {
    if (this.isAiDrawerOpen()) {
      return;
    }

    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    this.isAiDrawerOpen.set(true);
  }

  closeAiDrawer(): void {
    if (!this.isAiDrawerOpen()) {
      return;
    }

    document.body.style.overflow = this.previousBodyOverflow ?? '';
    this.previousBodyOverflow = null;
    this.isAiDrawerOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeAiDrawer();
  }

  ngOnDestroy(): void {
    this.closeAiDrawer();
  }
}