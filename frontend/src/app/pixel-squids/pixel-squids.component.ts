import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { RouterService } from '../services/RouterService';
import { routeToHeaderMap } from '../shared/constants/routeToHeaderMap';
import { Router } from '@angular/router';
@Component({
    selector: 'pixel-squids-component',
    templateUrl: './pixel-squids.component.html',
    styleUrls: ['./pixel-squids.component.scss']
})
export class PixelSquidsComponent implements OnInit {

    private readonly MAIN_BACKGROUND_IMAGE = '../../assets/main_background.png';
    private readonly BLURRED_MAIN_BACKGROUND_IMAGE = '../../assets/tlo_z_blurem.jpg';
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
        let route;
        if (currentRoute.split('/')[2] === 'fromRecord' && currentRoute.split('/').length > 4) {
            route = 'fromRecordLast';
        } else if (currentRoute.split('/')[2] === 'fromRecord' && currentRoute.split('/').length === 4) {
            route = 'fromRecord';
        }else if (currentRoute.split('/')[2] === 'fromDisc' && currentRoute.split('/').length === 4) {
            route = 'fromDisc';
        }
        else if (currentRoute.split('/')[1] === 'shop' && currentRoute.split('/').length > 2) {
            route = 'shopItem';
        } else {
            route = currentRoute
        }

        switch (route) {
            case '/learn':
                return '';
            case '/download':
                return this.BLURRED_MAIN_BACKGROUND_IMAGE;
            case '/download/acoustic':
                return '';
            case '/download/bass':
                return '';
            case '/download/electric':
                return '';
            case '/upload/fromRecord':
                return this.BLURRED_MAIN_BACKGROUND_IMAGE;
            case '/upload/fromDisc':
                return this.BLURRED_MAIN_BACKGROUND_IMAGE;
            case 'fromRecord':
                return this.BLURRED_MAIN_BACKGROUND_IMAGE;
            case 'fromDisc':
                return this.BLURRED_MAIN_BACKGROUND_IMAGE;
            case 'fromRecordLast':
                return '';
            case 'shopItem':
                return this.BLURRED_MAIN_BACKGROUND_IMAGE;
            default:
                return this.MAIN_BACKGROUND_IMAGE;
        }
    }
}