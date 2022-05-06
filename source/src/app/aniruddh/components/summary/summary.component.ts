import {Component, OnInit} from '@angular/core';
import {SummaryService} from "../../services/summary/summary.service";
import {Skill} from "../../interfaces/skill";

@Component({
  selector: 'ani-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  name: string = '';
  phone: string = '';
  email: string = '';
  about: string = '';
  skills: Array<Skill> = [];
  constructor(
    private summaryService: SummaryService
  ) {
    this.name = this.summaryService.name;
    this.phone = this.summaryService.phone;
    this.email = this.summaryService.email;
    this.about = this.summaryService.about;
    this.skills = this.summaryService.skills;
  }

  ngOnInit() {
  }

}
