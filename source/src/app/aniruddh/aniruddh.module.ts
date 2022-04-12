import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DownloadComponent} from './components/download/download.component';
import {HomeComponent} from './components/home/home.component';
import {WorkSampleComponent} from './components/work-sample/work-sample.component';
import {AniruddhRoutingModule} from './aniruddh-routing.module';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ReferenceComponent} from './components/reference/reference.component';
import {SummaryComponent} from './components/summary/summary.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {ReferenceWebsitesComponent} from './components/reference-websites/reference-websites.component';
import {EducationsComponent} from './components/educations/educations.component';
import {HonorsAndAwardsComponent} from './components/honors-and-awards/honors-and-awards.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {UsaStateSelectionComponent} from "./components/usa-state-selection/usa-state-selection.component";
import {ProfileImageComponent} from "./components/profile-image/profile-image.component";
import {WebsiteModule} from "@candypal/website";
import {CarouselModule} from "primeng/carousel";
import {PersonalInformationComponent} from "./components/personal-information/personal-information.component";
import {DeclarationComponent} from './components/declaration/declaration.component';
import {WorkExperienceComponent} from "./components/work-experience/work-experience.component";
import {TechinicalSkillsComponent} from './components/techinical-skills/techinical-skills.component';

const components = [
  DownloadComponent,
  HomeComponent,
  WorkSampleComponent,
  ContactsComponent,
  ReferenceComponent,
  SummaryComponent,
  ExperienceComponent,
  ReferenceWebsitesComponent,
  EducationsComponent,
  HonorsAndAwardsComponent,
  ProjectsComponent,
  UsaStateSelectionComponent,
  ProfileImageComponent,
  PersonalInformationComponent,
  DeclarationComponent,
  WorkExperienceComponent,
  TechinicalSkillsComponent
]

@NgModule({
  imports: [
    CommonModule,
    AniruddhRoutingModule,
    WebsiteModule,
    CarouselModule
  ],
  declarations: components,
  exports: components
})
export class AniruddhModule {
}
