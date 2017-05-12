import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { MenSeniorComponent } from './men-senior/men-senior.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TeamComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'men-senior',
    component: MenSeniorComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
