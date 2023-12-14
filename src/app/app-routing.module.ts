import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CoursesComponent } from './courses/courses.component';
import { JavascriptCourseComponent } from './javascript-course/javascript-course.component';
import { AngularCourseComponent } from './angular-course/angular-course.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'courses',component:CoursesComponent,
  children:[
    {path:'javascript',component:JavascriptCourseComponent},
    {path:'angular',component:AngularCourseComponent}
  ]},
  {path:'contact',component:ContactComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
