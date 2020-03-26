export default {    
    template: `
    <div>
        <h2>{{msg}}</h2>
        <button @click="btnClick">按钮</button>
        <h3>{{name}}</h3>
    </div>
    `,
    data() {
        return {
            msg: 'hello world',
            name: 'liu'
        }
    },
    methods:{
        btnClick(){
            alert('略~')
        }
    }
}