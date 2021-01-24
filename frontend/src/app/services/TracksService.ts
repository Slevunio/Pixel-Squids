import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class TracksService {

    public generateBase64Audio(blob: Blob): Observable<string> {
        return new Observable<string>(subscriber => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);

            reader.onloadend = () => {
                let base64data = reader.result as string;
                const header = 'data:audio/mpeg;base64,';
                base64data = header + base64data.split(',')[1];
                subscriber.next(base64data);
                subscriber.complete();
            };
        });
    }
}