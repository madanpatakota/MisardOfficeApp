import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConstants } from '../shared/constants/RouteConstants';
import { ResourcesComponent } from './resource.component';
import { ArticlesComponent } from './articles/articles.component';
import { FaqsComponent } from '../enduser/faqs/faqs.component';

const routes: Routes = [
    {
        path: '',
        component: ResourcesComponent,
        children: [
            {
                path: RouteConstants.article,
                component: ArticlesComponent,
            },
            {
                path: RouteConstants.faqs,
                component: FaqsComponent,
            },
            { path: '**', redirectTo: RouteConstants.article },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ResourcesRoutingModule { }
