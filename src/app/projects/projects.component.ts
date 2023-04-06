import { Component, Input } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  repo: string;
  appUrl: string;
  tech: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];

  @Input() image!: string;
  @Input() description!: string;
  @Input() repo!: string;
  @Input() appUrl!: string;
  @Input() tech!: string[];
}
