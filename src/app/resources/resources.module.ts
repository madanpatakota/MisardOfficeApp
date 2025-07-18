import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from '../enduser/faqs/faqs.component';
import { ArticlesComponent } from './articles/articles.component';
import { ResourcesComponent } from './resource.component';
import { ResourcesRoutingModule } from './resources-routing.module';

@NgModule({
  declarations: [
    ResourcesComponent,
    ArticlesComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
