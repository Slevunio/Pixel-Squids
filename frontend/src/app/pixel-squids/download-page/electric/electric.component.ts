import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { TracksStoreService } from 'src/app/store/tracks-store/tracksStoreService';
import { ITrack } from '../../../interfaces/ITrack';
import { INSTRUMENT_TYPES } from '../../../shared/constants/instrumentTypes';

@Component({
    selector: 'electric-component',
    templateUrl: './electric.component.html',
    styleUrls: ['./electric.component.scss']
})
export class ElectricComponent {
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
        this.tracks = this.tracksStoreService.getTracksByInstrumentType(INSTRUMENT_TYPES.ELECTRIC);
    }

    public setTag(tag: string) {
        this.tag = !!tag ? tag : null;
    }

    public filterTracks(val: string) {
        this.searchValue = val;
    }
}