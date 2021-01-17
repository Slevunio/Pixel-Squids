import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITrack } from '../interfaces/ITrack';
import { HttpClient } from '@angular/common/http';
import { INSTRUMENT_TYPES } from '../shared/constants/instrumentTypes';
@Injectable()
export class TracksHttpService {

    private baseDevUrl = 'http://localhost:3200/api';

    constructor(private http: HttpClient) { }
    public getAcoustics(): Observable<ITrack[]> {
        return this.http.get<ITrack[]>(`${this.baseDevUrl}/tracks`).pipe(
            map(res => res.filter(track => track.instrumentType === INSTRUMENT_TYPES.ACOUSTIC))
        );
    }
}