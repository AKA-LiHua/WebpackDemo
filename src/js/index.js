//commonjs导入
const {
    mul,
    sum
} = require('./mathUtils.js')

console.log(mul(2, 3))

console.log(sum(20, 30))

require('../css/normal.css')
require('../css/special.less')

document.writeln("hello LiHua")

//使用vue进行开发
import Vue from 'vue'

/* vue 配置方法 4*/
import mycpn from './mycpn.vue'
new Vue({
    el: '#app',
    template: '<mycpn/>',
    components: {
        mycpn
    }
})


/* vue 配置方法 3 */
// import cpn from './cpn';
// new Vue({
//     el: '#app',
//     template: '<cpn></cpn>',
//     components: {
//         cpn
//     }
// })

/* vue 配置方法 2 */
// var cpn = {
//     template: `
//     <div>
//         <h2>{{msg}}</h2>
//         <h3>{{name}}</h3>
//     </div>
//     `,
//     data() {
//         return {
//             msg: 'hello world',
//             name: 'liu'
//         }
//     }
// }
// new Vue({
//     el: '#app',
//     template: '<cpn></cpn>',
//     components: {
//         cpn
//     }
// })

/* vue 配置方法 1 */
// new Vue({
//     el: '#app',
//     template: `
//     <div>
//         <h2>{{msg}}</h2>
//         <h3>{{name}}</h3>
//     </div>`,
//     data: {
//         msg: 'hello world',
//         name: 'liu'
//     }
// })