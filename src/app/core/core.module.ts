import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {AlertService} from './services/alert.service';
import {AppInitService} from './services/app-init.service';
import {AuthGuardService} from './services/auth-guard.service';
import {ConfigService} from './services/config.service';
import {UserService} from './services/user.service';
import {AlertsComponent} from './components/alerts/alerts.component';
import {LoginComponent} from './components/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {EncryptionService} from '../services/encryption.service';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import {MapService} from './services/map.service';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from '../services/app.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AlertsComponent,
    LoginComponent
  ],
  providers: [
    AppService,
    AlertService,
    AppInitService,
    AuthGuardService,
    ConfigService,
    EncryptionService,
    UserService,
    GoogleMapsAPIWrapper,
    MapService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ]
})
export class CoreModule {
}
