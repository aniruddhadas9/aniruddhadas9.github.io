import {Injectable} from '@angular/core';
import {Project} from "../interfaces/project";

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  projects: Array<Project> = [];

  constructor() {

    this.projects = [
      {
        name: "Herd and Shepherd (http://finraos.github.io/herd/)",
        role: "Full stack developer",
        client: "FINRA",
        applicationServer: "AWS EC2",
        duration: "Januray 2017 to till date",
        team: "15-20",
        technologyUsed: "AngularJS, Angular 2/4, TypeScript, SCSS, JavaScipt, Spring Boot.",
        tools: "Intellij, Visual Studio Code, etc.",
        description: "Working as a full stack developer in UI/UX using AngularJS, Angular 2/4, TypeScript etc. In the back end side JAVA with Spring in amazon AWS EC2 instance. Herd and Shepherd are data management and indexing application for FINRA and open source to public. Other technologies used are Spring bootKarma, Jasmine, Protractor."
      },
      {
        name: "Einstein 360 widgets (http://einstein.comcast.com)",
        role: "Architect and lead developer to create widgets",
        client: "Comcast",
        applicationServer: "Comcast Servers",
        duration: "July 2016 to January 2017",
        team: "13",
        technologyUsed: "Angular 2, TypeScript, SCSS, Angular 1, JavaScipt, Spring Boot.",
        tools: "Intellij, Visual Studio Code, Sublime Text, SOAP UI, etc.",
        description: "Architect and developed widgets using both angular1 and angular with spring boot as rest service provider for the Einstein 360 which is a customer service application for the Comcast telecallers.Initially we started developing angular1 widgets and plugins, when anguluar2 released we successfully created and deployed widgets and plugins using angular2 as well. Other technologies used are Spring boot, gradle, Gulp, Grunt, Systemjs, Karma, Jasmine, Protractor."
      },
      {
        name: "QuickBook Intuit (http://quickbook.intuit.com)",
        role: 'Developer for marketing pages',
        client: "Intuit",
        applicationServer: "Intuit Servers",
        duration: "May 2016 to July 2016",
        team: "20+",
        technologyUsed: "OO JavaScript, React, Spring MVC, RESTFull, HTML 5, SCSS, etc.",
        tools: "Intellij, Visual Studio Code, Sublime Text, SOAP UI, etc.",
        description: "Designed and developed Designed and developed widgets and plugins for quickbook.com application using JavaScript, react, intuit internal JavaScript framework, java, etc. Also part of the team where we separated few pieces from quickbook.com monolithic to widgets using intuit internal JavaScript framework"
      },
      {
        name: "Conns",
        role: "Architect, Design, Develop",
        client: "Conns",
        applicationServer: "Deployed in unis server and run through Jenkins maven jobs",
        duration: "March 2016 to May 2016",
        team: "3+",
        technologyUsed: "JAVA, REST web services, SAML, Oauth2, SOAP web services",
        tools: "Intellij, Visual Studio Code, Sublime Text, SOAP UI. etc",
        description: "Designed and developed application in java to make various REST/SOAP web services call to end points like DocuSign connect and eOriginal and do operation in the client side application. Created application which will act like end poing and will be heated whenever any transaction will be done in DocuSign and eOriginal server like signing a document, creating an envelope, etc. During the project development, implemented many security measures like SAML authentication, Oauth2 authentication and token based authentication.",
      },
      {
        name: "Cucumber framework",
        role: 'Architect, Design, Develop, Team management',
        client: "Bank of America",
        applicationServer: "Deployed in unis server and run through Jenkins maven jobs",
        duration: "March 2015 to January 2016",
        team: "10-20",
        technologyUsed: "Cucumber BDD, JAVA, Maven",
        tools: "Eclipse, Natural eclipse plugin, Jenkins, etc.",
        description: "Designed and developed a framework/tool to test all the application under CashPro using Cucumber BDD, Jana, Gherkins. The tool will test the behavior of the application rather unit test no matter in which language it written. The best feature is any one including business analyst can write test cases in plain English and everyone can be involved in very early stage of SDLC."
      },
      {
        name: "CashPro Online",
        role: "Owner of Payment module",
        client: "Bank of America",
        applicationServer: "WebLogic in Bank of America cloud",
        duration: "November 2014 to January 2016",
        team: "15-20",
        technologyUsed: "JAVA, Spring MVC, JSF, Maven, AngularJS, jQuery, HTML 5, CSS 3, Oracle 11g",
        tools: "Eclipse, Notepad ++ 5",
        description: "CashPro is used in many corporates as a banking solution to handle all types of payment. I am working by taking ownership of the payment module. Responsible to handle any type’s code changes, functional improvement, UI improvement and code review. Working extensively with business team and code development team to provide end to end solution."
      },
      {
        name: "Google Atlas / Dashboard",
        role: 'Developer and Team lead',
        client: "Google Inc.",
        applicationServer: "Google cloud services",
        duration: "April 2014 to November 2014",
        team: "15",
        technologyUsed: "JAVA, JSP, Servlet, Google datastore, AngularJS, jQuery, HTML 5, CSS 3, Google Datastore",
        tools: "Eclipse",
        description: "Worked in tools used to put addresses, roads, builds, etc. into the Google map. It was an existing project when I joined the team. I learned new google technology and contributed to the project. As a senior developer, I worked in many modules and handled the team. I learned and worked technologies like Google App Engine. App engine Datastore, AngularJS, etc."
      },
      {
        name: "ARCS (Associate Recognition and Compensation Statement)",
        role: "Developer and Team lead",
        client: "NCR Corporation",
        applicationServer: "Apache Tomcat 6.5",
        duration: "June 2011 to April 2014",
        team: "6",
        technologyUsed: "JAVA, JSP, Servlet, PLSQL, Shell Script, jQuery Mobile, jQuery, Android, HTML 5, CSS 3",
        'database': "Oracle 10g (Upgraded to 11g)",
        tools: "Eclipse Juno, SQL Navigator 5.5/6.5",
        description: "ARCS project handles sales associate and their bonus in NCR Corporation. I joined the team as a Senior Software Engineer and worked in the entire application. My role and responsibility was to take care of the application, interacting with the business users, handling the team and mentoring juniors and interns. During my tenure, I developed application in JAVA/J2EE, Oracle PL/SQL, JavaScript, jQuery, HTML%. CSS3. In addition to that I designed a Mobile Application from scratch using Phone GAP, jQuery Mobile, HTML 5, CSS 3 and Web Services."
      },
      {
        name: "NCR Intranet Portal (https://intranet.ncr.com/index.php)",
        organization: "NCR Corporation",
        team: "12",
        applicationServer: "XAMPP, Apache Web Server",
        duration: "September 2010 to June 2011",
        technologyUsed: "JAVA/J2EE,MySQL,jQuery,HTML,CSS,PHP,Joomla",
        description: "NCR intranet portal is an application which is designed and developed for NCR internal usages. The application is widely used by its employee, customers and venders. In intranet, NCR employee and customers can see many information regarding company, its product, customers, employee, etc. as per the permission provided to individual users. It facilitates employees to easily communicate with each other and improve the productivity of the company. Recently we added the company’s HR information to the portal as well."
      },
      {
        name: "FAME Addict",
        client: "FAME Addict (U.S.A.)",
        applicationServer: "XAMPP",
        organization: "smartData enterprises (India) Ltd.",
        duration: "June 2010 to September 2010",
        technologyUsed: "PHP, AJAX, MySQL, Joomla",
        description: "The FAME Addict is a place for media people where they can show of their profile to media industry and communicate with other media people and industry. This is also a social media website like Orkut/Facebook, where users can contact and send message to friend or added users in the site. It is a utility designed for the users to have access the secured users database and sending message to them. It has an admin module where admin can extract reports, verify users profile and manage services, etc."
      },
      {
        name: "RevGrp/scmcrm (https://scm.revgrp.com/)",
        client: "Révolution Group (www.revgrp.com)",
        applicationServer: "XAMPP",
        organization: "smartData enterprises (India) Ltd.",
        duration: "December 2009 to June 2010",
        team: "4 developers 1 QA",
        technologyUsed: "PHP, MySQL, jQuery, Fusion Chart",
        'framework': "cakePHP 1.2",
        'database': "MySQL 1.5",
        description: "The project REVGRP is a SCM and CRM system which is used to maintain the customers, vendors and employees of the company. The Project is specially designed for the company’s various departments situated in various countries (USA, China and Hong Kong), their communications and shipments of goods from one office to another office and to customers as well. The major modules are Administration, Account, User management, Customer management, Vendors management, Orders (VPO/CPO), Mail System etc. Rolls are specified to users (like employee, customer and vendor)."
      },
      {
        name: "Authentic Global Account (AGA)",
        client: "Authentic Technology (India) Pvt. Ltd.",
        applicationServer: "Apache Tomcat 5.5",
        organization: "Authentic Technology (India) Pvt. Ltd.",
        duration: "March 2009 to December 2009",
        technologyUsed: "JAVA, Struts 1.2, jQuery",
        'database': "MySQL",
        description: "The project ‘AGA’ is a HRM which is used to maintain customers of the company and its employee. The project is specially designed for the company’s internal employee and to deal with various departments. The Modules are administration, payroll, account, user management, Leave Management and reports. It is also integrated to employee database. It provides information about all employees to HR and other Managers."
      },
      {
        name: "College Management System",
        organization: "Authentic Technology (India) Pvt. Ltd",
        applicationServer: "Apache tomcat",
        duration: "April 2008 to March 2009",
        technologyUsed: "PHP, MySQL, JavaScript",
        description: "The college Management system is a Web-based college management system that is intended to provide information to the college authority staff and students. It has many modules like Student Registration, online Examination System, Placement, Student Payment Management, and Administration. This project is developed in PHP and MySQL and JavaScript and have an elegant and feel."
      },
      {
        name: "Online Exchange System",
        client: "Online Classified (US)",
        organization: "Assurgent Technology Sol. Pvt. Ltd.",
        applicationServer: "Apache Web Server",
        duration: "January 2008 to April 2008",
        technologyUsed: "PHP, AJAX, MySQL, inXAMPPserver",
        description: "The Online Exchange system is a Web-based online Marketing system that is intended to provide marketing solution for almost all type of Markets (real-estate, jobs, community, etc.). It has an Admin control panel where Admin can handle the system to change look and feel and other administrative works. It is developed using PHP, MySQL, JavaScript and AJAX."
      },
      {
        name: "Flour Mill Management System (FloutTech).",
        client: "Sri Durga Food Production Pvt. Ltd.",
        'organization': "Assurgent Technology sol. Pvt. Ltd.",
        duration: "September 2007 to January 2008",
        team: "4",
        technologyUsed: "PHP and MySQL.",
        applicationServer: "Apache Server (XAMPP)",
        description: "FloutTech is an integrated solution and multi-user application. It has module for many types of users. It has facility like tracking pre sales, maintaining leads, customer management, product management. It has facility to generate different level of report in few clicks to enable management to take decision, monitoring customer activities, and regulate production and distribution of Wheat Products."
      },
      {
        name: "Horse Racing",
        organization: "Assurgent Technology Sol. Pvt. Ltd.",
        applicationServer: "Apache Web Server",
        duration: "June 2007 to September 2007",
        technologyUsed: "PHP,MySQL,inApacheServer(XAMPP)",
        description: "This CMS project is developed for establishing the costumer relationship, user management and the day to day operation of a horse racing company. It provides information about average winning chances of any contestants and other racing related information. It has many modules like online payment system, new user registration, handling basic design of the site dynamically, profile management and many more. This project is developed in core PHP, MySQL, JavaScript and AJAX. It has elegant looks which attracts online users to register and take part in horse racing event."
      }
    ]
  }
}
