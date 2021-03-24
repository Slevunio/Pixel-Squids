import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { IShopItem } from '../../../interfaces/IShopItem';
import { ShopItemsStoreService } from '../../../store/shop-items-store/shopItemsStoreService';
@Component({
    selector: 'shopping-item-page-component',
    templateUrl: './shopping-item-page.component.html',
    styleUrls: ['shopping-item-page.component.scss']
})
export class ShoppingItemPageComponent implements OnInit {

    public shopItem!: IShopItem;
    public selectedImage: string;

    constructor(
        private route: ActivatedRoute,
        private shopItemsStoreService: ShopItemsStoreService
    ) { }

    public ngOnInit() {
        const shopItemId = this.route.snapshot.url[1].path;
        this.shopItem = this.shopItemsStoreService.getShopItemById(shopItemId);
        this.selectedImage = this.shopItem.imagesPaths[0];
        // this.shopHttpService.getShopItemById(shopItemId).subscribe(res => {
        //     this.shopItem = res;
        //     // this.images$ = res.Image!.map((image: IImage) => this.imageService.generateBase64Image((image as IImage).image.data))
        //     this.selectedImage$ = this.images$[0];
        // });
    }

    public setImage(index: number) {
        this.selectedImage = this.shopItem.imagesPaths[index];
    }
}