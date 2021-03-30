import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TRACK_TAGS } from '../../../shared/constants/trackTags';
import { INSTRUMENT_TYPES } from '../../../shared/constants/instrumentTypes';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { ActivatedRoute } from '@angular/router';
import { TracksStoreService } from 'src/app/store/tracks-store/tracksStoreService';
import { TracksService } from 'src/app/services/TracksService';

@Component({
    selector: 'upload-choose-tag-page-component',
    templateUrl: './upload-choose-tag-page.component.html',
    styleUrls: ['./upload-choose-tag-page.component.scss']
})
export class UploadChooseTagPageComponent implements OnInit {

    public tagToRouteMap = {
        [TRACK_TAGS.ROCK] : 'rock',
        [TRACK_TAGS.BLUES] : 'blues',
        [TRACK_TAGS.METAL] : 'metal',
        [TRACK_TAGS.FUNK] : 'funk',
        [TRACK_TAGS.REGGAE] : 'reggae',
    }

    public readonly UPLOAD_FROM_DISC = 'fromDisc';
    public readonly UPLOAD_FROM_RECORD = 'fromRecord';

    public readonly ACOUSTIC = INSTRUMENT_TYPES.ACOUSTIC;
    public readonly ELECTRIC = INSTRUMENT_TYPES.ELECTRIC;
    public readonly BASS = INSTRUMENT_TYPES.BASS;

    public tags: string[];
    public chosenTag: string;
    public uploadWay: string;
    private instrumentType: string;
    public uploader: FileUploader = new FileUploader({ url: '' });
    @ViewChild('fileSelect') private fileSelect!: ElementRef;
    
    constructor(private route: ActivatedRoute,  private tracksStoreService: TracksStoreService, private tracksService: TracksService) { }

    public ngOnInit() {
        this.uploadWay = this.route.snapshot.url[1].path;
        this.instrumentType = this.route.snapshot.url[2].path.toUpperCase();
        this.uploader.onAfterAddingFile = (fileItem: FileItem) => this.handleAddingFile(fileItem);
        this.tags = Object.values(TRACK_TAGS).map(value => value);
        this.chosenTag = this.tags[0];
    }

    public chooseTag(tag: string) {
        this.chosenTag = tag;
    }

    private handleAddingFile(fileItem: FileItem) {
        fileItem._file.arrayBuffer().then(buffer => {
            const array = new Uint8Array(buffer);
            const blob = new Blob([array]);
            this.tracksService.generateBase64Audio(blob).subscribe(res => {
                const track = {
                    name: fileItem._file.name,
                    fileType: fileItem._file.type,
                    soundtrack: res,
                    instrumentType: this.instrumentType,
                    tag: this.chosenTag
                    // notes: 'notes',
                };
                this.tracksStoreService.createTrack(track);
            })

        });
    }

    public upload() {
        this.fileSelect.nativeElement.click();
    }
}