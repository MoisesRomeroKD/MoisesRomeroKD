import { Injectable } from '@angular/core';

export interface Proyecto {
  id: number;
  slug: string;
  titulo: string;
  subtitulo: string;
  descripciones: string[];
  tecnologias: string;
  link?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private proyectos: Proyecto[] = [
    {
      id: 0,
      slug: 'rutinas-diarias',
      titulo: 'Rutinas Diarias',
      subtitulo: 'Sitio Web de Rutinas de Entrenamiento',
      descripciones: [
        'Desarrollé una aplicación Full Stack integral para la gestión de entrenamientos semanales con interfaz responsiva.',
        'Backend & Seguridad: Arquitectura robusta con Node.js y Express.js, utilizando MongoDB para persistencia de datos.'
      ],
      tecnologias: 'HTML, CSS, JavaScript, Node.js, Express.js, MongoDB',
      link: 'https://my-routine-al0u.onrender.com/'
    },
    {
      id: 1,
      slug: 'club-atletismo',
      titulo: 'Club de Atletismo',
      subtitulo: 'Club de Atletismo Liceo Caracas',
      descripciones: [
        'Desarrollador Full Stack & Scrum Master en un sistema socio-tecnológico para modernizar la gestión deportiva.',
        'Optimiza el trabajo de entrenadores eliminando procesos manuales y usando dashboards interactivos.'
      ],
      tecnologias: 'React, Django, PostgreSQL, Supabase'
    },
    {
      id: 2,
      slug: 'heracles-vult',
      titulo: 'HERACLES VULT',
      subtitulo: 'HERACLES VULT: Ecosistema de la Voluntad',
      descripciones: [
        'Plataforma para monitorización de alto rendimiento con periodización táctica basada en métricas de precisión.',
        'Backend blindado en Django y base de datos PostgreSQL para sesiones trazables de fuerza y atletismo.'
      ],
      tecnologias: 'React, Vite, Django, PostgreSQL, Cloudflare Tunnels'
    },
    {
      id: 3,
      slug: 'studyapp',
      titulo: 'StudyApp',
      subtitulo: 'StudyApp: Aprendizaje Activo',
      descripciones: [
        'Transforma el estudio pasivo en dinámico mediante el Método Cornell y técnicas Pomodoro.',
        'Construida con Next.js y Prisma, integrando seguridad mediante bcrypt para el hash de credenciales.'
      ],
      tecnologias: 'Next.js, React, Node.js, PostgreSQL, Prisma, CSS Puro'
    }
  ];

  getAll(): Proyecto[] {
    return this.proyectos;
  }

  getBySlug(slug: string): Proyecto | undefined {
    return this.proyectos.find(p => p.slug === slug);
  }
}