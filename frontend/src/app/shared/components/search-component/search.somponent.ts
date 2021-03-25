import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ITrack } from 'src/app/interfaces/ITrack';
import { FormControl } from '@angular/forms';
import { TRACK_TAGS } from '../../constants/trackTags';
// import { ITag } from '../../interfaces/ITag';

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    @Input() public tracks: ITrack[];
    @Output() public tag = new EventEmitter<string>();

    public searchInput = new FormControl('');
    public filteredTracks: ITrack[];
    public tags: string[];
    public chosenTag: string;
    public isFocused: boolean;


    public ngOnInit() {
        this.tags = Object.values(TRACK_TAGS).map(value => value);
        this.filteredTracks = this.tracks;
        this.searchInput.valueChanges.subscribe(val => {
            this.filteredTracks = this.tracks.filter(track => track.name.startsWith(val) && (!!this.chosenTag ? track.tag === this.chosenTag : true));
        });
    }

    public chooseTag(tag: string) {
        if (tag === this.chosenTag) {
            this.chosenTag = null;
            this.filteredTracks = this.tracks;
            this.tag.emit(this.chosenTag);
            return;
        }
        this.chosenTag = tag;
        this.filteredTracks = this.tracks.filter(track => track.tag === tag);
        this.tag.emit(this.chosenTag);
    }

    public onFocusEvent(event: any) {
        if (event.type === 'focus') {
            this.isFocused = true;
        } else {
            if (!!event.relatedTarget) {
                if (!!event.relatedTarget.classList.contains('list-item')) { event.stopPropagation(); return; }
                else { this.isFocused = false; }
            } else {
                this.isFocused = false;
            }

        }
    }
}