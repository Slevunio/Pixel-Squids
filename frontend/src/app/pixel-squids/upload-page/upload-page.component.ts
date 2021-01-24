import { Component, OnInit } from '@angular/core';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { take, tap } from 'rxjs/operators';
import { TracksHttpService } from '../../services/TracksHttpService';
import { TracksService } from '../../services/TracksService';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
    selector: 'upload-page-component',
    templateUrl: './upload-page.component.html',
    styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {

    public uploader: FileUploader = new FileUploader({ url: '' });
    public src: any;

    constructor(private tracksHttpService: TracksHttpService, private tracksService: TracksService, private domSanitizer: DomSanitizer) { }

    public ngOnInit() {
        this.uploader.onAfterAddingFile = (fileItem: FileItem) => this.handleAddingFile(fileItem)
    }

    private handleAddingFile(fileItem: FileItem) {

        const track = {
            name: fileItem._file.name,
            soundtrack: fileItem._file,
            instrumentType: 'ACOUSTIC',
            // notes: 'notes',
        };
        
        this.tracksHttpService.createTrack(track).subscribe();

    }
}