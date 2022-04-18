import {Component, OnInit} from '@angular/core';

export interface WorkExperience {
  company: string;
  title: string;
  technologyUsed?: string;
  experience: Array<string>;
  startDate?: string;
  endDate?: string;
}

@Component({
  selector: 'ani-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  public workExperiences: Array<WorkExperience> = []

  constructor() {

    this.workExperiences = [
      {
        company: 'SquareTrade Inc',
        title: 'Principal Frontend engineer',
        startDate: 'Sept 2018',
        endDate: 'Till Date',
        experience: [
          'Part of Architect team to help decide technology, future goal, direct to frontend in the company',
          'Created a new design system to develop, test  sharable components which can be used in many application',
          'Design and develop many new application and sharable components',
          'Code ownership: Own many application which support claim filing by customer',
          'Developed many applications using angular 8 and migrated to angular 11 and subsequently angular 13',
          'Migrated may legacy application to new component based design system architecture'
        ]
      },
      {
        company: 'PeopleTech Inc',
        title: 'Senior Software engineer',
        startDate: 'July 2016',
        endDate: 'Sept 2018',
        experience: [
          '<strong>FINRA (Contractor)</strong>: Part of open source project HERD and Herd-UI which is developed using , Angular 7, JAVA, Spring in Amazon aws cloud environment.',
          '<strong>Comcast (Contractor)</strong>: Part of team to develop and maintain many components in <strong>Customer support</strong> app using <strong> Angular2, JavaScript, gulp, webpack, npm, node, html5, SCSS, spring boot</strong>, etc.',
          'Developed applications using in TypeScript, JavaScript, angular',
          'Prepared test structure and wrote unit and e2e test using Karma, Jasmine, protractor, etc.',
        ]
      },
      {
        company: 'eTouch System Inc',
        title: 'Senior Software engineer',
        startDate: 'February 2016',
        endDate: 'July 2016',
        experience: [
          'Worked on very large project for huge customer project in JavaScript, React, html5, SCSS, etc',
          'Implemented DocuSign for a large customer to handle there document signature',
          'Implemented payments module for a client using <strong>Java, Spring MVC,HTML5, CSS3, jQuery 1.8</strong>.'
        ]
      }
      ,
      {
        company: 'Bank Of America',
        title: 'Analyst I -Apps Prog',
        startDate: 'November 2014',
        endDate: 'January 2016',
        experience: [
          'Working as a key resource business to business (B2B) project by taking ownership of Payment module',
          'Developed and enhanced modules using<strong>JAVA 1.7, Spring MVC,HTML 5, CSS 3, jQuery 1.8, AngularJS 1.4 </strong>in payment module.',
          'Part of team to develop test framework using cucumber (BDD), JAVA, JavaScript to test all application in Bank of America.',
        ]
      }
      ,
      {
        company: 'Cognizant Technology',
        title: 'Senior Associate –Project',
        startDate: 'April 2014',
        endDate: 'November 2014',
        experience: [
          'Deployed at<strong>Google India </strong>  to work on Google map (Atlas) project.',
          'Understanding requirement from Business team and then implementing them with the best possible technology as a team.',
          'Developing web application using <strong>JAVA, Python</strong>,<strong> HTML 5, CSS 3, jQuery, AngularJS in Google App Engine Cloud</strong> for the business team to improve productivity of the team.',
        ]
      }
      ,
      {
        company: 'NCR Corporation',
        title: 'Senior Software engineer',
        startDate: 'December 2010',
        endDate: 'Mar 2014',
        experience: [
          'Worked in technologies like JAVA, J2EE, HTML5, CSS3, JavaScript, jQuery, jQuery Mobile',
          'Support application 24*7 application in the areas of UNIX, Control-M automated jobs, PL/SQL, JAVA/J2EE',
          'Worked on NCR intranet portal using Joomla, PHP, MySQL, jQuery, HTML, CSS.'
        ]
      },
      {
        company: 'smartData Inc',
        title: 'Senior Software engineer',
        startDate: 'December 2009',
        endDate: 'September 2010',
        experience: [
          'I worked in SCM and CRP project for a client using HTML, CSS, cakePHP, MySQL, etc.',
          'Worked in various technology including Java/J2EE, PHP, MySQL, CakePHP, Joomla, HTML, CSS, JavaScript, jQuery',
          'Worked in Fashion social Media site using Joomla and jQuery',
        ]
      }
      ,
      {
        company: 'Authentic Technology Pvt. Ltd',
        title: 'Senior Software engineer',
        startDate: 'April 2008',
        endDate: 'December 2009',
        experience: [
          'Worked in various internal and external IT projects of the company.',
          'Worked on Authentic Global Account (GCA) using JAVA, J2EE, Struts1.2 and JavaScript.',
          'worked on College management system used to manage college using PHP, MySQL and JavaScript.',
        ]
      }
      ,
      {
        company: 'Assurgent Technology Pvt. Ltd',
        title: 'Software engineer',
        startDate: 'March 2007',
        endDate: 'April 2008',
        experience: [
          'I joined as a trainee software engineer and got chance to learn and work on various projects of the company.',
          'I developed many small websites for company’s clients using PHP, MySQL, and JavaScript.'
        ]
      }
    ]
  }

  ngOnInit(): void {
  }

}
