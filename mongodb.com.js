_loading_tlibs = window._loading_tlibs || []
_loading_tlibs.push(['mongodb.com', async () => {
    tlib.appendCss(`
    div.highlight pre, table.docutils div.admonition div.button-row, table.docutils div.admonition div.highlight pre, .button-row {
        background-image: unset;
        background: unset;
        background-color: #333;
    }
    `)
}])
