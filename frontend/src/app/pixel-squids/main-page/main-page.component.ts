import { Component } from '@angular/core';
import { RouterService } from '../../services/RouterService';

@Component({
    selector: 'main-page-component',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

    public wasStartPage!: boolean;
    public slides = [
        { path: '/assets/Slajd1.jpg' },
        { path: '/assets/Slajd2.jpg' },
        { path: '/assets/Slajd3.jpg' },
        { path: '/assets/slajd4.jpg' }
    ];

    constructor(private routerService: RouterService) { }

    public ngOnInit() {
        this.routerService.wasPreviousStartPage$.subscribe(wasStartPage => {
            this.wasStartPage = wasStartPage;
        });
    }

}