 enum route {
    DOWNLOAD = '/download',
    UPLOAD = '/upload',
    FROM_DISC = '/upload/fromDisc',
    FROM_RECORD = '/upload/fromRecord',
    CHOOSE_TAG_ACOUSTIC = '/upload/fromDisc/acoustic',
    CHOOSE_TAG_BASS = '/upload/fromDisc/bass',
    CHOOSE_TAG_ELECTRIC = '/upload/fromDisc/electric',
    LEARN = '/learn',
    SHOP = '/shop',
    CONTACT = '/contact',
    MAIN = '/main'
}
export const routeToHeaderMap: any = {
    [route.DOWNLOAD]: 'Download',
    [route.UPLOAD]: 'Upload',
    [route.FROM_DISC]: 'Wybierz kategorię',
    [route.FROM_RECORD]: 'Wybierz kategorię',
    [route.CHOOSE_TAG_ACOUSTIC]: 'Otaguj dodawany utwór',
    [route.CHOOSE_TAG_BASS]: 'Otaguj dodawany utwór',
    [route.CHOOSE_TAG_ELECTRIC]: 'Otaguj dodawany utwór',
    [route.LEARN]: 'Naucz się',
    [route.SHOP]: 'Sklep',
    [route.CONTACT]: 'Kontakt',
    [route.MAIN]: null
}