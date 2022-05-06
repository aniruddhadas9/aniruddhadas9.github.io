import {Injectable} from '@angular/core';
import {Summary} from '../../interfaces/summary';
import {Skill} from "../../interfaces/skill";

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  name: string = '';
  phone: string = '';
  email: string = '';
  about: string = '';
  skills: Array<Skill> = [];

  constructor() {
    this.name = 'Aniruddha Das';
    this.phone = '+14156509102';
    this.email = 'aniruddhadas9@gmail.com';
    this.about = 'A self-motivated Frontend (UI), full-stack, multi-domain, responsible and\n' +
      '      solutions-orientated\n' +
      '      <strong>\n' +
      '        JavaScript, TypeScript, ES6, Angular (current 13+), React, Vue, AngularJS, NodeJs, jQuery,\n' +
      '        HTML, CSS, JAVA, J2EE, Spring Boot, PHP, MySQL, Google App Engine, Google Data store, JPA, Cucumber BDD, Karma,\n' +
      '        Jasmine, Protractor\n' +
      '      </strong>\n' +
      '      Professional with more then <strong>13+ Years of IT experience</strong> in\n' +
      '      a various IT stages including Architect, Design, Management, development, Unit testing and\n' +
      '      enhancement.';
    this.skills = [
      {
        name: 'Architecture and Design',
        "description": [
          'Extensive experience in design and develop of modern age web (UI) applications using frameworks like <strong>Angular,React</strong>.',
          'Design and develop of modern SAS based application to be served in subscription model.',
          'Good Experience in analyzing business requirement and writing Functional specification and design for the ITdevelopment.',
          'Architectural experience of designing test framework for the developer and testers using <strong>Protractor,Karma,Jasmine</strong>and configuring them with <strong>Gulp, Grunt, npm, etc. </strong>',
          'Good experience setting up CI/CD to automate build and deployment like <strong>Jenkins, GoCD, Circle CI,etc</strong>.',
          'Design and develop of modern application to consume REST API (web services)',
          'Good experience in designing Behavior Driven Development (BDD) model and Test Driven Development (TDD).',
          'Good experience of code review, Pair programming, Mentoring, etc',
        ]
      },
      {
        name: 'Frontend (UI/UX)',
        description: [
          'Strong Implementation knowledge of <strong>Angular, React</strong>',
          'Strong development experience in <strong>Typescript</strong> and <strong>ES6</strong> development along withmoduleimplementation like <strong>CommonJS, AMD, RequireJS, UMD, SystemJS, ES6</strong>.',
          'Good implementation knowledge of Core <strong>Object Oriented JavaScript, TypeScript, ES6, etc.</strong>',
          'Good Experience in many 3rd party library like D3, Chart.js, etc.',
          '<strong>Strong in HTML5, CSS3, TypeScript, JavaScript, jQuery, jQuery Mobile.</strong>',
          'Good experience using <strong>SCSS/SASS</strong> preprocessor of CSS and use of SCSS technologies like <strong>Mixins, Media query, nesting variable.</strong>',
          'Good experience in securing front end applications using various technologies to prevent <strong>XSRF, CSRF</strong> kind of attacks',
        ]
      },
      {
        name: 'Backend (Node/Java/PHP/Python)',
        description: [
          'Good knowledge of designing and developing Enterprise Application using NodeJS, spring boot, etc.',
          'Worked in many Enterprise Application using<strong>JAVA, J2EE, Spring, Spring Boot, Spring MVC, NodeJS,etc.</strong>',
          'Good experience in developing PHP web application using cakePHP, joomla, etc.',
        ]
      },
      {
        name: 'Database and NoSQL',
        description: [
          'Good experience in designing database in Oracle and MySQL platform.',
          'Good experience in NoSQL platform like <strong>Google datastore, MongoDB, CouchBase, etc</strong>',
          'Good experience in writing PL SQL (PL/SQL) and SQL in Relational database (RDBMS).',
        ]
      },
      {
        name: 'Cloud and SAS',
        description: [
          'Good experience in developing application cloud infrastructure like <strong>Google App Engine, AWS</strong>.',
          'Experence in developing <strong>SAS based application</strong> in Cloud platform like GCP, AWS',
          'Good experience in google Cloud data store, Big table and Integrating many google API like map, youtube, clouddeploy, etc',
        ]
      },
      {
        name: 'Management and Processes',
        description: [
          'Good Leadership and team managing skills.',
          'Good development experience is <strong>Agile</strong> methodology and agile process.',
          'Good team player and also individual contributor by taking ownership of application and also experiences ofmentoring intern and juniors.',
          'Good knowledge of integrating many 3<sup>rd</sup> party software tools and various API.',
        ]
      },
      {
        name: 'Domain and Functional',
        description: [
          'Has good domain knowledge in developing Enterprise application in domains like <strong>FinTech, HRMS, SCM, CRM,Real-estate, admin portal, Insurance, Technology, etc.</strong>',
          'Good knowledge of integrating many 3<sup>rd</sup> party software tools and various API.',
        ]
      },
      {
        name: 'Testing Frameworks',
        description: [
          'Good experience in unit testing and behavior testing using framework like<strong>protractor, Jasmine,Karma,</strong> <strong>cucumber, web-driver, etc.</strong>',
          'Good experience of <strong>Test Driven development (TDD)</strong> and <strong>Behavior driven development(BDD)</strong>using Cucumber and many more frameworks.',
        ]
      },

    ]

  }
}
