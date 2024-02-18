import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeVideosComponent } from './liste-videos/liste-videos.component';
import { TableVideoComponent } from './table-video/table-video.component';
import { VideoComponent } from './video/video.component';
import { AProposComponent } from './a-propos/a-propos.component';


const routes: Routes = [
  {path: '', component: ListeVideosComponent},
  {path: 'detail/:id', component: VideoComponent},
  {path: 'tableau', component: TableVideoComponent},
  {path: 'aPropos', component: AProposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
