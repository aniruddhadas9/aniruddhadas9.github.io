import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ani-techinical-skills',
  templateUrl: './techinical-skills.component.html',
  styleUrls: ['./techinical-skills.component.scss']
})
export class TechinicalSkillsComponent implements OnInit {

  @Input() heading: string = '';
  @Input() skills: Array<string> = []

  constructor() {

  }

  ngOnInit(): void {
    this.heading = this.heading || 'Technical Skills';
    this.skills = [
      'Frontend (UI): TypeScript, JavaScript, HTML5, SCSS, SASS, CSS3',
      'Frontend Frameworks: Angular, React, jQuery, jQuery Mobile',
      'RDBMS : Oracle 11g, PL/SQL, SQL, MySQL5.5, Google Cloud datastore.',
      'Cloud platforms : Google Cloud platform, Google App Engine, AWS',
      'Web Server : Tomcat, XAMPP, App Engine Server, AWS',
      'Backend: JAVA/J2EE, PHP, spring, Spring Boot, NodeJS, etc',
      'Backend Framework : Spring 4, Struts 1.2/2, CakePHP, Cucumber, etc',
      'IDE : InteliJ, WebStorm, Eclipse, My Eclipse, SQL Navigator.',
      'Source Control : Git, Google Cloud source, SVN, CVS, Perforce',
      'Operating Systems : IOS, Windows, Ubuntu Linux, UNIX',
      'Tools : Git, JIRA, BMC Remedy, Incident manager, Star, etc.',
    ];
  }

}
