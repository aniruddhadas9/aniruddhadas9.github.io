import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GoogleMap} from '@agm/core/services/google-maps-types';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DownloadComponent} from '../../aniruddh/components/download/download.component';
import {MapService} from '@candifood/core';

@Component({
  selector: 'ani-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Aniruddha Das';

  public modalRef;
  public coordinates;
  public location;

  // header links
  public middleButton;
  public headerBrand;
  public headerLeftLinks;

  // footer links
  public year: string;
  public social;
  public brand;
  public contact;
  public message;
  public columnOneLinks;
  public columnTwoLinks;

  constructor(
    private httpClient: HttpClient,
    private mapService: MapService,
    private modalService: NgbModal,
    private changeDetectorRef: ChangeDetectorRef
  ) {

    this.middleButton = {
      display: false,
      label: 'Trying to get location from device...',
      loading: true
    };

    this.headerLeftLinks = [
      /*{label: 'Contact Me', url: '/contact', display: true},*/
      {label: 'Profile', url: '/profile', display: true},
      /*{label: 'login', url: '/login', display: true},*/
      {label: 'Work Samples', url: '/work-sample', display: true}
    ];

    this.headerBrand = {
      label: 'Aniruddha Das',
      url: '/'
    };

    this.year = '2018';
    this.social = {
      facebook: 'http://www.facebook.com',
      googlePlus: 'http://www.plus.google.com',
      twitter: 'http://www.twitter.com',
      linkedin: 'http://www.linkedin.com',
    };

    this.brand = {
      label: 'Aniruddha Das',
      url: 'https://www.candifood.com'
    };

    this.contact = {
      name: 'Aniruddha Das',
      email: 'aniruddhadas9@gmail.com',
      phone: '+1 415 650 9102',
      fax: '+x xxx xxx xxxx'
    };
    this.message = {
      heading: 'UI Architect',
      desc: 'UI Architects: Do You Have What it Takes to Make Everyone Else`s Lives Easier?'
    };
    this.columnOneLinks = [
      {label: 'login', url: '/login'},
      {label: 'Privacy', url: '/privacy'}
    ];
    this.columnTwoLinks = [
      {label: 'profile', url: '/profile'}
    ];

  }


  ngOnInit() {

  }


  openLocationChangeModel(event) {
    this.modalRef = this.modalService.open(DownloadComponent, {windowClass: 'location-change-modal'});
    /*this.modalRef.componentInstance.input = this.location;
    this.modalRef.componentInstance.output.subscribe((location) => {
      this.location = location;
      this.middleButton.label = location.formatted_address;
      this.modalRef.componentInstance.input = this.location;
      this.mapService.locationBehaviorSubject.next(location);
    });*/
  }

  mapReady(map: GoogleMap) {
    this.mapService.map = map;
  }

}
