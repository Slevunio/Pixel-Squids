import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadPageComponent } from './pixel-squids/download-page/download-page.component';
import { UploadPageComponent } from './pixel-squids/upload-page/upload-page.component';
import { AcousticComponent } from './pixel-squids/download-page/acoustic/acoustic.component';
import { ElectricComponent } from './pixel-squids/download-page/electric/electric.component';
import { BassComponent } from './pixel-squids/download-page/bass/bass.component';

const routes: Routes = [

  { path: '', redirectTo: '/download', pathMatch: 'full' },
  { path: 'download', component: DownloadPageComponent },
  { path: 'upload', component: UploadPageComponent },
  { path: 'download/acoustic', component: AcousticComponent },
  { path: 'download/electric', component: ElectricComponent },
  { path: 'download/bass', component: BassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
