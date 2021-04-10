import { Component, ElementRef, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ITrack } from 'src/app/interfaces/ITrack';
import { TracksService } from '../../../../services/TracksService';
import { DomSanitizer } from '@angular/platform-browser';
import { TracksStoreService } from '../../../../store/tracks-store/tracksStoreService';
const _ = require('lodash');

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
    public showNotes = false;
    public backgroundHeight: number = 0;
    private audio!: HTMLAudioElement;
    private isPlaying: boolean = false;
    private src: string;

    @ViewChild('image', { static: false }) public imageElement!: ElementRef;


    constructor(private tracksService: TracksService, private domSanitizer: DomSanitizer, private tracksStoreService: TracksStoreService, private cd: ChangeDetectorRef) { }

    public ngOnInit() {
        this.imgSrc = this.imgSrcPlay;
        this.tracksStoreService.getSountrack(this.track)
            .subscribe(src => {
                this.src = src;
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

    public download() {
        const base64EncodedTrack = this.src.split(',')[1];
        const byteCharacters = atob(base64EncodedTrack);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray]);
        const type = this.track.name?.split('.')[1];
        this.tracksService.downloadFile(blob, this.track.name!, type!);
    }

    public toggleNotes() {
        this.showNotes = !this.showNotes;
    }
}