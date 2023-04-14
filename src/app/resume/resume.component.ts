import { Component } from '@angular/core';

const skills = [
  'JavaScript',
  'typeScript',
  'C#',
  '.NET',
  'Angular',
  'Visual Studio',
  'jQuery',
  'React',
  'MySQL',
  'HTML5',
  'Node.js',
  'Express.js',
  'Jest',
  'Handlebars',
  'MongoDB',
  'GraphQL',
  'Sequelize',
  'CSS3',
  'Bootstrap',
  'Bulma',
  'Materialize',
  'Heroku',
  'Insomnia',
];

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  public skills: string[] = skills;
  resumeImage = '../../assets/images/resumeImage.png';
  resumePDF = '../../assets/images/chrisGibsonResume.pdf';
  constructor() {}
}
