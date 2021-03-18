import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IShopItem } from '../../../../interfaces/IShopItem';
import { FileUploader } from 'ng2-file-upload';
import { ShopHttpService } from '../../../../services/ShopHttpService';
import { IImage } from 'src/app/interfaces/IImage';

class ShopItem implements IShopItem {
    public data!: {
        name: string,
        description: string,
        prize: number
    }
    public Image!: File[] & IImage[];

    constructor() {
        this.data = {
            name: '',
            description: '',
            prize: 0
        },
            this.Image = [];
    }
}

@Component({
    selector: 'create-shop-item-dialog-component',
    templateUrl: './create-shop-item-dialog.component.html',
})
export class CreateShopItemDialogComponent implements OnInit {

    public shopItem!: IShopItem;
    public uploader: FileUploader = new FileUploader({ url: '' });
    public chosenFiles: File[] = [];

    constructor(
        public dialogRef: MatDialogRef<CreateShopItemDialogComponent>,
        private shopHttpService: ShopHttpService
    ) { }

    public ngOnInit() {
        this.shopItem = new ShopItem();
        this.uploader.onAfterAddingAll = this.handleAddingAll.bind(this);
    }
    private handleAddingAll() {

        this.uploader.queue.forEach(item => {
            this.shopItem.Image!.push(item._file);
            this.chosenFiles.push(item._file);
        });

    }

    cancel(): void {
        this.dialogRef.close(null);
    }

    save() {
        this.dialogRef.close(this.shopItem);
    }

    deleteFile(index: number) {
        this.uploader.queue.splice(index, 1);
        this.shopItem.Image!.splice(index, 1);
        this.chosenFiles.splice(index, 1);
    }
}
