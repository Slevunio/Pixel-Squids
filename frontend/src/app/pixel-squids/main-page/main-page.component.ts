import { Component } from '@angular/core';
import { EventService } from '../../services/EventService';

@Component({
    selector: 'main-page-component',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

    public wasClicked = false;

    constructor(private eventService: EventService) { }

    public click() {
        this.wasClicked = true;
        this.eventService.click();
    }
    
}