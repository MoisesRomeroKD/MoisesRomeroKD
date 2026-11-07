import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Proyecto {
  titulo: string;
  estado: string;
  tecnologias: string[];
  descripcion: string;
  enlace: string;
}

export const proyectos: Proyecto[] = [
  {
    titulo: 'Club Atletismo Liceo Caracas',
    estado: 'En construcción',
    tecnologias: ['React', 'Django', 'PostgreSQL', 'Supabase'],
    descripcion:
      'Sistema de gestión deportiva para administrar atletas, entrenamientos, asistencia y análisis de rendimiento.',
    enlace: 'https://club-atletismo-plum.vercel.app/'
  },
  {
    titulo: 'RUNSAI',
    estado: 'En pausa (Prioridad en Club Caracas)',
    tecnologias: ['Astro', 'Bootstrap', 'JavaScript', 'Vercel'],
    descripcion:
      'Plataforma web institucional (INSAI/AVISA) desarrollada para migrar la información de PDFs a formato web accesible, incorporando sección de seguros para trabajadores y descarga de documentos.',
    enlace: 'https://runsai.vercel.app/'
  },
  {
    titulo: 'SismoVenezuela',
    estado: 'En producción (Base de datos apagada)',
    tecnologias: [
      'React',
      'Vite',
      'Django',
      'Python',
      'PostgreSQL',
      'Supabase',
      'Leaflet',
      'OpenStreetMap'
    ],
    descripcion:
      'Plataforma web de respuesta ante emergencias, disponible en línea. Actualmente temporalmente inactiva mientras la base de datos permanece apagada (próxima actualización prevista para el 13/11/2026).',
    enlace: 'https://sismo-vzla.vercel.app/'
  },
  {
    titulo: 'HERACLES VULT',
    estado: 'En pruebas (App Móvil) / En construcción (Web)',
    tecnologias: ['React', 'Vite', 'Django', 'PostgreSQL'],
    descripcion:
      'Modernización y evolución directa del sistema clásico de rutinas de entrenamiento, enfocada en la monitorización de alto rendimiento y métricas avanzadas. La aplicación móvil está en pruebas y la versión web continúa en desarrollo.',
    enlace: ''
  },
  {
    titulo: 'Rifa Dreelgo Store',
    estado: 'Producción',
    tecnologias: ['Astro', 'Tailwind', 'CSS', 'JavaScript', 'Vercel'],
    descripcion: 'Plataforma web de rifas desarrollada y desplegada en producción.',
    enlace: 'https://rifa-dreelgo-store.vercel.app/'
  },
  {
    titulo: 'StudyApp',
    estado: 'En construcción',
    tecnologias: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'CSS Puro'],
    descripcion:
      'Plataforma educativa que transforma el estudio pasivo en aprendizaje activo mediante el Método Cornell y técnicas como Pomodoro.',
    enlace: ''
  },
  {
    titulo: 'Life OS',
    estado: 'En construcción',
    tecnologias: ['React', 'CSS Puro', 'Django', 'PostgreSQL'],
    descripcion:
      'Sistema de productividad personal y colaborativa para organizar la vida digital mediante espacios de trabajo, proyectos, tareas y subtareas.',
    enlace: ''
  },
  {
    titulo: 'Blackjack Online',
    estado: 'En construcción',
    tecnologias: ['Angular', 'Spring Boot', 'PostgreSQL', 'WebSockets', 'STOMP', 'Binance Pay'],
    descripcion:
      'Plataforma multijugador de Blackjack con arquitectura desacoplada, sincronización por WebSockets e integración con Binance Pay.',
    enlace: ''
  },
  {
    titulo: 'Drone War: Kamikaze',
    estado: 'En pausa',
    tecnologias: ['Game Engine', 'C#/C++', '3D Modeling'],
    descripcion:
      'MVP de un videojuego FPS en el que el jugador controla un dron kamikaze para destruir objetivos mediante impacto directo.',
    enlace: ''
  },
  {
    titulo: 'Sistema de Rutinas de Entrenamiento',
    estado: 'Desactualizado',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    descripcion:
      'Aplicación web para administrar rutinas semanales de entrenamiento con autenticación y gestión personalizada. El proyecto está desactualizado debido a cambios en las políticas de correo de Render posteriores a su lanzamiento y no tiene fecha de actualización prevista. HERACLES VULT es su evolución y actualización directa.',
    enlace: 'https://my-routine-al0u.onrender.com'
  }
];

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {
  filtro = 'Todos';

  filtros = [
    'Todos',
    'Funcional',
    'Finalizado',
    'Producción',
    'En pruebas',
    'En construcción',
    'En pausa'
  ];

  readonly proyectos = proyectos;

  get proyectosFiltrados(): Proyecto[] {
    if (this.filtro === 'Todos') {
      return this.proyectos;
    }

    const filtroNormalizado = this.filtro.toLocaleLowerCase();

    return this.proyectos.filter(proyecto =>
      proyecto.estado.toLocaleLowerCase().includes(filtroNormalizado)
    );
  }

  setFiltro(filtro: string): void {
    this.filtro = filtro;
  }

  statusLabels(proyecto: Proyecto): string[] {
    return proyecto.estado.split(' / ');
  }

  statusClass(status: string): string {
    if (status.includes('En producción') || status === 'Producción') {
      return 'status-produccion';
    }

    if (status.includes('En pruebas')) {
      return 'status-pruebas';
    }

    if (status.includes('En construcción')) {
      return 'status-construccion';
    }

    if (status.includes('En pausa')) {
      return 'status-pausa';
    }

    if (status === 'Finalizado') {
      return 'status-finalizado';
    }

    if (status === 'MVP Funcional') {
      return 'status-mvp';
    }

    return 'status-default';
  }

  statusIcon(status: string): string {
    if (status.includes('producción') || status === 'Producción' || status === 'Finalizado') {
      return '✓';
    }

    if (status.includes('En construcción')) {
      return '⚒';
    }

    if (status.includes('En pruebas') || status.includes('En pausa')) {
      return '◷';
    }

    return '';
  }

  projectIcon(titulo: string): string {
    const iconos: Record<string, string> = {
      'Club Atletismo Liceo Caracas': '▰',
      RUNSAI: '◎',
      SismoVenezuela: '◉',
      'HERACLES VULT': '◆',
      'Rifa Dreelgo Store': '◎',
      StudyApp: '▣',
      'Life OS': '▦',
      'Blackjack Online': '◎',
      'Drone War: Kamikaze': '◈',
      'Sistema de Rutinas de Entrenamiento': '▤'
    };

    return iconos[titulo] ?? '◈';
  }

  isFeatured(titulo: string): boolean {
    return titulo === 'SismoVenezuela';
  }
}
