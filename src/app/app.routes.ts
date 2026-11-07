import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Perfil } from './pages/perfil/perfil';
import { Proyectos } from './pages/proyectos/proyectos';
import { Contacto } from './pages/contacto/contacto';
import { Ciberseguridad } from './pages/ciberseguridad/ciberseguridad';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'perfil', component: Perfil },
  { path: 'proyectos', component: Proyectos },
  { path: 'contacto', component: Contacto },
  { path: 'ciberseguridad', component: Ciberseguridad },
  { path: 'equipos', redirectTo: 'ciberseguridad', pathMatch: 'full' }
];