import { Injectable } from "@angular/core";

import { NavigationEnd, Router, Event, NavigationStart, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class RouterService {

    public wasPreviousStartPage$ = new BehaviorSubject(false);
    public currentRoute$ = new Subject();
    private wasPreviousStartPage!: boolean;
    
    constructor(private router: Router, private route: ActivatedRoute) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.wasPreviousStartPage$.next(this.wasPreviousStartPage);
                this.wasPreviousStartPage = window.location.href.split('/')[3] === '';
            } else if (event instanceof NavigationStart) {
                this.currentRoute$.next(event.url);
            }
        });

        
    }
}