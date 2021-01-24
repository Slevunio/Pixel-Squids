import { Component, Input } from '@angular/core';
import { ITrack } from 'src/app/interfaces/ITrack';

@Component({
    selector: 'track-component',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.scss']
})
export class TrackComponent {

    @Input() private tracks: ITrack[] = [];
    
}