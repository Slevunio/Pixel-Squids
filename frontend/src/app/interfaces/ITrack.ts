import { ISoundtrack } from './ISoundtrack';
export interface ITrack {
    id?: string;
    name?: string;
    soundtrack?: File | ISoundtrack; //will be Blob
    instrumentType?: string;
    // notes?: string; //will be Blob
    createdAt?: string;
    updatedAt?: string;
}
