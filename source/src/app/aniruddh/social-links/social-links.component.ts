import {Component, Input, OnInit} from '@angular/core';
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faStackOverflow} from "@fortawesome/free-brands-svg-icons/faStackOverflow";
import {faPrint} from "@fortawesome/free-solid-svg-icons/faPrint";


@Component({
    selector: 'app-social-links',
    templateUrl: './social-links.component.html',
    styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faStackOverflow = faStackOverflow;
  faPrint = faPrint;

    constructor() {
    }

    ngOnInit(): void {
    }

}
