import { Component, OnInit } from '@angular/core';
import { IShopItem } from '../../interfaces/IShopItem';
import { ShopItemsStoreService } from '../../store/shop-items-store/shopItemsStoreService';
@Component({
    selector: 'shopping-page-component',
    templateUrl: './shopping-page.component.html',
    styleUrls: ['./shopping-page.component.scss']
})
export class ShoppingPageComponent implements OnInit {

    public shopItems: IShopItem[] = [];

    constructor(
        private shopItemsStoreService: ShopItemsStoreService,
    ) { }

    public ngOnInit() {
        this.shopItems = this.shopItemsStoreService.getShopItems();
    }
}
