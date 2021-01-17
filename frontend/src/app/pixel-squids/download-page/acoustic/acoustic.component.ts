import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { TracksHttpService } from '../../../services/TracksHttpService';

@Component({
    selector: 'acoustic.component',
    templateUrl: './acoustic.component.html',
    styleUrls: ['./acoustic.component.scss']
})
export class AcousticComponent implements OnInit {
    
    constructor(private tracksHttpService: TracksHttpService) { }

    public ngOnInit() {
        this.tracksHttpService.getAcoustics().pipe(
            take(1)
        ).subscribe(res => {
            console.log(res);
        });
    }
}