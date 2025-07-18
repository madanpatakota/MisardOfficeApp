import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EventsComponent } from './enduser/events/events.component';
import { CoursesComponent } from './enduser/courses/courses.component';
import { CourseDetailsComponent } from './enduser/course-details/course-details.component';
import { TrainersComponent } from './enduser/trainers/trainers.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './shared/components/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component'
import { FooterComponent } from './shared/components/footer/footer.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
// import { TrainingProgramComponent } from './offers/training-program/training-program.component';
// import { ClientDeploymentComponent } from './offers/client-deployment/client-deployment.component';
// import { CompanyProjectsComponent } from './offers/company-projects/company-projects.component';

//import { Swiper,SwiperOptions } from 'swiper';
//import {  NgxUsefulSwiperModule } from 'ngx-useful-swiper'

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    CoursesComponent,
    CourseDetailsComponent,
    TrainersComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ChatBoxComponent,
    DashboardHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
