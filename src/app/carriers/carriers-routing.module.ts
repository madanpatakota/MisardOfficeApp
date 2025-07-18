import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConstants } from '../shared/constants/RouteConstants';
import { CarriersComponent } from './carriers.component';
import { JoinusComponent } from './joinus/joinus.component';
import { CurrentOpeningsComponent } from './openings/openings.component';

const routes: Routes = [
    {
        path: '',
        component: CarriersComponent,
        children: [
            {
                path: RouteConstants.joinus,
                component: JoinusComponent,
            },
            {
                path: RouteConstants.currentopenings,
                component: CurrentOpeningsComponent,
            },
            { path: '**', redirectTo: RouteConstants.article },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CarriersRoutingModule { }
