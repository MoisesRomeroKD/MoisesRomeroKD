import { Injectable } from '@angular/core';

export type EstadoHabilidad =
  | 'en aprendizaje'
  | 'diseñado'
  | 'pendiente de validar';

export interface HabilidadCiberseguridad {
  nombre: string;
  descripcion: string;
  estado: EstadoHabilidad;
}

export interface EquipoCiberseguridad {
  equipo: string;
  icono: string;
  color: string;
  descripcion: string;
  habilidades: HabilidadCiberseguridad[];
}

@Injectable({
  providedIn: 'root'
})
export class CiberseguridadService {
  private readonly equipos: EquipoCiberseguridad[] = [
    {
      equipo: 'Red Team',
      icono: '⚔️',
      color: 'var(--team-red)',
      descripcion: 'Herramientas ofensivas para evaluar la seguridad de aplicaciones web.',
      habilidades: [
        {
          nombre: 'ffuf',
          descripcion: 'Herramienta de fuzzing web para descubrir directorios, archivos y parámetros.',
          estado: 'en aprendizaje'
        }
      ]
    },
    {
      equipo: 'Blue Team',
      icono: '🛡️',
      color: 'var(--team-blue)',
      descripcion: 'Proyecto de seguridad para una plataforma web de gestión deportiva, construida con Django y React.',
      habilidades: [
        {
          nombre: 'Registro verificado',
          descripcion: 'Cédula, correo y código temporal; sin revelar si un usuario existe.',
          estado: 'diseñado'
        },
        {
          nombre: 'Control de accesos por rol (IAM)',
          descripcion: 'Mínimo privilegio, permisos validados en el servidor y respuestas 403.',
          estado: 'diseñado'
        },
        {
          nombre: 'Códigos OTP seguros',
          descripcion: 'Uso único, caducidad de 10 min, 5 intentos y reenvío cada 1 min.',
          estado: 'diseñado'
        },
        {
          nombre: 'Contraseñas y sesiones',
          descripcion: 'Hashing con sal, cookies HttpOnly/Secure/SameSite y tokens con expiración.',
          estado: 'pendiente de validar'
        },
        {
          nombre: 'Secretos y variables de entorno',
          descripcion: 'Secretos fuera del repositorio y rotación de claves.',
          estado: 'diseñado'
        },
        {
          nombre: 'Protección de la cadena de suministro',
          descripcion: 'pnpm (minimumReleaseAge, blockExoticSubdeps, allowBuilds, frozen-lockfile) y pip-tools con --require-hashes y pip-audit.',
          estado: 'pendiente de validar'
        }
      ]
    },
    {
      equipo: 'Purple Team',
      icono: '⛑️',
      color: 'var(--team-purple)',
      descripcion: 'Validación colaborativa de controles ofensivos y defensivos.',
      habilidades: [
        {
          nombre: 'Pruebas de controles propios con ffuf',
          descripcion: 'Verificar que los endpoints protegidos rechacen accesos no autorizados y que funcionen los límites de intentos.',
          estado: 'en aprendizaje'
        }
      ]
    }
  ];

  getAll(): EquipoCiberseguridad[] {
    return this.equipos;
  }
}
