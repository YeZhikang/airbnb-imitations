<template>
    <div :class="{isFull:full,'error-tips': typeClass[0],tips: isTips}">
        {{message}}
    </div>
</template>

<script>
    export default {
        name: "TheTips",
        data(){
            return{
                isTips: true
            }
        },
        props:{
            full: {
                type: Boolean,
                default: true
            },
            type: String,
            message: String
        },
        computed:{
            typeClass(){
                if(this.type === 'error'){
                    return [true,false,false,false]
                }
                return [true,true]
            }
        }
    }
</script>

<style scoped>
    .isFull{
        display: block;
    }

    .error-tips{
        background-color: rgba(255, 90, 95, 0.21);
        color: rgb(255, 49, 27);
    }
    .tips{
        padding: 6px 10px;
        border-radius: 6px;
        box-shadow: 0 0 10px lightgrey;
        font-size: 12px;
    }
</style>
