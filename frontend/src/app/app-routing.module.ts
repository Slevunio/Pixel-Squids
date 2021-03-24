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
import { MainPageComponent } from './pixel-squids/main-page/main-page.component';
import { StartPageComponent } from './pixel-squids/start-page/start-page.component';
import { UploadCategoryPageComponent } from './pixel-squids/upload-page/upload-category-page/upload-category-page.component';
import { UploadFromRecordPageComponent } from './pixel-squids/upload-page/upload-from-record-page/upload-from-record-page.component';
import { ShoppingItemPageComponent } from './pixel-squids/shopping-page/shopping-item-page/shopping-item-page.component';
import { TrackComponent } from './pixel-squids/download-page/track/track.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'download', component: DownloadPageComponent },
  { path: 'upload', component: UploadPageComponent },
  { path: 'download/acoustic', component: AcousticComponent },
  { path: 'download/electric', component: ElectricComponent },
  { path: 'download/bass', component: BassComponent },
  { path: 'download/acoustic/:id', component: TrackComponent },
  { path: 'download/electric/:id', component: TrackComponent },
  { path: 'download/bass/:id', component: TrackComponent },
  { path: 'learn', component: LearningPageComponent },
  { path: 'shop', component: ShoppingPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'upload/:uploadWay', component: UploadCategoryPageComponent },
  { path: 'upload/fromRecord/:instrumentType', component: UploadFromRecordPageComponent },
  { path: 'shop/:id', component: ShoppingItemPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
