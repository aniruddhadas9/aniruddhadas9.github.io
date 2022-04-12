import {Component, OnInit} from '@angular/core';
import {Project} from "../../interfaces/project";
import {ResumeDataService} from "../../services/resume-data.service";

@Component({
  selector: 'ani-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Array<Project> = [];
  responsiveOptions: any

  constructor(
    private resumeDataService: ResumeDataService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.projects = this.resumeDataService.projects;
  }

}
