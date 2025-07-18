import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from '../shared/components/home/home.component';
import { RouteConstants } from '../shared/constants/RouteConstants';
import { ClientDeploymentComponent } from './client-deployment/client-deployment.component';
import { TrainingProgramComponent } from './training-program/training-program.component';
import { CompanyProjectsComponent } from './company-projects/company-projects.component';
import { OffersComponent } from './offers.component';


const routes: Routes = [
    {
        path: '',
        component: OffersComponent,
        children: [
            {
                path: RouteConstants.ClientDeployment,
                component: ClientDeploymentComponent,
            },
            {
                path: RouteConstants.TrainingProgram,
                component: TrainingProgramComponent,
            },
            {
                path: RouteConstants.companyProjects,
                component: CompanyProjectsComponent,
            },
            { path: '**', redirectTo: RouteConstants.ClientDeployment },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OffersRoutingModule { }
