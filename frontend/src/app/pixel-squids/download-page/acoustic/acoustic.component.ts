import { Component, OnInit } from '@angular/core';
import { TracksHttpService } from '../../../services/TracksHttpService';

@Component({
    selector: 'acoustic.component',
    templateUrl: './acoustic.component.html',
    styleUrls: ['./acoustic.component.scss']
})
export class AcousticComponent implements OnInit {
    
    constructor(private tracksHttpService: TracksHttpService) { }

    public ngOnInit() {
        this.tracksHttpService.getAcoustics()
    }
}