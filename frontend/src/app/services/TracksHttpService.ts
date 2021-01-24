import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ITrack } from '../interfaces/ITrack';
import { HttpClient } from '@angular/common/http';
import { INSTRUMENT_TYPES } from '../shared/constants/instrumentTypes';
@Injectable()
export class TracksHttpService {

    private baseDevUrl = 'http://localhost:3200/api';

    constructor(private http: HttpClient) { }

    public getTracks(instrumentType?: string): Observable<ITrack[]> {
        return this.http.get<ITrack[]>(`${this.baseDevUrl}/tracks`).pipe(
            map(res => !!instrumentType ? res.filter((track: ITrack) => track.instrumentType === INSTRUMENT_TYPES.ACOUSTIC) : res)
        );
    }

    public createTrack(track: ITrack): Observable<ITrack> {
        const formdata: FormData = new FormData();
        formdata.append('file', track.soundtrack as Blob);
        formdata.append('instrumentType', track.instrumentType as string);
        formdata.append('name', track.name as string);


        return this.http.post<ITrack>(`${this.baseDevUrl}/tracks`, formdata).pipe(
            catchError(error => {
                console.error(error);
                return of(error);
            })
        );
    }
}