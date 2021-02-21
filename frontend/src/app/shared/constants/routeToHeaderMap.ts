 enum route {
    DOWNLOAD = '/download',
    UPLOAD = '/upload',
    FROM_DISC = '/upload/fromDisc',
    FROM_RECORD = '/upload/fromRecord',
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
    [route.LEARN]: 'Naucz się',
    [route.SHOP]: 'Sklep',
    [route.CONTACT]: 'Kontakt',
    [route.MAIN]: null
}