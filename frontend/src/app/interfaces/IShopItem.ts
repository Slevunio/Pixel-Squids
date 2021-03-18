import { IImage } from './IImage';

export interface IShopItemData {
    id?: string,
    name?: string,
    description?: string,
    prize?: number,
}

export interface IShopItem {
    data?: IShopItemData,
    Image?: File[] & IImage[]
}
