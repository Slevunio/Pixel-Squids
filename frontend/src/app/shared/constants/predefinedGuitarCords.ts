import { IGuitarCord } from 'src/app/interfaces/IGuitarCord';

const baseGuitarSubcordsImagesPath = '/assets/guitar_cords';

export const PREDEFINED_GUITAR_CORDS: IGuitarCord[] = [
    {
        name: 'E',
        subcords: [
            {
                name: 'E',
                imagePath: `${baseGuitarSubcordsImagesPath}/E/E.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/E/1_E.wav`,
                order: 1
            },
            {
                name: 'Em',
                imagePath: `${baseGuitarSubcordsImagesPath}/E/Em.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/E/1_Em.wav`,
                order: 2
            },
            {
                name: 'E7',
                imagePath: `${baseGuitarSubcordsImagesPath}/E/E7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/E/1_E7.wav`,
                order: 3
            },
            {
                name: 'EMaj7',
                imagePath: `${baseGuitarSubcordsImagesPath}/E/EMaj7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/E/1_EMaj7.wav`,
                order: 4
            },
            {
                name: 'Em7',
                imagePath: `${baseGuitarSubcordsImagesPath}/E/Em7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/E/1_Em7.wav`,
                order: 5
            }
        ]
    },
    {
        name: 'A',
        subcords: [
            {
                name: 'A',
                imagePath: `${baseGuitarSubcordsImagesPath}/A/A.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/A/1_A.wav`,
                order: 1
            },
            {
                name: 'Am',
                imagePath: `${baseGuitarSubcordsImagesPath}/A/Am.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/A/1_Am.wav`,
                order: 2
            },
            {
                name: 'A7',
                imagePath: `${baseGuitarSubcordsImagesPath}/A/A7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/A/1_A7.wav`,
                order: 3
            },
            {
                name: 'AMaj7',
                imagePath: `${baseGuitarSubcordsImagesPath}/A/AMaj7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/A/1_AMaj7.wav`,
                order: 4
            },
            {
                name: 'Am7',
                imagePath: `${baseGuitarSubcordsImagesPath}/A/Am7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/A/1_Am7.wav`,
                order: 5
            }
        ]
    },
    {
        name: 'D',
        subcords: [
            {
                name: 'D',
                imagePath: `${baseGuitarSubcordsImagesPath}/D/D.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/D/1_D.wav`,
                order: 1
            },
            {
                name: 'Dm',
                imagePath: `${baseGuitarSubcordsImagesPath}/D/Dm.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/D/1_Dm.wav`,
                order: 2
            },
            {
                name: 'D7',
                imagePath: `${baseGuitarSubcordsImagesPath}/D/D7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/D/1_D7.wav`,
                order: 3
            },
            {
                name: 'DMaj7',
                imagePath: `${baseGuitarSubcordsImagesPath}/D/DMaj7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/D/1_DMaj7.wav`,
                order: 4
            },
            {
                name: 'Dm7',
                imagePath: `${baseGuitarSubcordsImagesPath}/D/Dm7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/D/1_Dm7.wav`,
                order: 5
            }
        ]
    },
    {
        name: 'C',
        subcords: [
            {
                name: 'C',
                imagePath: `${baseGuitarSubcordsImagesPath}/C/C.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/C/1_C.wav`,
                order: 1
            },
            {
                name: 'Cm',
                imagePath: `${baseGuitarSubcordsImagesPath}/C/Cm.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/C/1_Cm.wav`,
                order: 2
            },
            {
                name: 'C7',
                imagePath: `${baseGuitarSubcordsImagesPath}/C/C7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/C/1_C7.wav`,
                order: 3
            },
            {
                name: 'CMaj7',
                imagePath: `${baseGuitarSubcordsImagesPath}/C/CMaj7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/C/1_CMaj7.wav`,
                order: 4
            },
            {
                name: 'Cm7',
                imagePath: `${baseGuitarSubcordsImagesPath}/C/Cm7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/C/1_Cm7.wav`,
                order: 5
            }
        ]
    },
    {
        name: 'G',
        subcords: [
            {
                name: 'G',
                imagePath: `${baseGuitarSubcordsImagesPath}/G/G.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/G/1_G.wav`,
                order: 1
            },
            {
                name: 'Gm',
                imagePath: `${baseGuitarSubcordsImagesPath}/G/Gm.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/G/1_Gm.wav`,
                order: 2
            },
            {
                name: 'G7',
                imagePath: `${baseGuitarSubcordsImagesPath}/G/G7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/G/1_G7.wav`,
                order: 3
            },
            {
                name: 'GMaj7',
                imagePath: `${baseGuitarSubcordsImagesPath}/G/GMaj7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/G/1_GMaj7.wav`,
                order: 4
            },
            {
                name: 'Gm7',
                imagePath: `${baseGuitarSubcordsImagesPath}/G/Gm7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/G/1_Gm7.wav`,
                order: 5
            }
        ]
    },
    {
        name: 'F',
        subcords: [
            {
                name: 'F',
                imagePath: `${baseGuitarSubcordsImagesPath}/F/F.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/F/1_F.wav`,
                order: 1
            },
            {
                name: 'Fm',
                imagePath: `${baseGuitarSubcordsImagesPath}/F/Fm.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/F/1_Fm.wav`,
                order: 2
            },
            {
                name: 'F7',
                imagePath: `${baseGuitarSubcordsImagesPath}/F/F7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/F/1_F7.wav`,
                order: 3
            },
            {
                name: 'FMaj7',
                imagePath: `${baseGuitarSubcordsImagesPath}/F/FMaj7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/F/1_FMaj7.wav`,
                order: 4
            },
            {
                name: 'Fm7',
                imagePath: `${baseGuitarSubcordsImagesPath}/F/Fm7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/F/1_Fm7.wav`,
                order: 5
            }
        ]
    },
    {
        name: 'H',
        subcords: [
            {
                name: 'H',
                imagePath: `${baseGuitarSubcordsImagesPath}/H/H.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/H/1_H.wav`,
                order: 1
            },
            {
                name: 'Hm',
                imagePath: `${baseGuitarSubcordsImagesPath}/H/Hm.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/H/1_Hm.wav`,
                order: 2
            },
            {
                name: 'H7',
                imagePath: `${baseGuitarSubcordsImagesPath}/H/H7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/H/1_H7.wav`,
                order: 3
            },
            {
                name: 'HMaj7',
                imagePath: `${baseGuitarSubcordsImagesPath}/H/HMaj7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/H/1_HMaj7.wav`,
                order: 4
            },
            {
                name: 'Hm7',
                imagePath: `${baseGuitarSubcordsImagesPath}/H/Hm7.png`,
                soundtrackPath: `${baseGuitarSubcordsImagesPath}/H/1_Hm7.wav`,
                order: 5
            }
        ]
    }
    
]