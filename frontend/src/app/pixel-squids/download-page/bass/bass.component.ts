import { Component } from '@angular/core';
import { ITrack } from 'src/app/interfaces/ITrack';
import { INSTRUMENT_TYPES } from 'src/app/shared/constants/instrumentTypes';
import { TracksStoreService } from 'src/app/store/tracks-store/tracksStoreService';

@Component({
    selector: 'bass-component',
    templateUrl: './bass.component.html',
    styleUrls: ['./bass.component.scss']
})
export class BassComponent {
    public tracks: ITrack[] = [];
    public filteredTracks: ITrack[] = [];
    constructor(private tracksStoreService: TracksStoreService) { }

    public ngOnInit() {
        this.tracks = this.tracksStoreService.getTracksByInstrumentType(INSTRUMENT_TYPES.BASS);
        this.filteredTracks = this.tracks;
    }

    public setTag(tag: string) {
        this.filteredTracks = !!tag ?  this.tracks.filter(track => track.tag === tag) : this.tracks;
    }
}