import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IShopItem } from '../interfaces/IShopItem';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ShopHttpService {

    private baseDevUrl = 'http://localhost:3200/api';

    constructor(private http: HttpClient) { }

    public getAllShopItems(): Observable<IShopItem[]> {
        return this.http.get<IShopItem[]>(`${this.baseDevUrl}/shopItems`);
    }

    public createShopItem(shopItem: IShopItem): Observable<IShopItem> {
        const formdata: FormData = new FormData();
        (shopItem.Image! as Blob[]).forEach((picture: Blob) => {
            formdata.append('files', picture as Blob);
        });
        formdata.append('prize', shopItem.data!.prize!.toString());
        formdata.append('name', shopItem.data!.name as string);
        formdata.append('description', shopItem.data!.description as string);

        return this.http.post<IShopItem>(`${this.baseDevUrl}/shopItems`, formdata).pipe(
            catchError(error => {
                console.error(error);
                return of(error);
            })
        );
    }

    public deleteShopItems(ids: string[]) {
        return this.http.delete<string[]>(`${this.baseDevUrl}/shopItems`, { params: { 'ids': ids } }).pipe(
            catchError(error => {
                console.error(error);
                return of(error);
            })
        );
    }
}