import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/EventService';
@Component({
    selector: 'pixel-squids-component',
    templateUrl: './pixel-squids.component.html',
    styleUrls: ['./pixel-squids.component.scss']
})
export class PixelSquidsComponent implements OnInit{

    public wasMainPageClicked: boolean = false;

    constructor(private eventService: EventService) { }

    public ngOnInit() {
        this.eventService.mainPageClicked$.subscribe(clicked => {
            this.wasMainPageClicked = clicked;
        });
    }
}