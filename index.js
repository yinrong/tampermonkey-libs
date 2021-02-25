;(async () => {
    let $

    window.tlib = {
         sleep: (ms) => {
             return new Promise(resolve => setTimeout(resolve, ms))
         },
         until: async (cond) => {
             while (!cond()) {
                 await tlib.sleep(1000)
             }
         },
         loadJquery: async () => {
             var jq = document.createElement('script')
             jq.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js"
             document.body.appendChild(jq)
             await tlib.until(() => window.jQuery)
             $ = window.jQuery
             return window.jQuery
         },
         repeat: (func, interval=3000) => {
             setInterval(func, interval)
         },
         appendCss: (s) => {
             $('<style/>')
             .appendTo($('body'))
             .html(s)
         },
    }

})();
