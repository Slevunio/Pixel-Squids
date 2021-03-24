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
    public filteredTracks: ITrack[] = [];
    constructor(private tracksStoreService: TracksStoreService) { }

    public ngOnInit() {
        this.tracks = this.tracksStoreService.getTracksByInstrumentType(INSTRUMENT_TYPES.ELECTRIC);
        this.filteredTracks = this.tracks;
    }

    public setTag(tag: string) {
        this.filteredTracks = !!tag ? this.tracks.filter(track => track.tag === tag) : this.tracks;
    }
}