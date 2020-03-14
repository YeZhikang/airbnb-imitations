<template>
    <div style="display: flex;">
        <div class="dash"></div>
        <div class="dash"></div>
        <div class="dash"></div>
    </div>
</template>

<script>
    export default {
        name: "LoadingDashs",
        methods:{
            blink(){
                const dashes = document.getElementsByClassName('dash')
                for(let i = 0;i<3;i++){
                    setTimeout(() => {
                        dashes[i].classList.add('dash-blink')
                    },250*i)
                }
            }
        },
        mounted() {
            this.blink()
        }
    }
</script>

<style scoped>
    .dash{
        width: 10px;
        margin-right: 7px;
        height: 10px;
        border-radius: 50% 50%;
        background-color: rgb(0,139,139);
        transition: 2s;
    }

    .dash-blink{
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0% {opacity: 0.25}
        25% {opacity: 0.5}
        50% {opacity: 1}
        75% {opacity: 0.5}
        100% {opacity: 0.25}
    }
</style>
