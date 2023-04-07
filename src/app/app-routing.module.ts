import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  //This route matches the about path. When this path is navigated to, the ABout Componenet will be loaded.
  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  //This is a wildcard route that matches any URL that doesn't match the other routes defined in the array. It will cause the AboutComponent to be loaded for any unmatched URLs.
  { path: '**', component: AboutComponent },
];

@NgModule({
  //forRoot() is a static method used to define the router configuration for the application root level. It takes an array of routes and returns a module with the configured router.
  imports: [RouterModule.forRoot(routes), CommonModule],
  //exports: [RouterModule] is used to export the configured RouterModule for use in other modules that need routing functionality.
  exports: [RouterModule],
})
export class AppRoutingModule {}
