import { AfterViewInit, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IGuitarCord } from 'src/app/interfaces/IGuitarCord';
import { GuitarCordsStoreService } from '../../store/guitar-cords-store/guitarCordsStoreService';
const _ = require("lodash");
@Component({
    selector: 'learning-page-component',
    templateUrl: './learning-page.component.html',
    styleUrls: ['./learning-page.component.scss']
})
export class LearningPageComponent implements OnInit, AfterViewInit {

    public guitarCords: IGuitarCord[];
    public isLoading: boolean;

    constructor(private guitarCordsStoreService: GuitarCordsStoreService, private cd: ChangeDetectorRef) { }

    public ngOnInit() {
        this.isLoading = true;
        this.guitarCords = this.guitarCordsStoreService.getGuitarCords();
    }

    public ngAfterViewInit() {
        
        _.delay(() => {
            this.isLoading = false;
            this.cd.detectChanges();
        }, 1000);
        
    }
}