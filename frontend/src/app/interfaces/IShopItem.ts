import { IImage } from './IImage';

export interface IShopItemData {
    id?: string,
    name?: string,
    description?: string,
    prize?: number,
}

export interface IShopItem {
    Image?: File[] & IImage[],
    createdAt?: string,
    description: string,
    id?: string,
    name: string,
    prize: number,
    updatedAt?: string
}
