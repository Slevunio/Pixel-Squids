import { Injectable } from "@angular/core";
import { IShopItem } from '../../interfaces/IShopItem';
import { PREDEFINED_SHOP_ITEMS } from '../../shared/constants/predefinedShopItems';

@Injectable()
export class ShopItemsStoreService {
    private shopItems: IShopItem[];

    constructor() {
        this.shopItems = PREDEFINED_SHOP_ITEMS;
    }

    public getShopItems(): IShopItem[] {
        return this.shopItems;
    }

    public getShopItemById(id: string) {
        return this.shopItems.find(item => item.id === id);
    }
}