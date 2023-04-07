import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';

import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { MaterialModule } from './utils/material.module';
//Utils
import { NavModule } from './nav/nav.module';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    // The declarations array lists all of the components, directives, and pipes that belong to this module.
    AppComponent,
    FooterComponent,

    AboutComponent,

    HomeComponent,

    ProjectsComponent,
    ResumeComponent,
    LayoutComponent,
  ],
  imports:
    // The imports array lists all of the modules that this module depends on.
    [
      NavModule,
      MaterialModule,
      AppRoutingModule,
      FlexLayoutModule,
      FontAwesomeModule,
    ],
  providers: [],
  // This specifies the root component that Angular should bootstrap when it starts the app
  bootstrap: [AppComponent],
})
export class AppModule {}
