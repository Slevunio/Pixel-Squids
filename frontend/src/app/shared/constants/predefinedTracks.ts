import { ITrack } from '../../interfaces/ITrack';
import { INSTRUMENT_TYPES } from './instrumentTypes';
import { TRACK_TAGS } from './trackTags';

const baseAcousticTracksPath = 'assets/tracks/acoustic';
const baseBassTracksPath = 'assets/tracks/bass';
const baseElectricTracksPath = 'assets/tracks/electric';

export const PREDEFINED_TRACKS: ITrack[] = [
    {
        id: '874f5e43-fba5-431b-a3b7-04a01be855fc',
        name: 'utwor_1.wav',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ACOUSTIC,
        sountrackPath: `${baseAcousticTracksPath}/utwor_1.wav`,
        notesPath: `${baseAcousticTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.FUNK
    },
    {
        id: '4ec29396-f3e0-4cd2-a075-34bae558ab4a',
        name: 'utwor_2.wav',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ACOUSTIC,
        sountrackPath: `${baseAcousticTracksPath}/utwor_2.wav`,
        notesPath: `${baseAcousticTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.BLUES
    },
    {
        id: '82fce6bc-9dcc-49d3-bee6-79c63493681c',
        name: 'utwor_3.wav',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ACOUSTIC,
        sountrackPath: `${baseAcousticTracksPath}/utwor_3.wav`,
        notesPath: `${baseAcousticTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.METAL
    },
    {
        id: '9618eb50-52f1-4a99-a2fd-151a0e5216ef',
        name: 'utwor_4.wav',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ACOUSTIC,
        sountrackPath: `${baseAcousticTracksPath}/utwor_4.wav`,
        notesPath: `${baseAcousticTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.REGGAE
    },
    {
        id: '2c7ab913-3875-48dc-8d8f-205e0ae2f182',
        name: 'utwor_5.wav',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ACOUSTIC,
        sountrackPath: `${baseAcousticTracksPath}/utwor_5.wav`,
        notesPath: `${baseAcousticTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.ROCK
    },
    {
        id: '1c02d869-9cca-481f-82ee-dd85d79816d9',
        name: 'utwor_1.wav',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.BASS,
        sountrackPath: `${baseBassTracksPath}/utwor_1.wav`,
        notesPath: `${baseBassTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.FUNK
    },
    {
        id: '1eb97b5d-1ecc-42b3-9c7f-e1b77ecee4ac',
        name: 'utwor_2.wav',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.BASS,
        sountrackPath: `${baseBassTracksPath}/utwor_2.wav`,
        notesPath: `${baseBassTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.BLUES
    },
    {
        id: '6b344a21-a3f9-407b-acd7-1bdc8d41b76f',
        name: 'utwor_3.wav',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.BASS,
        sountrackPath: `${baseBassTracksPath}/utwor_3.wav`,
        notesPath: `${baseBassTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.METAL
    },
    {
        id: '1d87ad6e-5ed9-4ff4-9907-8e71e6410606',
        name: 'utwor_4.wav',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.BASS,
        sountrackPath: `${baseBassTracksPath}/utwor_4.wav`,
        notesPath: `${baseBassTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.REGGAE
    },
    {
        id: 'cc3765ea-686d-4515-bc37-1308bdf75320',
        name: 'utwor_5.wav',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.BASS,
        sountrackPath: `${baseBassTracksPath}/utwor_5.wav`,
        notesPath: `${baseBassTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.ROCK
    },




/** ELEKTRYK BLUES */

    {
        id: '0b152d83-72eb-4d48-b19e-09d795b389c7',
        name: 'utwor_1',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/blues/1_elektrykblues1.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.BLUES
    },
    {
        id: '025b65d1-b6d6-4828-9bbb-fe2de93b971b',
        name: 'utwor_2',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/blues/1_elektrykblues2.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.BLUES
    },
    {
        id: '65a42d37-48bc-4ddc-8aa8-485cb96f92ca',
        name: 'utwor_3',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/blues/1_elektrykblues3.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.BLUES
    },
    {
        id: 'f0d2abe2-6d3b-4f16-8138-0045f05d9d69',
        name: 'utwor_4',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/blues/1_elektrykblues4.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.BLUES
    },
    {
        id: '4bbc2efe-9976-4781-b95b-d024c76be35a',
        name: 'utwor_5',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/blues/1_elektrykblues5.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.BLUES
    },
    {
        id: 'f18b011d-7577-40b1-86be-73c3f33f891b',
        name: 'utwor_6',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/blues/1_elektrykblues6.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.BLUES
    },

    /** ELEKTRYK METAL */
    {
        id: '1f35e5fe-9e6c-4e2e-9099-cd98ffaa6ea9',
        name: 'utwor_7',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/metal/1wav_elektrykmetal1.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.METAL
    },
    {
        id: 'a94341a4-af68-4260-be53-b1a61a6ea89c',
        name: 'utwor_8',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/metal/1wav_elektrykmetal2.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.METAL
    },
    {
        id: '660252f0-1be2-48e5-9568-742139d133d6',
        name: 'utwor_9',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/metal/1wav_elektrykmetal3.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.METAL
    },
    {
        id: 'b684af48-0ae1-4d7a-b92f-5765d74d579f',
        name: 'utwor_10',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/metal/1wav_elektrykmetal4.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.METAL
    },
    {
        id: '1a0ca7f0-812a-4fd0-ba4b-3db928b1a82e',
        name: 'utwor_11',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/metal/1wav_elektrykmetal5.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.METAL
    },
    {
        id: '73aab73a-cd14-461d-8d35-f8445cc08b56',
        name: 'utwor_12',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/metal/1wav_elektrykmetal6.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.METAL
    },

    /** ELEKTRYK ROCK */

    {
        id: 'c91362ee-7037-4179-955b-103820c8dbd5',
        name: 'utwor_13',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/rock/1_elektrykrock1.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.ROCK
    },
    {
        id: 'd77ce203-19f0-411a-a186-64797b0845a4',
        name: 'utwor_14',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/rock/1_elektrykrock2.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.ROCK
    },
    {
        id: '39c0e96b-96f5-486e-9c9d-722141c32e3d',
        name: 'utwor_15',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/rock/1_elektrykrock3.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.ROCK
    },
    {
        id: '6be3edbc-a985-450b-b648-39377fa837d1',
        name: 'utwor_16',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/rock/1_elektrykrock4.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.ROCK
    },
    {
        id: 'b0635281-e1bd-4713-bc7d-6b1015c2f1f1',
        name: 'utwor_17',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/rock/1_elektrykrock5.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.ROCK
    },
    {
        id: 'b0635281-e1bd-4713-bc7d-6b1015c2f1f1',
        name: 'utwor_18',
        soundtrack: null,
        instrumentType: INSTRUMENT_TYPES.ELECTRIC,
        sountrackPath: `${baseElectricTracksPath}/rock/1_elektrykrock6.wav`,
        notesPath: `${baseElectricTracksPath}/tabulatura1.png`,
        tag: TRACK_TAGS.ROCK
    }

]