import {Component, OnInit} from '@angular/core';
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faStackOverflow} from "@fortawesome/free-brands-svg-icons/faStackOverflow";
import {faPrint} from "@fortawesome/free-solid-svg-icons/faPrint";

@Component({
  selector: 'ani-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faStackOverflow = faStackOverflow;
  faPrint = faPrint;

  constructor() {
  }

  ngOnInit() {
  }

}
