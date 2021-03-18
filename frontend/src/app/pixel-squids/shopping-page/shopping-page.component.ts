import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IShopItem } from '../../interfaces/IShopItem';
import { ShopHttpService } from '../../services/ShopHttpService';
import { IImage } from 'src/app/interfaces/IImage';

interface IShopItemWithImageSrc {
    shopItem: IShopItem;
    imageSrc$: Observable<string>;
}
@Component({
    selector: 'shopping-page-component',
    templateUrl: './shopping-page.component.html',
    styleUrls: ['./shopping-page.component.scss']
})
export class ShoppingPageComponent implements OnInit {

    public shopItems: IShopItemWithImageSrc[] = [];
    constructor(
        private shopHttpService: ShopHttpService,
    ) { }

    public ngOnInit() {
        this.shopHttpService.getAllShopItems().pipe(take(1)).subscribe(shopItems => {
            this.shopItems = shopItems.map(shopItem => ({ shopItem: shopItem, imageSrc$: this.generateBase64Image((shopItem.Image![0] as IImage).image.data)}));
        });
    }


    public generateBase64Image(bufferArray: number[]): Observable<string> {
        const array = new Uint8Array(bufferArray);
        const blob = new Blob([array]);
        return new Observable<string>(subscriber => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);

            reader.onloadend = () => {
                let base64data = reader.result as string;
                const header = 'data:image/png;base64,';
                base64data = header + base64data.split(',')[1];
                subscriber.next(base64data);
                subscriber.complete();
            };
        });
    }
}