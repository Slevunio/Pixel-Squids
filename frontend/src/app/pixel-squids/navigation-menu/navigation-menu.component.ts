import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterService } from '../../services/RouterService';

@Component({
    selector: 'navigation-menu-component',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

    public wasStartPage!: boolean;
    public observable$!: Observable<boolean>;

    constructor(private routerService: RouterService) { }

    public ngOnInit() {
        this.routerService.wasPreviousStartPage$.subscribe(wasStartPage => {
            this.wasStartPage = wasStartPage;
        });
    }
}