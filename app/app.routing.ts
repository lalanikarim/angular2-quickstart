import { ModuleWithProviders } from '@angular/core';
import { Routes, Router } from '@angular/router';

import { HeroesComponent } from './heroes.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent'
  }
];

export const routing: ModuleWithProviders = RouteModule.forRoot(appRoutes);
