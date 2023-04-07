import { Component } from '@angular/core';

@Component({
  // The name of the component's HTML tag that can be used to embed it in other components.
  selector: 'app-root',
  // The path to the component's HTML template file.
  templateUrl: './app.component.html',
  // The path to the component's CSS style file.
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TS-Angular-portfolio'; // The value of the 'title' property that is used in the component's template.
}
