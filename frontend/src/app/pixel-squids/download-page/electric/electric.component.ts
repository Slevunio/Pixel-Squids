import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { ITrack } from '../../../interfaces/ITrack';
import { TracksHttpService } from '../../../services/TracksHttpService';
import { INSTRUMENT_TYPES } from '../../../shared/constants/instrumentTypes';

@Component({
    selector: 'electric-component',
    templateUrl: './electric.component.html',
    styleUrls: ['./electric.component.scss']
})
export class ElectricComponent {
    public tracks: ITrack[] = [];
    constructor(private tracksHttpService: TracksHttpService) { }

    public ngOnInit() {
        this.tracksHttpService.getTracks(INSTRUMENT_TYPES.ELECTRIC).pipe(
            take(1)
        ).subscribe(res => {
            this.tracks = res;
        });
    }
}