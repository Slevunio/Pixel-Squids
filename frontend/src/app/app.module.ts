import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { PixelSquidsComponent } from './pixel-squids/pixel-squids.component';
import { DownloadPageComponent } from './pixel-squids/download-page/download-page.component';
import { UploadPageComponent } from './pixel-squids/upload-page/upload-page.component';
import { NavigationMenuComponent } from './pixel-squids/navigation-menu/navigation-menu.component';
import { AcousticComponent } from './pixel-squids/download-page/acoustic/acoustic.component';
import { BassComponent } from './pixel-squids/download-page/bass/bass.component';
import { TrackComponent } from './pixel-squids/download-page/track/track.component';
import { TrackWrapperComponent } from './pixel-squids/download-page/track/track-wrapper/track-wrapper.component';
import { MainPageComponent } from './pixel-squids/main-page/main-page.component';
import { StartPageComponent } from './pixel-squids/start-page/start-page.component';

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
    TrackComponent,
    TrackWrapperComponent,
    UploadPageComponent,
    MainPageComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    CommonModule
  ],
  providers: [TracksHttpService, TracksService, RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
