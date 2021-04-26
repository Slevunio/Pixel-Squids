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
    public tag: string = null;
    public searchValue: string = null;

    public get getFilteredTracks() {
        let filteredTracks = this.tracks;
        if (!!this.tag) {
            filteredTracks = filteredTracks.filter(track => track.tag === this.tag);
        }
        if (!!this.searchValue) {
            filteredTracks = filteredTracks.filter(track => track.name.startsWith(this.searchValue));
        }
        return filteredTracks;
    }

    constructor(private tracksStoreService: TracksStoreService) { }

    public ngOnInit() {
        this.tracks = this.tracksStoreService.getTracksByInstrumentType(INSTRUMENT_TYPES.BASS);
    }

    public setTag(tag: string) {
        this.tag = !!tag ? tag : null;
    }

    public filterTracks(val: string) {
        this.searchValue = val;
    }
}