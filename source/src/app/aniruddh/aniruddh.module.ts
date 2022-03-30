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
  UsaStateSelectionComponent
]

@NgModule({
  imports: [
    CommonModule,
    AniruddhRoutingModule
  ],
  declarations: components,
  exports: components
})
export class AniruddhModule {
}
