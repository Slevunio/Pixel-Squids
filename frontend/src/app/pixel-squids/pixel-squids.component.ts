import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { RouterService } from '../services/RouterService';
import { routeToHeaderMap } from '../shared/constants/routeToHeaderMap';
import { combineLatest } from 'rxjs';
import { Router } from '@angular/router';
@Component({
    selector: 'pixel-squids-component',
    templateUrl: './pixel-squids.component.html',
    styleUrls: ['./pixel-squids.component.scss']
})
export class PixelSquidsComponent implements OnInit {

    private readonly MAIN_BACKGROUND_IMAGE = '../../assets/main_background.png';
    public wasStartPage!: boolean;
    public isStartPage!: boolean;
    public isMainPage!: boolean;

    public currentHeader!: string;
    private currentRoute: string;


    @ViewChild('wrapper', { static: false }) public wrapper: ElementRef;

    constructor(private routerService: RouterService, private location: Location, private renderer: Renderer2, private router: Router) { }

    public ngOnInit() {
        this.routerService.wasPreviousStartPage$.subscribe(wasStartPage => {
            this.isStartPage = window.location.href.split('/')[3] === '';
            this.isMainPage = window.location.href.split('/')[3] === 'main';
            this.wasStartPage = wasStartPage;
            this.currentRoute = this.router.url;
            if (!!this.wrapper) {
                this.renderer.setStyle(this.wrapper.nativeElement, 'background-color', this.getCurrentBackgroundColor(this.currentRoute as string));
                this.renderer.setStyle(this.wrapper.nativeElement, 'background-image', `url(${this.getCurrentBackgroundImage(this.currentRoute as string)})`);
            }
        });

        this.routerService.currentRoute$.subscribe(currentRoute => {
            this.currentHeader = routeToHeaderMap[currentRoute as string];
        });
    }

    public ngAfterViewInit() {
        this.renderer.setStyle(this.wrapper.nativeElement, 'background-color', this.getCurrentBackgroundColor(this.currentRoute as string));
        this.renderer.setStyle(this.wrapper.nativeElement, 'background-image', `url(${this.getCurrentBackgroundImage(this.currentRoute as string)})`);
    }

    public navigateBack() {
        this.location.back();
    }

    private getCurrentBackgroundColor(currentRoute: string) {
        currentRoute = currentRoute.split('/')[2] === 'fromRecord' && currentRoute.split('/').length > 4 ? currentRoute.split('/')[2] : currentRoute;

        switch (currentRoute) {
            case '/learn':
                return 'black';
            case '/download/acoustic':
                return 'white';
            case '/download/bass':
                return 'white';
            case '/download/electric':
                return 'white';
            case 'fromRecord':
                return 'white';
            default:
                return '';
        }
    }

    private getCurrentBackgroundImage(currentRoute: string) {
        currentRoute = currentRoute.split('/')[2] === 'fromRecord' && currentRoute.split('/').length > 4 ? currentRoute.split('/')[2] : currentRoute;

        switch (currentRoute) {
            case '/learn':
                return '';
            case '/download/acoustic':
                return '';
            case '/download/bass':
                return '';
            case '/download/electric':
                return '';
            case 'fromRecord':
                return '';
            default:
                return this.MAIN_BACKGROUND_IMAGE;
        }
    }
}