import { ISoundtrack } from './ISoundtrack';
export interface ITrack {
    id?: string;
    name?: string;
    // soundtrack?: File | ISoundtrack; //will be Blob
    soundtrack?: string;
    instrumentType?: string;
    // notes?: string; //will be Blob
    createdAt?: string;
    updatedAt?: string;
    sountrackPath?: string;
}
