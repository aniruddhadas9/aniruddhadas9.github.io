import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
