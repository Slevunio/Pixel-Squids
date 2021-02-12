import { Injectable } from "@angular/core";

import { NavigationEnd, Router, Event } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class RouterService {

    public wasPreviousStartPage$ = new BehaviorSubject(false);
    private wasPreviousStartPage!: boolean;
    
    constructor(private router: Router) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                // if(this.wasPreviousStartPage === undefined) {
                //     this.wasPreviousStartPage = window.location.href.split('/')[3] === '';
                // }
                this.wasPreviousStartPage$.next(this.wasPreviousStartPage);
                this.wasPreviousStartPage = window.location.href.split('/')[3] === '';
            }
        });
        
    }
}