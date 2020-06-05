// (function () {
//   function loadJS (url, success) {
//     var domScript = document.createElement('script')
//     domScript.src = url
//     domScript.onload = domScript.onreadystatechange = function () {
//       if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
//         success && success()
//         this.onload = this.onreadystatechange = null
//         this.parentNode.removeChild(this)
//       }
//     }
//     document.getElementsByTagName('head')[0].appendChild(domScript)
//   }
//
//   loadJS('https://static001.geekbang.org/static/js/manifest.01402af281e26767732e.js', function () {
//     loadJS('https://static001.geekbang.org/static/js/vendor.8981c62585346eba358c.js', function () {
//       loadJS('https://static001.geekbang.org/static/js/app.e1370b5ccaada69a9bd3.js')
//     })
//   })
// })()
//
