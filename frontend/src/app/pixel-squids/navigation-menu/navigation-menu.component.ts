import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterService } from '../../services/RouterService';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'navigation-menu-component',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

    public wasStartPage!: boolean;
    public isMainPage!: boolean;
    public roundedNavbarClass: string;
    public logoClass: string;
    public observable$!: Observable<boolean>;
    private readonly DEFAULT_ICONS_PATHS = ['../../../assets/download.png', '../../../assets/upload.png', '../../../assets/learning.png', '../../../assets/shopping.png', '../../../assets/email.png'];
    private readonly LEARN_ICONS_PATHS = ['../../../assets/learn/download.png', '../../../assets/learn/upload.png', '../../../assets/learn/learning.png', '../../../assets/learn/shopping.png', '../../../assets/learn/email.png'];
    private readonly BLACK_PIXEL_SQUID_ICON_PATH = '../../../assets/czarny pixel squid.png';
    private readonly DEFAULT_PIXEL_SQUID_ICON_PATH = '../../assets/Pixel Squid.png';

    public currentIcons: string[];
    public currentPixelSquidIcon: string;

    public currentContainerClass: string;

    constructor(private routerService: RouterService, private router: Router) { }

    public ngOnInit() {
        // this.routerService.wasPreviousStartPage$.subscribe(wasStartPage => {
        //     this.wasStartPage = wasStartPage;
        //     this.setCurrentIcons();
        // });
        this.routerService.currentRoute$.subscribe(route => {
            this.isMainPage = route === '/main';
            this.roundedNavbarClass = this.isMainPage ? 'rounded-navbar' : 'hidden';
            this.logoClass = this.isMainPage ? 'logo-on-animation' : 'logo';
            this.setCurrentIcons(route as string);
        });
    }

    private setCurrentIcons(route: string) {

        const currentRoute = route.split('/')[2] === 'fromRecord' && route.split('/').length > 4 ? route.split('/')[2] : route;
        this.currentPixelSquidIcon = this.DEFAULT_PIXEL_SQUID_ICON_PATH;
        switch (currentRoute) {
            case '/learn':
                this.currentIcons = this.LEARN_ICONS_PATHS;
                break;
            case '/download/acoustic':
                this.currentPixelSquidIcon = this.BLACK_PIXEL_SQUID_ICON_PATH;
                break;
            case '/download/bass':
                this.currentPixelSquidIcon = this.BLACK_PIXEL_SQUID_ICON_PATH;
                break;
            case '/download/electric':
                this.currentPixelSquidIcon = this.BLACK_PIXEL_SQUID_ICON_PATH;
                break;
            case 'fromRecord':
                this.currentPixelSquidIcon = this.BLACK_PIXEL_SQUID_ICON_PATH;
                break;
            default:
                this.currentIcons = this.DEFAULT_ICONS_PATHS;
        }
    }

    public showNavbar() {
        if(this.isMainPage) { return; }
        this.roundedNavbarClass = 'rounded-navbar-animated';
        this.logoClass = 'logo-on-animation';
    }

    public hideNavbar() {
        if(this.isMainPage) { return; }
        this.roundedNavbarClass = this.isMainPage ? 'rounded-navbar' : 'hidden';
        this.logoClass = this.isMainPage ? 'logo-on-animation' : 'logo';
    }
}