import { IShopItem } from 'src/app/interfaces/IShopItem';

const baseShopItemImagesPath = '../../../assets/shop';

export const PREDEFINED_SHOP_ITEMS: IShopItem[] = [
    {
        id: 'd3cc0724-0fc4-4d28-8b1f-88a5c68e8355',
        name: 'Bandana',
        description: '',
        prize: 12,
        imagesPaths: [
            `${baseShopItemImagesPath}/bandana/bandana1.png`,
            `${baseShopItemImagesPath}/bandana/bandana2.png`,
            `${baseShopItemImagesPath}/bandana/bandana3.png`,
            `${baseShopItemImagesPath}/bandana/bandana4.png`,
            `${baseShopItemImagesPath}/bandana/bandana5.png`,
            `${baseShopItemImagesPath}/bandana/bandana6.png`,
        ]
    },
    {
        id: 'fb195818-028c-4e90-9962-92bf503758c3',
        name: 'Torba',
        description: '',
        prize: 20,
        imagesPaths: [
            `${baseShopItemImagesPath}/bag/torba1.png`,
            `${baseShopItemImagesPath}/bag/torba2.png`,
            `${baseShopItemImagesPath}/bag/torba3.png`,
            `${baseShopItemImagesPath}/bag/torba4.png`,
            `${baseShopItemImagesPath}/bag/torba5.png`,
            `${baseShopItemImagesPath}/bag/torba6.png`,
        ]
    },
    {
        id: '4dccf1e0-86ba-4ff7-8f50-bb6d92938b78',
        name: 'Kostka do gitary',
        description: '0,73mm',
        prize: 25,
        imagesPaths: [
            `${baseShopItemImagesPath}/guitar-pick/kostka1.png`,
            `${baseShopItemImagesPath}/guitar-pick/kostka2.png`,
            `${baseShopItemImagesPath}/guitar-pick/kostka3.png`,
            `${baseShopItemImagesPath}/guitar-pick/kostka4.png`,
        ]
    },
    {
        id: '78a64750-3971-4759-af3e-952d9ace9e33',
        name: 'Pickguard',
        description: '',
        prize: 40,
        imagesPaths: [
            `${baseShopItemImagesPath}/pickguard/pick1.png`,
            `${baseShopItemImagesPath}/pickguard/pick2.png`,
            `${baseShopItemImagesPath}/pickguard/pick3.png`,
            `${baseShopItemImagesPath}/pickguard/pick4.png`,
            `${baseShopItemImagesPath}/pickguard/pick5.png`,
            `${baseShopItemImagesPath}/pickguard/pick6.png`,
        ]
    }
] 