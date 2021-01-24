import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PixelSquidsComponent } from './pixel-squids/pixel-squids.component';
import { DownloadPageComponent } from './pixel-squids/download-page/download-page.component';
import { UploadPageComponent } from './pixel-squids/upload-page/upload-page.component';
import { NavigationMenuComponent } from './pixel-squids/navigation-menu/navigation-menu.component';
import { AcousticComponent } from './pixel-squids/download-page/acoustic/acoustic.component';
import { BassComponent } from './pixel-squids/download-page/bass/bass.component';
import { TracksHttpService } from './services/TracksHttpService';
import { TracksService } from './services/TracksService';
import { HttpClientModule } from '@angular/common/http';
import { TrackComponent } from './pixel-squids/download-page/track/track.component';
import { TrackWrapperComponent } from './pixel-squids/download-page/track/track-wrapper/track-wrapper.component';
import { FileUploadModule } from 'ng2-file-upload';
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
    UploadPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [TracksHttpService, TracksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
