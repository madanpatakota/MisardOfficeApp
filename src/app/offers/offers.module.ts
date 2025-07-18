import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersRoutingModule } from './offers-routing.module';
import { RouterModule } from '@angular/router';
import { TrainingProgramComponent } from './training-program/training-program.component';
import { ClientDeploymentComponent } from './client-deployment/client-deployment.component';
import { CompanyProjectsComponent } from './company-projects/company-projects.component';
import { OffersComponent } from './offers.component';


@NgModule({
    declarations: [
        TrainingProgramComponent,
        ClientDeploymentComponent,
        CompanyProjectsComponent,
        OffersComponent,
    ],
    imports: [
        CommonModule,
         RouterModule,
         OffersRoutingModule
    ]
})
export class OffersModule { }
