// window.onload = function() {
//     var div1 = document.getElementById('div1')
//     var fa = document.getElementById('fa')

//     div1.onmousemove = function(event) {
//         var evt = event || window.event
//         var x = evt.pageX - div1.offsetLeft - (fa.offsetWidth / 2)
//         var y = evt.pageY - div1.offsetTop - (fa.offsetHeight / 2)

//         //利用两个if对鼠标的水平位置、垂直位置做限制。
//         if (x < 0) {
//             x = 0
//         } else if (x >= div1.offsetWidth - fa.offsetWidth) {
//             x = div1.offsetWidth - fa.offsetWidth - 2
//         }
//         if (y < 0) {
//             y = 0
//         } else if (y >= div1.offsetHeight - fa.offsetHeight) {
//             y = div1.offsetHeight - fa.offsetHeight - 2
//         }
//         fa.style.top = y + 'px'
//         fa.style.left = x + 'px'
//     }
// }