import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class ImageService {

    public generateBase64Image(bufferArray: number[]): Observable<string> {
        const array = new Uint8Array(bufferArray);
        const blob = new Blob([array]);
        return new Observable<string>(subscriber => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);

            reader.onloadend = () => {
                let base64data = reader.result as string;
                const header = 'data:image/png;base64,';
                base64data = header + base64data.split(',')[1];
                subscriber.next(base64data);
                subscriber.complete();
            };
        });
    }
}