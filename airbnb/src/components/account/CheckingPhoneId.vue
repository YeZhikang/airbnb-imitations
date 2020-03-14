<template>
    <div class="main-block">
        <div v-if="!isChecking">
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
        <div v-if="isChecking" class="menu" style="width: 88%;left: 6%;overflow-x: hidden">
            <div @click="handleBack" class="mt20">
                <svg viewBox="0 0 18 18" role="img" aria-label=" " focusable="false" style="height: 16px; width: 16px; display: block; fill: currentcolor;"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path></svg>
            </div>
            <h2 class="normal-font mt30">最后一步</h2>
            <p class="light-font">请输入注册邮箱和密码</p>
            <the-tips v-if="isCheckingError" class="mt20" type="danger" message="两次输入密码不一致，请再试一次"/>
            <div class="mt20">
                <input @focus="handleFocus(0)" v-model="user.email" type="text" class="standard-input light-font accound-text last-step-input" placeholder="邮箱地址/手机号码">
                <input @focus="handleFocus(1)" v-model="user.password" type="password" class="standard-input light-font accound-text mt10 last-step-input" placeholder="密码">
                <input @input="handleInput()" @focus="handleFocus(2)" v-model="checkingPassword" type="password" class="standard-input light-font accound-text mt10 last-step-input" placeholder="再次确认">
            </div>
            <div class="mt20">
                <button v-if="!isSubmit" @click="handleRegister()" class="normal-button mt25 normal-button-disabled">完成注册</button>
                <button v-if="isSubmit" class="normal-button mt25 normal-button-disabled"><loading-dashs type="white"/></button>
            </div>
        </div>
    </div>
</template>

<script>
    import LoadingDashs from "../Loading/LoadingDashs";
    import {userLogin} from "../../api/location";
    import {register} from "../../api/location";
    import TheTips from "../tips/TheTips";
    export default {
        name: "CheckingPhoneId",
        components: {TheTips, LoadingDashs},
        props:{
            phoneNumber:String
        },
        data(){
            return{
                isSubmit: false,
                identifierNumber: new Array(6),
                inputBox: null,
                inputArr: [],
                isChecking:false,
                checkingPassword: '',
                user:{
                    email: '',
                    phoneNumber: this.phoneNumber,
                    password: ''
                },
                isCheckingError:false
            }
        },
        methods:{
            handleFocus(index){
                const info = document.getElementsByClassName('accound-text')
                for(let i = 0;i<3;i++){
                    if(index === i){
                        info[i].style.borderColor = 'darkcyan'
                    }else{
                        info[i].style.borderColor = 'lightgray'
                    }
                }
            },
            handleBack(){
                this.$emit('handleBack')
            },
            handleInput(){
                const button = document.querySelector('.normal-button')
                button.style.opacity = '1'
            },
            userLogin(phoneNumber){
                userLogin({phoneNumber}).then(res => {
                    console.log(res)
                    if(res.code === 200){
                        if(res.isRegistered){
                            this.$router.go(-1)
                        }else{
                            this.isChecking = true
                            this.$nextTick(() => {
                                const menu = document.querySelector('.menu')
                                menu.style.height = window.innerHeight + 'px'
                            })
                        }
                    }else{
                        console.log('error')
                    }
                }).catch(error => console.log(error))
            },
            activeBorder(index){
                if(!this.inputArr.includes(index)){
                    // this.inputBox[index+1].classList.add('identify-input-active')
                    if(index !== 5){
                        this.inputBox[index+1].focus()
                    }
                    this.inputArr.push(index)
                    if(index === 5){
                        this.userLogin(this.phoneNumber)
                    }
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
            },
            handleRegister(){
                if(this.checkingPassword !== this.user.password){
                    this.isCheckingError = true
                    const info = document.getElementsByClassName('accound-text')
                    info[1].style.borderColor = 'rgba(255, 90, 95, 0.8)'
                    info[2].style.borderColor = 'rgba(255, 90, 95, 0.8)'
                }else{
                    this.isCheckingError = false
                    this.isSubmit = true
                    const button = document.querySelector('.normal-button')
                    button.style.opacity = '0.5'
                    register({...this.user}).then(res => {
                        console.log({...this.user})
                        console.log(res)
                    })
                }
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
    .last-step-input{
        height: 44px;padding-left: 16px;font-size: 18px;width:calc(100% - 20px)
    }
</style>
