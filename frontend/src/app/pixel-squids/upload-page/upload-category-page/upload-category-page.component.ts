import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { FileItem, FileUploader } from 'ng2-file-upload';
import { INSTRUMENT_TYPES } from '../../../shared/constants/instrumentTypes';
// import { TracksStoreService } from '../../../store/tracks-store/tracksStoreService';
// import { TracksService } from '../../../services/TracksService';
@Component({
    selector: 'upload-category-page-component',
    templateUrl: './upload-category-page.component.html',
    styleUrls: ['./upload-category-page.component.scss']
})
export class UploadCategoryPageComponent implements OnInit {
    
    public readonly UPLOAD_FROM_DISC = 'fromDisc';
    public readonly UPLOAD_FROM_RECORD = 'fromRecord';

    public readonly ACOUSTIC = INSTRUMENT_TYPES.ACOUSTIC;
    public readonly ELECTRIC = INSTRUMENT_TYPES.ELECTRIC;
    public readonly BASS = INSTRUMENT_TYPES.BASS;

    public uploadWay!: string;
    // public uploader: FileUploader = new FileUploader({ url: '' });

    // private instrumentType!: string;
    // @ViewChild('fileSelect') private fileSelect!: ElementRef;

    constructor(private route: ActivatedRoute) { }

    public ngOnInit() {
        this.uploadWay = this.route.snapshot.url[1].path;
        // this.uploader.onAfterAddingFile = (fileItem: FileItem) => this.handleAddingFile(fileItem);
    }

    // private handleAddingFile(fileItem: FileItem) {
    //     fileItem._file.arrayBuffer().then(buffer => {
    //         const array = new Uint8Array(buffer);
    //         const blob = new Blob([array]);
    //         this.tracksService.generateBase64Audio(blob).subscribe(res => {
    //             const track = {
    //                 name: fileItem._file.name,
    //                 fileType: fileItem._file.type,
    //                 soundtrack: res,
    //                 instrumentType: this.instrumentType,
    //                 // notes: 'notes',
    //             };
    //             this.tracksStoreService.createTrack(track);
    //         })

    //     })




    // }

    // public upload(instrumentType: string) {
    //     this.fileSelect.nativeElement.click();
    // }
}