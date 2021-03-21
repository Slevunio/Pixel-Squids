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
    constructor(private tracksStoreService: TracksStoreService) { }

    public ngOnInit() {
        this.tracks = this.tracksStoreService.getTracksByInstrumentType(INSTRUMENT_TYPES.ACOUSTIC);
    }
}