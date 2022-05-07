import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ani-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  @Input() visa: string = 'H1B -USA working visa | B1/B2 US business travel visa';
  @Input() dateOfBirth: string = '09 June 1985';
  @Input() gender: string = 'Male';
  @Input() maritalStatus: string = 'Married';
  @Input() passportNumber: string = 'N2042274';
  @Input() nationality: string = 'Indian';
  @Input() address: string = 'California, MD USA';
  @Input() language: string = 'English, Hindi, Odia';


  constructor() {
  }

  ngOnInit(): void {
  }

}
