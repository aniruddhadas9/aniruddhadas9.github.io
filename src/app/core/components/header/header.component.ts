import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ConfigService} from '../../services/config.service';
import {MapService} from '../../services/map.service';
import {AppService} from '../../../services/app.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService, WarningAlert} from '../../services/alert.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ani-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  public location: any = [];
  public searchForm: FormGroup;
  private term: AbstractControl;
  public loading: boolean;
  public modalRef;

  constructor(private mapService: MapService,
              private modalService: NgbModal,
              private router: Router,
              private configService: ConfigService,
              private appService: AppService,
              private userService: UserService,
              private alertService: AlertService) {
    this.searchForm = new FormGroup({
      term: new FormControl('', [Validators.required]),
    });
    this.term = this.searchForm.controls['term'];
  }

  ngOnInit() {
  }

}
