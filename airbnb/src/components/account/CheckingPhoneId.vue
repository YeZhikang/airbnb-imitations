<template>
    <div class="main-block">
        <div @click="handleBack" class="mt20">
            <svg viewBox="0 0 18 18" role="img" aria-label=" " focusable="false" style="height: 16px; width: 16px; display: block; fill: currentcolor;"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path></svg>
        </div>
        <h2 class="normal-font mt30">输入6位验证码</h2>
        <p class="light-font">已将验证码发送至 {{phoneNumber}}</p>
        <div class="mt20">
            <input
                class="identify-input"
                type="tel"
                maxlength="1"
                @focus="turnColor(index)"
                @blur="turnBackColor(index)"
                v-for="(number,index) of identifierNumber"
                :key="index"
                v-model="identifierNumber[index]"
                @input="activeBorder(index)"
            >
        </div>
        <div class="mt30">
            <loading-dashs v-if="inputArr.length === 6"/>
        </div>
    </div>
</template>

<script>
    import LoadingDashs from "../Loading/LoadingDashs";
    export default {
        name: "CheckingPhoneId",
        components: {LoadingDashs},
        props:{
            phoneNumber:String
        },
        data(){
            return{
                identifierNumber: new Array(6),
                inputBox: null,
                inputArr: []
            }
        },
        methods:{
            handleBack(){
                this.$emit('handleBack')
            },
            activeBorder(index){
                if(!this.inputArr.includes(index)){
                    // this.inputBox[index+1].classList.add('identify-input-active')
                    if(index !== 5){
                        this.inputBox[index+1].focus()
                    }
                    this.inputArr.push(index)
                    // this.inputBox[index].classList.remove('identify-input-active')
                }else{
                    // this.inputArr[index+1].classList.remove('identify-input-active')
                    // this.inputBox[index-1].classList.add('identify-input-active')
                    if(index !== 0){
                        this.inputBox[index-1].focus()
                    }
                    // this.inputBox[index].classList.remove('identify-input-active')
                    this.inputArr.splice(this.inputArr.indexOf(index),1)
                }
                console.log(this.inputArr)
            },
            turnColor(index){
                this.inputBox[index].classList.add('identify-input-active')
            },
            turnBackColor(index){
                this.inputBox[index].classList.remove('identify-input-active')
            }
        },
        mounted() {
            this.inputBox = document.getElementsByClassName('identify-input')
            this.inputBox[0].classList.add('identify-input-active')
            this.inputBox[0].focus()
        },
    }
</script>

<style scoped>
    .identify-input{
        -webkit-appearance: none;
        outline: none;
        border: 1px solid #e9e9e9;
        width: 35px;
        height: 43px;
        border-radius: 2px;
        margin-right: 6px;
        text-align: center;
        font-size: 18px;
        font-weight: 300;
        transition: 0.2s;
    }
    .identify-input-active{
        border-color: darkcyan;
    }
</style>
