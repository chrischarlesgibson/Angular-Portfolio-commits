import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavBurgerComponent } from './nav-burger/nav-burger.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBurgerComponent,
    NavbarComponent,
    ContactModalComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProjectCardComponent,
    ProjectsComponent,
    ResumeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
