<template>
    <div>
        <h3>我是cpn的标题</h3>
        <p>{{name}}</p>
        <p>我是cpn的内容，哈哈哈</p>
    </div>
</template>

<script>
export default {
    name:'cpn',
    data(){
        return {
            name:'cpn的名字'
        }
    }
}
</script>