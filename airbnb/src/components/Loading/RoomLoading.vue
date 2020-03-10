<template>
    <div ref="loading" class='loading'>
        <div class="main-container">
            <div class="main-loading" >
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="loading-text"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RoomLoading",
        data(){
            return{

            }
        },
        created(){

        },
        mounted(){
            this.$refs.loading.style.width = window.innerWidth + 'px'
            this.$refs.loading.style.height = window.innerHeight + 'px'
            const mainContainer = document.querySelector('.main-container')

            for(let i = 1;i<3;i++){
                setTimeout(() => {
                    if(i === 2){
                        let text = document.querySelector('.loading-text')
                        text.textContent = "正在加载中"
                        text.classList.add('loading-text')
                        mainContainer.appendChild(text)
                    }
                },0)
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .loading{
        position: fixed;top: 0;left: 0;background-color: white;z-index:99;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    >>>.loading-text{
        font-size: 14px;
        margin-top: 15px;
        font-weight: 400;
        color: darkcyan;
        height: 18px;
        transition: 0.4s;
    }

    >>>.circle{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: darkcyan;
        transition: 0.5s;
        margin-left: 7px;
        margin-right: 7px;
        animation: tick 2s infinite;
    }

    >>>.circle:first-child{
        margin-left: 0;
    }
    >>>.circle:last-child{
        margin-right: 0;
    }

    @keyframes tick {
        0% {opacity: 0}
        50% {opacity: 1}
        100% {opacity: 0}
    }

    .main-loading{
        z-index: 1002;
        display: flex;
    }
</style>
