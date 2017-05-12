import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { MenSeniorComponent } from './men-senior/men-senior.component';
import { MenSeniorDetailComponent } from './men-senior-detail/men-senior-detail.component';

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
  },
  {
    path: 'men-seniors/:id',
    component: MenSeniorDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
