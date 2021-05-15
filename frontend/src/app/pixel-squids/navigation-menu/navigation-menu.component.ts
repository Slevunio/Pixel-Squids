import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterService } from '../../services/RouterService';
import { Router } from '@angular/router';

@Component({
    selector: 'navigation-menu-component',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

    public wasStartPage!: boolean;
    public observable$!: Observable<boolean>;
    private readonly DEFAULT_ICONS_PATHS = ['../../../assets/download.png', '../../../assets/upload.png', '../../../assets/learning.png', '../../../assets/shopping.png', '../../../assets/email.png'];
    private readonly LEARN_ICONS_PATHS = ['../../../assets/learn/download.png', '../../../assets/learn/upload.png', '../../../assets/learn/learning.png', '../../../assets/learn/shopping.png', '../../../assets/learn/email.png'];
    private readonly DOWNLOAD_PIXEL_SQUID_ICON_PATH = '../../../assets/czarny pixel squid.png';
    private readonly DEFAULT_PIXEL_SQUID_ICON_PATH = '../../assets/Pixel Squid.png';

    public currentIcons: string[];
    public currentPixelSquidIcon: string;

    constructor(private routerService: RouterService, private router: Router) { }

    public ngOnInit() {
        this.routerService.wasPreviousStartPage$.subscribe(wasStartPage => {
            this.wasStartPage = wasStartPage;
            this.setCurrentIcons();
        });
    }

    private setCurrentIcons() {
        const currentRoute = this.router.url;
        this.currentPixelSquidIcon = this.DEFAULT_PIXEL_SQUID_ICON_PATH;
        switch (currentRoute) {
            case '/learn':
                this.currentIcons = this.LEARN_ICONS_PATHS;
                break;
            case '/download/acoustic':
                this.currentPixelSquidIcon = this.DOWNLOAD_PIXEL_SQUID_ICON_PATH;
                break;
            case '/download/bass':
                this.currentPixelSquidIcon = this.DOWNLOAD_PIXEL_SQUID_ICON_PATH;
                break;
            case '/download/electric':
                this.currentPixelSquidIcon = this.DOWNLOAD_PIXEL_SQUID_ICON_PATH;
                break;
            default:
                this.currentIcons = this.DEFAULT_ICONS_PATHS;
        }
    }
}