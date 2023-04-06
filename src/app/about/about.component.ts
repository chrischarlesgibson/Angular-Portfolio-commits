import { Component } from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faMedium = faMedium;
}
