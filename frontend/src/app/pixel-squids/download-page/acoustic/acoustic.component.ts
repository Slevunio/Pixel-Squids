import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ITrack } from 'src/app/interfaces/ITrack';
import { TracksHttpService } from '../../../services/TracksHttpService';
import { INSTRUMENT_TYPES } from '../../../shared/constants/instrumentTypes';

@Component({
    selector: 'acoustic-component',
    templateUrl: './acoustic.component.html',
    styleUrls: ['./acoustic.component.scss']
})
export class AcousticComponent implements OnInit {
    
    public tracks: ITrack[] = [];
    constructor(private tracksHttpService: TracksHttpService) { }

    public ngOnInit() {
        this.tracksHttpService.getTracks(INSTRUMENT_TYPES.ACOUSTIC).pipe(
            take(1)
        ).subscribe(res => {
            this.tracks = res;
        });
    }
}