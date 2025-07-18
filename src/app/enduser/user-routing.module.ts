import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../shared/components/home/home.component';
import { RouteConstants } from '../shared/constants/RouteConstants';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { AboutComponent } from '../core/about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { TrainersComponent } from './trainers/trainers.component';
import { EventsComponent } from './events/events.component';
import { PricingComponent } from './pricing/pricing.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: RouteConstants.dashboard,
        component: DashboardComponent,
      },
      
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'courses/coursedetails',
        component: CourseDetailsComponent,
      },
      {
        path: 'trainers',
        component: TrainersComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'pricing',
        component: PricingComponent,
      },
     
      { path: 'services', component: ServicesComponent },
      { path: 'portfolio', component: PortfolioComponent },

      
      // {
      //   path: '',
      //   redirectTo: RouteConstants.dashboard
      // },
      { path: '**', redirectTo: RouteConstants.dashboard },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
