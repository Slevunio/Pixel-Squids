import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITrack } from 'src/app/interfaces/ITrack';
import { TracksStoreService } from '../../../store/tracks-store/tracksStoreService';
@Component({
    selector: 'track-component',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

    public track: ITrack;
    
    constructor(
        private route: ActivatedRoute,
        private tracksStoreService: TracksStoreService
    ) { }

    public ngOnInit() {
        const trackId = this.route.snapshot.url[2].path;
        this.track = this.tracksStoreService.getTrackById(trackId);
    }
}