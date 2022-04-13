import {Component, OnInit} from '@angular/core';

export interface WorkExperience {
  company: string;
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
        startDate: 'Sept 2018',
        endDate: 'Till Date',
        experience: [
          'Currently, working as Senior Software Engineer/Architect with <strong>PeopleTech Group </strong>from July 2016 to till date.'
        ]
      },
      {
        company: 'PeopleTech Inc',
        startDate: 'July 2016',
        endDate: 'Sept 2018',
        experience: [
          'Worked as Senior Software Engineer',
          'Worked as senior developer (full-stack) at FINRA and developing HERD and shepherd using AnugularJS, Angular 4, JAVA, Spring in Amazon aws cloud environment.',
          'Herd and shepherd are indexing data of all financial institutes of USA. Herd is open source and available for public in Github and shepherd will soon be open source after angular4 migration.',
          'Worked at <strong>Comcast</strong> in <strong>Einstein360</strong> project in<strong> Angular, Angularjs, JavaScript, gulp, webpack, npm, systemjs, node, html5, SCSS, spring boot</strong>, etc.',
          'Preparing architecture for the angular2 and angularjs application to consume REST web services form spring boot application which are integrated as widget in einstein360 application.',
          'Preparing test frameworks implementation using Karma, Jasmine, protractor, JavaScript to test many widgets under einstein360 project.',
          'Currently working as Senior Software Engineer/Architect with <strong>PeopleTech Group </strong>from July 2016 to till date.',
        ]
      },
      {
        company: 'eTouch System Inc',
        startDate: 'February 2016',
        endDate: 'July 2016',
        experience: [
          'Worked as Senior Software Engineer with <strong>eTouch Systems Corporation </strong>from February 2016 to July 2016.',
          'Deployed at <strong>Intuit</strong> and working in <strong>QuickBooks</strong> project in JavaScript, React, NodeJs, html5, scss, etc',
          'Working on the area of application development using UI/UX and JAVA.',
          'Developing and enhancing module using<strong>JAVA/J2EE, Spring MVC</strong>, <strong>HTML 5, CSS 3, jQuery 1.8, AngularJS 1.4 </strong>in payment module.',
          'Designing and developing a framework using cucumber (BDD), JAVA, JavaScript to test many applications under various project.',
        ]
      }
      ,
      {
        company: 'Bank Of America',
        startDate: 'November 2014',
        endDate: 'January 2016',
        experience: [
          'Worked as Analyst I -Apps Prog with <strong>Bank of America </strong>from November 2014 to January 2016.',
          'Working as a key resource on CashPro project by taking ownership of Payment module',
          'Developing and enhancing module using<strong>JAVA 1.7, Spring MVC</strong>, <strong>HTML 5, CSS 3, jQuery 1.8, AngularJS 1.4 </strong>in payment module.',
          'Designing and developing a framework using cucumber (BDD), JAVA, JavaScript to test all application Under CashPro in Bank of America.',
        ]
      }
      ,
      {
        company: 'Cognigent',
        startDate: 'April 2014',
        endDate: 'November 2014',
        experience: [
          'Worked as Senior Associate –Project with<strong>Cognizant Technology Services</strong> and was deployed at<strong>Google India </strong>from April 2014 to November 2014.',
          'Understanding requirement from Business team and then implementing them with the best possible technology as a team.',
          'Developing web application using <strong>JAVA, Python</strong>,<strong> HTML 5, CSS 3, jQuery, AngularJS in Google App Engine Cloud</strong> for the business team to improve productivity of the team.',
        ]
      }
      ,
      {
        company: 'NCR Corporation',
        startDate: 'December 2010',
        endDate: 'Mar 2014',
        experience: [
          'Worked as Senior Software Engineer with <strong>NCR Corporation (I) Pvt. Ltd. </strong>From December 2010 to Mar 2014.',
          'Preparing Design and Function specification document of projects by interacting with the business team.',
          'Developing new modules and supporting them in existing Applications.',
          'Worked in technologies like JAVA, J2EE, HTML5, CSS3, JavaScript, jQuery, jQuery Mobile',
          'Support application 24*7 application in the areas of UNIX, Control-M automated jobs, PL/SQL, JAVA/J2EE',
          'Worked on NCR intranet portal using Joomla, PHP, MySQL, jQuery, HTML, CSS.',
        ]
      }
      ,
      {
        company: 'smartData Inc',
        startDate: 'December 2009',
        endDate: 'September 2010',
        experience: [
          'Worked as Senior Software Engineer with <strong>smartData Enterprises India Ltd. </strong>From December 2009 to September 2010.',
          'I worked in SCM and CRP project of one of the reputed client called Revolution Group.',
          'Worked in various technology including JAVA/J2EE, PHP, MySQL, CakePHP, Joomla, HTML, CSS, JavaScript, jQuery',
          'Worked in Fashion social Media site called Fame Addict using Joomla and jQuery',
        ]
      }
      ,
      {
        company: 'Authentic Technology Pvt. Ltd',
        startDate: 'April 2008',
        endDate: 'December 2009',
        experience: [
          'Worked as a Senior Software Engineer with <strong>Authentic Technology (India) Pvt. Ltd., Bhubaneswar from</strong>April 2008 to December 2009.',
          'Worked in various internal and external IT projects of the company.',
          'Worked on Authentic Global Account (GCA) using JAVA, J2EE, Struts1.2 and JavaScript.',
          'Prepared a College management system for various engineering colleges using PHP, MySQL and JavaScript.',
        ]
      }
      ,
      {
        company: 'Assurgent Technology Pvt. Ltd',
        startDate: 'March 2007',
        endDate: 'April 2008',
        experience: [
          'Worked as a Software Engineer with<strong>Assurgent Technology Solution Pvt. Ltd.</strong>, <strong>Kolkata</strong>. From March 2007 up to April 2008.',
          'I joined as a trainee software engineer and got chance to learn and work on various projects of the company.',
          'I developed many small websites for company’s clients using PHP, MySQL, and JavaScript.',
          'Worked in Flour Mill management system using PHP, MySQL and JavaScript.'
        ]
      }
    ]
  }

  ngOnInit(): void {
  }

}
