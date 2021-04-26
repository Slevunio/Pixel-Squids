import { Component, OnInit } from '@angular/core';
import { ITrack } from 'src/app/interfaces/ITrack';
import { INSTRUMENT_TYPES } from '../../../shared/constants/instrumentTypes';
import { TracksStoreService } from '../../../store/tracks-store/tracksStoreService';
@Component({
    selector: 'acoustic-component',
    templateUrl: './acoustic.component.html',
    styleUrls: ['./acoustic.component.scss']
})
export class AcousticComponent implements OnInit {

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
        this.tracks = this.tracksStoreService.getTracksByInstrumentType(INSTRUMENT_TYPES.ACOUSTIC);
    }

    public setTag(tag: string) {
        this.tag = !!tag ? tag : null;
    }

    public filterTracks(val: string) {
        this.searchValue = val;
    }
}