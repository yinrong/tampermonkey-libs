_loading_tlibs = window._loading_tlibs || []
_loading_tlibs.push(['youdao-dict', async () => {
    let $ = await tlib.loadJquery()
    tlib.repeat(() => {
        `
        #topImgAd
        #ads
        #doc2
        #nav
        #footer
        #result_navigator
        .c-topbar
        #c_footer
        .c-logo
        `
            .split('\n')
            .map(e => e.trim())
            .filter(e => e.length > 0)
            .forEach(e => $(e).remove())
    }, 1000)
    tlib.appendCss(`
        #container {
            padding: 5px;
        }
        .c-header {
            width: unset;
            margin: 0;
        }
        .c-topbar-wrapper {
            height: usnet;
        }
        .c-topbar-wrapper {
            box-shadow: unset;
            height: unset;
            position: unset;
            top: unset;
            min-width: unset;
        }
        #scontainer {
            margin-top: unset;
            padding-top: unset;
        }
        #results {
            margin-top: 0;
        }
        .s-inpt-w {
            width: 400px;
        }
    `)
}])