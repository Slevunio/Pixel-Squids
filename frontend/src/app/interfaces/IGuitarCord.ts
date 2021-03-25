import { IGuitarSubCord } from './IGuitarSubCord';

export interface IGuitarCord {
    name: string;
    subcords: IGuitarSubCord[];
}