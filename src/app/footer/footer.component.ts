import { Component } from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { faIcon } from '@fortawesome/angular-fontawesome';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('hoverAnimation', [
      state(
        'true',
        style({
          transform: 'scale(1.1)',
        })
      ),
      state(
        'false',
        style({
          transform: 'scale(1)',
        })
      ),
      transition('false => true', animate('100ms ease-in')),
      transition('true => false', animate('100ms ease-out')),
    ]),
  ],
})
export class FooterComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faMedium = faMedium;
  currentIcon: string;
  isHovered = false;

  onIconClick(icon: string) {
    switch (icon) {
      case 'github':
        window.location.href =
          'https://github.com/chrischarlesgibson?tab=repositories';
        break;
      case 'linkedin':
        window.location.href =
          'https://www.linkedin.com/in/chris-gibson-415909250/';
        break;
      case 'medium':
        window.location.href = 'https://medium.com/@chrischarlesgibson';
        break;
      default:
        break;
    }
  }

  onIconHover(icon: string) {
    this.isHovered = true;
    this.currentIcon = icon;
  }

  onIconLeave() {
    this.isHovered = false;
    this.currentIcon = '';
  }
}
