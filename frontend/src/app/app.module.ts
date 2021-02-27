import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FileUploadModule } from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { PixelSquidsComponent } from './pixel-squids/pixel-squids.component';
import { DownloadPageComponent } from './pixel-squids/download-page/download-page.component';
import { UploadPageComponent } from './pixel-squids/upload-page/upload-page.component';
import { NavigationMenuComponent } from './pixel-squids/navigation-menu/navigation-menu.component';
import { AcousticComponent } from './pixel-squids/download-page/acoustic/acoustic.component';
import { BassComponent } from './pixel-squids/download-page/bass/bass.component';
import { ElectricComponent } from './pixel-squids/download-page/electric/electric.component';
import { TrackComponent } from './pixel-squids/download-page/track/track.component';
import { TrackWrapperComponent } from './pixel-squids/download-page/track/track-wrapper/track-wrapper.component';
import { MainPageComponent } from './pixel-squids/main-page/main-page.component';
import { StartPageComponent } from './pixel-squids/start-page/start-page.component';
import { UploadCategoryPageComponent } from './pixel-squids/upload-page/upload-category-page/upload-category-page.component';
import { UploadFromRecordPageComponent } from './pixel-squids/upload-page/upload-from-record-page/upload-from-record-page.component';
import { AdminTracksPageComponent } from './pixel-squids/admin-page/tracks/admin-tracks-page.component';
import { AdminShopPageComponent } from './pixel-squids/admin-page/shop/admin-shop-page.component';

import { TracksHttpService } from './services/TracksHttpService';
import { TracksService } from './services/TracksService';
import { RouterService } from './services/RouterService';


@NgModule({
  declarations: [
    AppComponent,
    PixelSquidsComponent,
    DownloadPageComponent,
    NavigationMenuComponent,
    AcousticComponent,
    BassComponent,
    ElectricComponent,
    TrackComponent,
    TrackWrapperComponent,
    UploadPageComponent,
    MainPageComponent,
    StartPageComponent,
    UploadCategoryPageComponent,
    UploadFromRecordPageComponent,
    AdminTracksPageComponent,
    AdminShopPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [TracksHttpService, TracksService, RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
