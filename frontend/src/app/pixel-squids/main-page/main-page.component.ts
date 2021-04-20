import { Component } from '@angular/core';

@Component({
    selector: 'main-page-component',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
    public slides = [
        { path: '/assets/Slajd1.jpg' },
        { path: '/assets/Slajd2.jpg' },
        { path: '/assets/Slajd3.jpg' },
        { path: '/assets/slajd4.jpg' }];
}