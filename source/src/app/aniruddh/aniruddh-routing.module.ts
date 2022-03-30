import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DownloadComponent} from './components/download/download.component';
import {WorkSampleComponent} from './components/work-sample/work-sample.component';
import {ContactsComponent} from './components/contacts/contacts.component';

const routes: Routes = [

  {
    path: 'downloads',
    component: DownloadComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'work-sample',
    component: WorkSampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AniruddhRoutingModule {
}
