<template>
    <div>
        <h2 class="title">{{msg}}</h2>
        <button @click="btnClick">按钮</button>
        <h3>{{name}}</h3>
        <cpn></cpn>
    </div>
</template>

<script>
import cpn from './cpn.vue'

export default {
    name:"mycpn",
    data() {
        return {
            msg: 'hello world',
            name: 'liu'
        }
    },
    components:{
        cpn
    },
    methods:{
        btnClick(){
            alert('略~')
        }
    }
}
</script>

<style scoped>
.title{
    color:blue;
}
</style>