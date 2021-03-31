 enum route {
    DOWNLOAD = '/download',
    UPLOAD = '/upload',
    FROM_DISC = '/upload/fromDisc',
    FROM_RECORD = '/upload/fromRecord',
    FROM_DISC_CHOOSE_TAG_ACOUSTIC = '/upload/fromDisc/acoustic',
    FROM_DISC_CHOOSE_TAG_BASS = '/upload/fromDisc/bass',
    FROM_DISC_CHOOSE_TAG_ELECTRIC = '/upload/fromDisc/electric',
    FROM_RECORD_CHOOSE_TAG_ACOUSTIC = '/upload/fromRecord/acoustic',
    FROM_RECORD_CHOOSE_TAG_BASS = '/upload/fromRecord/bass',
    FROM_RECORD_CHOOSE_TAG_ELECTRIC = '/upload/fromRecord/electric',
    LEARN = '/learn',
    SHOP = '/shop',
    CONTACT = '/contact',
    MAIN = '/main'
}
export const routeToHeaderMap: any = {
    [route.DOWNLOAD]: 'Wybierz kategorię',
    // [route.UPLOAD]: 'Upload',
    [route.FROM_DISC]: 'Wybierz kategorię',
    [route.FROM_RECORD]: 'Wybierz kategorię',
    [route.FROM_DISC_CHOOSE_TAG_ACOUSTIC]: 'Otaguj dodawany utwór',
    [route.FROM_DISC_CHOOSE_TAG_BASS]: 'Otaguj dodawany utwór',
    [route.FROM_DISC_CHOOSE_TAG_ELECTRIC]: 'Otaguj dodawany utwór',
    [route.FROM_RECORD_CHOOSE_TAG_ACOUSTIC]: 'Otaguj dodawany utwór',
    [route.FROM_RECORD_CHOOSE_TAG_BASS]: 'Otaguj dodawany utwór',
    [route.FROM_RECORD_CHOOSE_TAG_ELECTRIC]: 'Otaguj dodawany utwór',
    // [route.LEARN]: 'Naucz się',
    // [route.SHOP]: 'Sklep',
    // [route.CONTACT]: 'Kontakt',
    // [route.MAIN]: null
}