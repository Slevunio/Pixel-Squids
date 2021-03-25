import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGuitarCord } from 'src/app/interfaces/IGuitarCord';
import { IGuitarSubCord } from 'src/app/interfaces/IGuitarSubCord';
import { PREDEFINED_GUITAR_CORDS } from '../../shared/constants/predefinedGuitarCords';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { TracksService } from '../../services/TracksService';

@Injectable()
export class GuitarCordsStoreService {
    private guitarCords: IGuitarCord[];

    constructor(private httpClient: HttpClient, private tracksService: TracksService) {
        this.guitarCords = PREDEFINED_GUITAR_CORDS;
    }

    public getGuitarCords() {
        return this.guitarCords;
    }

    public getSountrack(guitarSubCord: IGuitarSubCord): Observable<string> {
            return this.httpClient.get(guitarSubCord.soundtrackPath, { responseType: "arraybuffer" }).pipe(
                map(sountrack => {
                    const array = new Uint8Array(sountrack);
                    const blob = new Blob([array]);
                    return blob;
                }),
                switchMap(soundtrack => this.tracksService.generateBase64Audio(soundtrack))
            );
    }
}