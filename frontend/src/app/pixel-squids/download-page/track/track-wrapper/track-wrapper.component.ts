import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ITrack } from 'src/app/interfaces/ITrack';
import { TracksService } from '../../../../services/TracksService';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TracksHttpService } from '../../../../services/TracksHttpService';
import { ISoundtrack } from 'src/app/interfaces/ISoundtrack';

@Component({
    selector: 'track-wrapper-component',
    templateUrl: './track-wrapper.component.html',
    styleUrls: ['./track-wrapper.component.scss']
})
export class TrackWrapperComponent implements OnInit {

    @Input()
    public track!: ITrack;
    public src!: SafeUrl;

    constructor(private tracksService: TracksService, private domSanitizer: DomSanitizer, private tracksHttpService: TracksHttpService) { }

    public ngOnInit() {
        var array = new Uint8Array((this.track.soundtrack! as ISoundtrack).data);
       const blob =  new Blob([array]);
        this.tracksService.generateBase64Audio(blob).pipe(
            take(1)
        ).subscribe(src => {
            this.src = this.domSanitizer.bypassSecurityTrustUrl(src);
        });
    }
}