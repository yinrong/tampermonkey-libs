_loading_tlibs = window._loading_tlibs || []
_loading_tlibs.push(['youdao-note', async () => {
    let $ = await tlib.loadJquery()

    await tlib.until(() => document.body)
    await tlib.until(() => $('.file-date').length > 0)
    tlib.repeat(() => {
        $('.file-date').remove()
        $('.main-container').css('top', '0')
        $('#flexible-left').css('width', '20px')
        $('#flexible-right').css('left', '20px')
        $('.file-item').css('padding', '0')
        $('.list-bd').css('width', '150px')
        $('.list').css('width', '150px')
        $('#flexible-list-right').css('left', '150px')
    })
    $('.icon-search').remove()
    tlib.appendCss(`
        .list .list-hd .input-search {
            margin: 0;
            padding: 0;
        }
        `)
    $('.top-banner').remove()
    $('.list-back').remove()
    $('.icon-setting').remove()
}])