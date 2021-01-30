import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadPageComponent } from './pixel-squids/download-page/download-page.component';
import { UploadPageComponent } from './pixel-squids/upload-page/upload-page.component';
import { AcousticComponent } from './pixel-squids/download-page/acoustic/acoustic.component';
import { ElectricComponent } from './pixel-squids/download-page/electric/electric.component';
import { BassComponent } from './pixel-squids/download-page/bass/bass.component';
import { LearningPageComponent } from './pixel-squids/learning-page/learning-page.component';
import { ShoppingPageComponent } from './pixel-squids/shopping-page/shopping-page.component';
import { ContactPageComponent } from './pixel-squids/contact-page/contact-page.component';

const routes: Routes = [

  { path: '', redirectTo: '/download', pathMatch: 'full' },
  { path: 'download', component: DownloadPageComponent },
  { path: 'upload', component: UploadPageComponent },
  { path: 'download/acoustic', component: AcousticComponent },
  { path: 'download/electric', component: ElectricComponent },
  { path: 'download/bass', component: BassComponent },
  { path: 'learn', component: LearningPageComponent },
  { path: 'shop', component: ShoppingPageComponent },
  { path: 'contact', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
