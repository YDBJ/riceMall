<template>
    <div class="BackTop" v-show="isShow" @click="goTop">
       <slot>
            <img src="../assets/images/backtop.png">
       </slot>
    </div>
</template>

<script>
export default {
    props:{
        scrollTop:{
            type:Number,
            default: 800
        }
    },
    data(){
        return {
            // scrollTop:800, // 超过页面顶部800px就要隐藏
            isShow:false,
        }
    },
    methods:{
        scrollHandle(event){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log('scrollTop:',scrollTop)
            if(scrollTop >= this.scrollTop){
                this.isShow = true;
            }else {
                this.isShow = false;
            }
        },
        goTop(){
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        }
    },
    mounted() {
        // 绑定滚动事件
        document.addEventListener('scroll',this.scrollHandle)
    },
    destroyed() {
        // 解绑滚动事件
        document.removeEventListener('scroll',this.scrollHandle)
    },
}
</script>

<style lang="scss" scoped>
    .BackTop {
        position: fixed;
        right: 8px;
        bottom: 120px;
        width: 38px;
        height: 38px;

        img {
            width: 100%;
        }
    }
</style>