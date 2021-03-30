import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'start-page-component',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements AfterViewInit {

    constructor(private router: Router) { }

    public ngAfterViewInit() {
        setTimeout(() => {
            this.router.navigate(['main']);
        }, 3000)
    }
}