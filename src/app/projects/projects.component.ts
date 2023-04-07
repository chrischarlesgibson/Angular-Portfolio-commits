import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  repo: string;
  appUrl: string;
  tech: string[];
}

@Component({
  selector: 'app-projects ',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Purple Waive',
      description:
        "Purple wAIve uses DALLE2's artifical intellingence system to generate pictures based on user input.",
      image: 'assets/images/purpleWaive.png',
      repo: 'https://github.com/chrischarlesgibson/purple_wAIve',
      appUrl: 'https://purple-waive.herokuapp.com/',
      tech: [
        'Express',
        'Handlebars',
        'Javascript',
        'Sequelize',
        'mySQL2',
        'node-sass',
        'Cloudinary',
        'openai',
        'Exress-Session',
        'Bulma',
      ],
    },
    {
      title: 'Love is blur',
      description: 'a dating app for people who value values.',
      image: 'assets/images/loveisblurPic.png',
      repo: 'https://github.com/DraconMarius/love-is-blurr',
      appUrl: 'https://github.com/DraconMarius/love-is-blurr',
      tech: [
        'React',
        'node',
        'Javascript',
        'MUI',
        'Framer',
        'react-tinder-card',
        'Bulma',
      ],
    },
    {
      title: 'LivHealthy',
      description:
        'This is an app for guidance on living healthy(or, LivHealthy).',
      image: 'assets/images/LivHealthy.png',
      repo: 'https://github.com/chrischarlesgibson/LivHealthy',
      appUrl: 'https://thedomconrad.github.io/LivHealthy/',
      tech: [
        'HTML',
        'jQuery',
        'Javascript',
        'Chart.js',
        'RESTful APIs',
        'Materilize',
      ],
    },
    {
      title: 'React portfolio page',
      description:
        'my portfolio page built using react, MUI, email.js, Framer and react-hook-form among others.',
      image: 'https://via.placeholder.com/150',
      repo: 'https://github.com/chrischarlesgibson/portfolio-v3',
      appUrl: 'chrischarlesgibson.github.io/portfolio-v3/',
      tech: [
        'react',
        'javascript',
        'MUI',
        'emailjs',
        'framer-motion',
        'react-hook-form',
        'react-router',
      ],
    },
    {
      title: 'NoteMaker3000',
      description: 'NoteMaker3000 is the ultimate note-taking app.',
      image: 'assets/images/noteTaker3000.png',
      repo: 'https://github.com/chrischarlesgibson/The-NoteMaker-3000',
      appUrl: 'https://the-notemaker-3000.herokuapp.com/',
      tech: ['express', 'uuid', 'javascript', 'node'],
    },
    {
      title: 'blogspot',
      description:
        'Blogspot is a webpage built for tech people who want to read and write all things tech related.',
      image: 'assets/images/Blogspot.png',
      repo: 'https://github.com/chrischarlesgibson/blogspot',
      appUrl: 'https://warm-coast-31406.herokuapp.com/',
      tech: [
        'Express',
        'Handlebars',
        'Javascript',
        'Sequelize',
        'mySQL2',
        'Exress-Session',
        'Materialize',
        'bcrypt',
        'dotenv',
        'connect-session-sequelize',
      ],
    },
    {
      title: 'WeatherCast',
      description:
        'WeatherCast is an application that presents a current day forecast as well as a five day future forecast for each city the user searchs for.',
      image: 'assets/images/weathercast.png',
      repo: 'https://github.com/chrischarlesgibson/Weather-Dashboard',
      appUrl: 'https://chrischarlesgibson.github.io/Weather-Dashboard/',
      tech: [
        'Javascript',
        'HTML',
        'CSS',
        'Bootstrap',
        'OpenWeather API',
        'Moment.js',
      ],
    },
    {
      title: 'BusinessWeb',
      description:
        'BusinessWeb is a command line application that helps business owners create a database for thier business.',
      image: 'assets/images/BusinessWeb.png',
      repo: 'https://github.com/chrischarlesgibson/BusinessWeb',
      appUrl: 'https://youtu.be/Iqzj7Y3wqA4',
      tech: ['mySQL2', 'Inquirer', 'console.table', 'Javascript', 'node.js'],
    },
    {
      title: 'Teamified',
      description:
        'Teamified is a command line application that helps users create html pages for their team. The html it creates will contain contact info about your team members.',
      image: 'assets/images/teamified.png',
      repo: 'https://github.com/chrischarlesgibson/Teamified',
      appUrl: 'https://youtu.be/o1SpxDWF_50',
      tech: ['Jest', 'Inquirer', 'Javascript', 'HTML', 'CSS'],
    },
    {
      title: 'Social Media API',
      description:
        'The purpose of this project was to create the backend API of a future social media site. ',
      image: 'assets/images/socialMedia.png',
      repo: 'https://github.com/chrischarlesgibson/social-network-API',
      appUrl: 'https://youtu.be/_zijhVlMA2o',
      tech: [
        'Express',
        'Mongoose',
        'Insomnia',
        'MongoDB',
        'Day.js',
        'MongoDB Compass',
        'Javascript',
      ],
    },
  ];
}
