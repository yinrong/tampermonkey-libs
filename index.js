; (async () => {
    console.log('load tlib.index')

    let $

    window.tlib = {
        _mods: {},
        sleep: (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms))
        },
        until: async (cond) => {
            while (!cond()) {
                await tlib.sleep(1000)
            }
        },
        loadJquery: async () => {
            $ = await tlib.loadScript(
                "https://code.jquery.com/jquery-3.5.1.slim.min.js",
                () => window.jQuery
            )
            return $
        },
        loadScript: async (url, returnValueEval) => {
            var s = document.createElement('script')
            s.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js"
            document.body.appendChild(s)
            await tlib.until(returnValueEval)
            return returnValueEval()
        },
        loadLib: async (path) => {
            return loadScript(
                'https://raw.githubusercontent.com/yinrong/tampermonkey-libs/master/' + path,
                () => tlib._mods[path])
                
        },
        repeat: (func) => {
            repeat_list.push(func)
        },
        appendCss: (s) => {
            $('<style/>')
                .appendTo($('body'))
                .html(s)
        },
    }

    let repeat_list = []
    let repeater_on = false
    function repeater () {
        for (let f of repeat_list) {
            f()
            console.log('repeating', new Date())
        }
        if (new Date() - last_event_ts < 1000 * 5) {
            setTimeout(repeater, 1000)
        } else {
            repeater_on = false
        }
    }
    function initRepeater () {
        if (repeater_on) {
            return
        }
        repeater_on = true
        repeater()
    }

    let last_event_ts = +new Date()
    function onUserActive () {
        last_event_ts = +new Date()
        initRepeater()
    }

    document.onload = onUserActive
    document.onmousemove = onUserActive
    document.onmousedown = onUserActive // touchscreen presses
    document.ontouchstart = onUserActive
    document.onclick = onUserActive     // touchpad clicks
    document.onkeydown = onUserActive   // onkeypress is deprectaed
    document.addEventListener('scroll', onUserActive, true) // improved see comments

    setInterval(() => {
        if (!window._loading_tlibs || window._loading_tlibs.length === 0) {
            return
        }
        let func = window._loading_tlibs.pop()
        console.log('load tlib:', func[0])
        func[1]()
    }, 1000)

})();
