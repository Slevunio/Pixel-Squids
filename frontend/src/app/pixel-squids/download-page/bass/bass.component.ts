import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { ITrack } from 'src/app/interfaces/ITrack';
import { TracksHttpService } from 'src/app/services/TracksHttpService';
import { INSTRUMENT_TYPES } from 'src/app/shared/constants/instrumentTypes';

@Component({
    selector: 'bass-component',
    templateUrl: './bass.component.html',
    styleUrls: ['./bass.component.scss']
})
export class BassComponent {
    public tracks: ITrack[] = [];
    constructor(private tracksHttpService: TracksHttpService) { }

    public ngOnInit() {
        this.tracksHttpService.getTracks(INSTRUMENT_TYPES.BASS).pipe(
            take(1)
        ).subscribe(res => {
            this.tracks = res;
            console.log(this.tracks);
        });
    }
}