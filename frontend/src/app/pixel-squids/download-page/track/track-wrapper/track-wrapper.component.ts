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
    private imgSrcPlay: string = '../../../../../assets/play.png';
    private imgSrcPause: string = '../../../../../assets/pause.png';
    public imgSrc!: string;
    private audio!: HTMLAudioElement;
    private isPlaying: boolean = false;

    constructor(private tracksService: TracksService, private domSanitizer: DomSanitizer, private tracksHttpService: TracksHttpService) { }

    public ngOnInit() {
        this.imgSrc = this.imgSrcPlay;
        var array = new Uint8Array((this.track.soundtrack! as ISoundtrack).data);
        const blob = new Blob([array]);

        this.tracksService.generateBase64Audio(blob).pipe(
            take(1)
        ).subscribe(src => {
            this.audio = new Audio(src);
            this.audio.addEventListener('ended', () => { this.imgSrc = this.imgSrcPlay; this.isPlaying = false; });
            this.audio.addEventListener('play', () => { this.imgSrc = this.imgSrcPause; this.isPlaying = true; });
            this.audio.addEventListener('pause', () => { this.imgSrc = this.imgSrcPlay; this.isPlaying = false });
        });
    }

    public toggle() {
        if (!this.isPlaying) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }
}