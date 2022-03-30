import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GoogleMap} from '@agm/core/services/google-maps-types';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Footer, Header, HeaderService, MapService} from "@candypal/website";
import {UsaStateSelectionComponent} from "../../aniruddh/components/usa-state-selection/usa-state-selection.component";

@Component({
  selector: 'ani-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Aniruddha Das';

  public modalRef: any;
  public coordinates: any;
  public location: any;

  // header links
  public middleButton: any;
  public headerBrand: any;
  public headerLeftLinks: any;
  // header links
  public header: Header;

  // footer links
  public footer: Footer;
  // footer links
  public year: string;
  public social: any;
  public brand: any;
  public contact: any;
  public message: any;
  public columnOneLinks: any;
  public columnTwoLinks: any;

  constructor(
    private httpClient: HttpClient,
    private headerService: HeaderService,
    private mapService: MapService,
    private modalService: NgbModal,
    private changeDetectorRef: ChangeDetectorRef
  ) {

    this.header = {
      brand: {
        label: 'Aniruddha',
        url: '/',
        brandImage: {
          display: false,
          logo: {
            imageInAsset: '.',
            alt: '.',
            style: {
              top: 0,
              display: 'none',
              width: '150px',
              height: '150px'
            }
          },
          style: {
            display: 'none',
            'padding-top': '1px'
          }
        },
        style: {
          'color': '#ffffff',
          'text-decoration': 'none'
        }
      },
      links: {
        rightLinks: [
          {label: 'login', url: '/login'},
        ],
        leftLinks: [],
        style: {
          'background-color': '#ec7a39',
          'color': '#f6f6f6',
          'text-decoration': 'none',
          'a:link': {
            'color': '#3eff77'
          },
          'a:visited': {
            'color': '#ff9d19'
          },
          'a:hover': {
            'color': '#fe4d0e'
          },
          'a:active': {
            'color': '#ec7a39'
          }
        }
      },
      middleButton: {
        display: true,
        label: 'Aniruddha Das',
        loading: true,
        style: {
          'background-color': '#ec9a0a',
          'color': '#ffffff'
        }
      },
      style: {
        'background-color': '#ec7a39'
      }
    };

    this.headerService.header.next(this.header);

    this.footer = {
      displayTopSection: true,
      social: {
        facebook: 'http://www.facebook.com',
        googlePlus: 'http://www.plus.google.com',
        twitter: 'http://www.twitter.com',
        linkedIn: 'http://www.linkedin.com',
      },
      copyright: {
        year: 2018,
        label: 'candifood team',
        url: 'https://www.candifood.com'
      },
      contact: {
        name: 'Aniruddha Das',
        email: 'candifoodindia@gmail.com',
        phone: '+1 415 650 9102',
        fax: '+x xxx xxx xxxx'
      },
      message: {
        heading: 'Architect',
        desc: 'A architect position is not a badge or class where you dont have to work and relax' +
          ' but its a position where you more responsibility to controll the work need to be done'
      },
      columnOneLinks: [
        {label: 'login', url: '/login', hidden: false},
        {label: 'Privacy', url: '/privacy', hidden: false}
      ],
      columnTwoLinks: [
        {label: 'profile', url: '/profile', hidden: false}
      ],
      style: {
        'background-color': '#7a690b',
        'color': '#f99d00',
        'a:link': {
          'color': '#ffc11a'
        },
        'a:visited': {
          'color': '#16d3ff'
        },
        'a:hover': {
          'color': '#fbfe11'
        },
        'a:active': {
          'color': '#d0eccb'
        }
      }
    };



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
    // gets the coordinates from the browser and address from google map. this happens first time
    this.mapService.getBrowserCoordinates({}).subscribe((position: any) => {
      this.coordinates = position && position.coords;
      this.mapService.getAddressFromCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }).subscribe((location: any) => {
        this.header.middleButton = {
          display: true,
          label: location.formatted_address,
          loading: false
        };
        this.changeDetectorRef.detectChanges();
        // this._getRestaurantsFromMap(location);
      }, (error) => {
        this.header.middleButton = {
          display: true,
          label: 'Aniruddha Das',
          loading: false
        };
      });
    }, (error) => {
      this.header.middleButton = {
        display: true,
        label: 'Aniruddha Das',
        loading: false
      };
    });


  }


  openLocationChangeModel(event: string) {
    console.log('openLocationChangeModel|event: %o', event);
    this.modalRef = this.modalService.open(UsaStateSelectionComponent, {windowClass: 'location-change-modal'});
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
