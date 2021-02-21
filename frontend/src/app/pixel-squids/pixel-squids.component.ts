import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterService } from '../services/RouterService';
import { routeToHeaderMap } from '../shared/constants/routeToHeaderMap';
@Component({
    selector: 'pixel-squids-component',
    templateUrl: './pixel-squids.component.html',
    styleUrls: ['./pixel-squids.component.scss']
})
export class PixelSquidsComponent implements OnInit {

    public wasStartPage!: boolean;
    public isStartPage!: boolean;

    public currentHeader!: string;

    constructor(private routerService: RouterService, private route: ActivatedRoute, private router: Router, private location: Location) { }

    public ngOnInit() {
        this.routerService.wasPreviousStartPage$.subscribe(wasStartPage => {
            this.isStartPage = window.location.href.split('/')[3] === '';
            this.wasStartPage = wasStartPage;
        });

        this.routerService.currentRoute$.subscribe(currentRoute => {
            this.currentHeader = routeToHeaderMap[currentRoute as string];
        });
    }

    public navigateBack() {
        this.location.back();
    }

}