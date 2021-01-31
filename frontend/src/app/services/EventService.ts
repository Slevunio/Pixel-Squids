import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EventService {

    public mainPageClicked$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public click() {
        this.mainPageClicked$.next(true);
    }
}