export interface IImage {
    ShopItemId: string;
    createdAt: string;
    id: string;
    image: {
        data: number[];
        type: string;
    };
    updatedAt: string;
}
