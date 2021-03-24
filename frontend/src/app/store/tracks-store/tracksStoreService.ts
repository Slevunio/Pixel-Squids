import { Injectable } from "@angular/core";
import { ITrack } from 'src/app/interfaces/ITrack';
import { PREDEFINED_TRACKS } from '../../shared/constants/predefinedTracks';
import { HttpClient } from '@angular/common/http';
import { TracksService } from '../../services/TracksService';
import { v4 as uuid } from 'uuid';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class TracksStoreService {
    private tracks: ITrack[];

    constructor(private httpClient: HttpClient, private tracksService: TracksService) {
        this.tracks = this.getAllTracks();

    }

    public getAllTracks(): ITrack[] {
        const localStorageTracks = Object.keys(localStorage).map(key => localStorage.getItem(key)).map(track => JSON.parse(track));
        return PREDEFINED_TRACKS.concat(localStorageTracks);
    }

    public getTracksByInstrumentType(instrumentType: string): ITrack[] {
        return this.tracks.filter(track => track.instrumentType === instrumentType);
    }

    public getTrackById(id: string): ITrack {
        return this.tracks.find(track => track.id === id);
    }

    public getSountrack(track: ITrack): Observable<string> {
        if (!!track.sountrackPath) {
            return this.httpClient.get(track.sountrackPath, { responseType: "arraybuffer" }).pipe(
                map(sountrack => {
                    const array = new Uint8Array(sountrack);
                    const blob = new Blob([array]);
                    return blob;
                }),
                switchMap(soundtrack => this.tracksService.generateBase64Audio(soundtrack))
            );
        } else {
            return of(track.soundtrack);
        }
    }

    public createTrack(track: ITrack): ITrack {
        track.id = uuid();
        const trackToString = JSON.stringify(track);
        localStorage.setItem(track.id, trackToString);
        this.tracks.push(track);
        return track;
    }
}