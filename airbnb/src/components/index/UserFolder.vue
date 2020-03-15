<template>
    <div @click="handleClick" class="menu2" style="position: fixed;display: flex;justify-content:flex-end;top: 0;left: 0">
        <div style="width: 70%;height: 100%;background-color: white"></div>
    </div>
</template>

<script>
    export default {
        name: "UserFolder",
        data(){
            return{
                menu: null
            }
        },
        mounted() {
            const menu = document.querySelector('.menu2')
            this.menu = menu
            menu.style.width = window.innerWidth + 'px'
            menu.style.height = window.innerHeight + 'px'
        },
        methods:{
            handleClick(e){
                if(e.layerX <= window.innerWidth*0.3){
                    this.menu.style.display = 'none'
                }
            }
        },

    }
</script>

<style scoped>
    .menu2{

    }
    .menu2{
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.3s;
        z-index: 666;
        overflow-y: scroll;
        animation: collpased 0.3s ;
        background-color: transparent;
        animation-fill-mode: forwards;
    }
    @keyframes collpased {
        from {background-color: transparent;}
        to {background-color: rgba(111,111,111,0.5)}
    }
</style>
