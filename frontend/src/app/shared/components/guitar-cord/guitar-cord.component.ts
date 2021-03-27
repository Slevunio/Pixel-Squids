import { Component, Input, OnInit } from "@angular/core";
import { take } from 'rxjs/operators';
import { IGuitarCord } from 'src/app/interfaces/IGuitarCord';
import { IGuitarSubCord } from 'src/app/interfaces/IGuitarSubCord';
import { GuitarCordsStoreService } from '../../../store/guitar-cords-store/guitarCordsStoreService';

interface IGuitarSubCordWrapper {
    guitarSubCord: IGuitarSubCord;
    audio: HTMLAudioElement;
    playPauseImageSrc: string;
    isPlaying: boolean;
}

class GuitarSubCordWrapper implements IGuitarSubCordWrapper {
    public guitarSubCord: IGuitarSubCord;
    public audio: HTMLAudioElement;
    public playPauseImageSrc: string;
    public isPlaying: boolean;
}

@Component({
    selector: 'guitar-cord-component',
    templateUrl: './guitar-cord.component.html',
    styleUrls: ['./guitar-cord.component.scss']
})
export class GuitarCordComponent implements OnInit {
    @Input() public guitarCord: IGuitarCord

    private imgSrcPlay: string = '/assets/play.png';
    private imgSrcPause: string = '/assets/pause.png';

    public guitarSubCords: IGuitarSubCordWrapper[] = [];

    constructor(private guitarCordsStore: GuitarCordsStoreService) { }
    public ngOnInit() {
        this.guitarCord.subcords.forEach(subCord => {
            this.guitarCordsStore.getSountrack(subCord).pipe(take(1)).subscribe(soundtrack => {
                let guitarSubCordWrapper = new GuitarSubCordWrapper();
                guitarSubCordWrapper.guitarSubCord = subCord;
                guitarSubCordWrapper.playPauseImageSrc = this.imgSrcPlay;
                guitarSubCordWrapper.audio = new Audio(soundtrack);
                guitarSubCordWrapper.audio.addEventListener('ended', () => { guitarSubCordWrapper.playPauseImageSrc = this.imgSrcPlay; guitarSubCordWrapper.isPlaying = false; });
                guitarSubCordWrapper.audio.addEventListener('play', () => { guitarSubCordWrapper.playPauseImageSrc = this.imgSrcPause; guitarSubCordWrapper.isPlaying = true; });
                guitarSubCordWrapper.audio.addEventListener('pause', () => { guitarSubCordWrapper.playPauseImageSrc = this.imgSrcPlay; guitarSubCordWrapper.isPlaying = false });
                this.guitarSubCords.push(guitarSubCordWrapper);
                this.guitarSubCords.sort((a,b) => a.guitarSubCord.order - b.guitarSubCord.order);
            });
        });
    }

    public toggle(index: number) {
        if (!this.guitarSubCords[index].isPlaying) {
            for(let i=0; i<this.guitarSubCords.length; i++) {
                if(i === index) {
                    continue;
                }
                this.guitarSubCords[i].audio.pause();
            }
            this.guitarSubCords[index].audio.play();
        } else {
            this.guitarSubCords[index].audio.pause();
        }
    }
}