import { Component, OnInit } from '@angular/core';
import { IShopItem, IShopItemData } from '../../../interfaces/IShopItem';
import { ShopHttpService } from '../../../services/ShopHttpService';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CreateShopItemDialogComponent } from './create-shop-item-dialog/create-shop-item-dialog.component';

interface IAdminShopItem {
  position: number,
  model: IShopItem
}

@Component({
  selector: 'admin-shop-page-component',
  templateUrl: './admin-shop-page.component.html',
  styleUrls: ['./admin-shop-page.component.scss']
})
export class AdminShopPageComponent implements OnInit {

  public data!: MatTableDataSource<IAdminShopItem>;
  public displayedColumns = ['select', 'position', 'id', 'name', 'description', 'prize', 'createdAt', 'lastUpdate'];
  public selection = new SelectionModel<IAdminShopItem>(true, []);

  constructor(
    private shopHttpService: ShopHttpService,
    private dialog: MatDialog,
  ) { }

  public ngOnInit() {
    this.shopHttpService.getAllShopItems().pipe(
      map((shopItems: IShopItem[]) => shopItems.map((shopItem, index) => ({ position: index + 1, model: shopItem } as IAdminShopItem))
      )).subscribe(adminShopItems => {
        this.data = new MatTableDataSource<IAdminShopItem>(adminShopItems);
      });
  }

  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.data.length;
    return numSelected === numRows;
  }

  public toggleAll() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.data.data.forEach(row => this.selection.select(row));
  }

  public deleteShopItems() {
    const ids = this.selection.selected.map(adminShopItem => adminShopItem.model.id!);
    if (ids.length !== 0) {
      this.shopHttpService.deleteShopItems(ids).subscribe(res => {
        this.selection.selected.forEach(selectedItem => {
          this.data.data = this.data.data.splice(selectedItem.position + 1, 1);
        });
        this.selection.clear();
      });
    }
  }

  public openCreateShopItemDialog() {

    const dialogRef = this.dialog.open(CreateShopItemDialogComponent, {
      width: '600px',
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(data => {
      this.shopHttpService.createShopItem(data).subscribe(res => {
        console.log(res);
        this.data.data = this.data.data.concat({ position: this.data.data.length + 1, model: res });
      });
    });

  }
}
