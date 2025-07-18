import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingProgramComponent } from './offers/training-program/training-program.component';
// import { ClientDeploymentComponent } from './offers/client-deployment/client-deployment.component';
// import { CompanyProjectsComponent } from './offers/company-projects/company-projects.component';
import { JoinusComponent } from './carriers/joinus/joinus.component';
import { CurrentOpeningsComponent } from './carriers/openings/openings.component';
import { AboutComponent } from './core/about/about.component';
import { TechnologiesComponent } from './enduser/technologies/technologies.component';
import { ContactusComponent } from './enduser/contactus/contactus.component';
//loadChildren: './endUser/user.module#UserModule',
// loadChildren : () => import('./endUser/user/user.module').then(m => m.UserModule)
const routes: Routes = [
  // { path: 'user/training', component: TrainingProgramComponent },
  // { path: 'user/clientdeployment', component: ClientDeploymentComponent },
  // { path: 'user/internalprojects', component: CompanyProjectsComponent },
  { path: 'user/joinus', component: JoinusComponent },
  { path: 'user/openings', component: CurrentOpeningsComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: 'technologies', component: TechnologiesComponent },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./enduser/user.module').then((m) => m.UserModule)
  },
  {
    path: 'offers',
    loadChildren: () =>
      import('./offers/offers.module').then((m) => m.OffersModule)
  },
  {
    path: 'resources',
    loadChildren: () =>
      import('./resources/resources.module').then((m) => m.ResourcesModule)
  },
  {
    path: 'carriers',
    loadChildren: () =>
      import('./carriers/carriers.module').then((m) => m.CarriersModule)
  },

  {
    path: 'user/dashboard',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'user' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
