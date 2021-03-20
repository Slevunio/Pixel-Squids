import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { IShopItem } from '../../../interfaces/IShopItem';
import { ShopHttpService } from '../../../services/ShopHttpService';
import { ImageService } from '../../../services/ImageService';
import { IImage } from '../../../interfaces/IImage';
import { Observable } from 'rxjs';

@Component({
    selector: 'shopping-item-page-component',
    templateUrl: './shopping-item-page.component.html',
    styleUrls: ['shopping-item-page.component.scss']
})
export class ShoppingItemPageComponent implements OnInit {

    public shopItem!: IShopItem;
    public selectedImage$!: Observable<string>;
    public images$!: Observable<string>[];

    constructor(
        private shopHttpService: ShopHttpService,
        private route: ActivatedRoute,
        private imageService: ImageService
    ) { }

    public ngOnInit() {
        const shopItemId = this.route.snapshot.url[1].path;
        this.shopHttpService.getShopItemById(shopItemId).subscribe(res => {
            this.shopItem = res;
            this.images$ = res.Image!.map((image: IImage) => this.imageService.generateBase64Image((image as IImage).image.data))
            this.selectedImage$ = this.images$[0];
        });
    }

    public setImage(index: number) {
        this.selectedImage$ = this.images$[index];
    }
}