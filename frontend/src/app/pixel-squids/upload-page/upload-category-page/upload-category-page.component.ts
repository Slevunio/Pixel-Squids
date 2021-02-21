import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { TracksHttpService } from '../../../services/TracksHttpService';
import { INSTRUMENT_TYPES } from '../../../shared/constants/instrumentTypes';

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
    public uploader: FileUploader = new FileUploader({ url: '' });

    private instrumentType!: string;
    @ViewChild('fileSelect') private fileSelect!: ElementRef;

    constructor(private route: ActivatedRoute, private tracksHttpService: TracksHttpService) { }

    public ngOnInit() {
        this.uploadWay = this.route.snapshot.url[1].path;
        this.uploader.onAfterAddingFile = (fileItem: FileItem) => this.handleAddingFile(fileItem);
    }

    private handleAddingFile(fileItem: FileItem) {

        const track = {
            name: fileItem._file.name,
            soundtrack: fileItem._file,
            instrumentType: this.instrumentType,
            // notes: 'notes',
        };
        
        this.tracksHttpService.createTrack(track).subscribe();

    }

    public upload(instrumentType: string) {
        this.instrumentType = instrumentType;
        this.fileSelect.nativeElement.click();
    }
}