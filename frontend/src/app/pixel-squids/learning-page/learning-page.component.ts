import { Component, OnInit } from '@angular/core';
import { IGuitarCord } from 'src/app/interfaces/IGuitarCord';
import { GuitarCordsStoreService } from '../../store/guitar-cords-store/guitarCordsStoreService';
@Component({
    selector: 'learning-page-component',
    templateUrl: './learning-page.component.html',
    styleUrls: ['./learning-page.component.scss']
})
export class LearningPageComponent implements OnInit {

    public guitarCords: IGuitarCord[];

    constructor(private guitarCordsStoreService: GuitarCordsStoreService) { }

    public ngOnInit() {
        this.guitarCords = this.guitarCordsStoreService.getGuitarCords();
    }
}