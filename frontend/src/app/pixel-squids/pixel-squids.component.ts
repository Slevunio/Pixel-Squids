import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event, NavigationEnd, RoutesRecognized } from '@angular/router';
import { filter, map, pairwise } from 'rxjs/operators';
import { RouterService } from '../services/RouterService';
@Component({
    selector: 'pixel-squids-component',
    templateUrl: './pixel-squids.component.html',
    styleUrls: ['./pixel-squids.component.scss']
})
export class PixelSquidsComponent implements OnInit {

    public wasStartPage!: boolean;
    public isStartPage!: boolean;

    constructor(private routerService: RouterService) { }

    public ngOnInit() {
        this.routerService.wasPreviousStartPage$.subscribe(wasStartPage => {
            this.isStartPage = window.location.href.split('/')[3] === '';
            this.wasStartPage = wasStartPage;
        });
    }

}