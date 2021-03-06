import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './aniruddh/components/home/home.component';
import {LoginComponent} from '@candifood/core';
import {DownloadComponent} from './aniruddh/components/download/download.component';
import {WorkSampleComponent} from './aniruddh/components/work-sample/work-sample.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
