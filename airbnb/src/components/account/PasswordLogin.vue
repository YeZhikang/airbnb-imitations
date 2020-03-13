<template>
    <div class="main-block">
        <div @click="handleBackClick()" class="mt20">
            <svg viewBox="0 0 18 18" role="img" aria-label=" " focusable="false" style="height: 16px; width: 16px; display: block; fill: currentcolor;"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path></svg>
        </div>
        <h2 class="normal-font mt30">账号密码登录</h2>
        <div style="margin-top: 30px;width: 100%">
            <input type="text" style="height: 44px;padding-left: 16px;font-size: 18px;" class="standard-input light-font accound-text" placeholder="邮箱地址/手机号码">
            <div  class="mt20" style="display: table;width: 100%;border: 1px solid lightgrey;border-radius: 3px">
                <div style="display: table-cell">
                    <input type="text" style="height: 44px;padding-left: 16px;font-size: 18px;width: 100%;border: none" class="standard-input light-font" placeholder="密码">
                </div>
                <div @click="handleClose()" style="display: table-cell;padding: 0 15px">
                    <svg v-if="!isClosed" height="19" viewBox="0 0 24 19" width="24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="隐藏密码" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;"><path d="m12 18c-6.25 0-11-3.11-11-7s4.75-7 11-7 11 3.11 11 7-4.75 7-11 7zm8.41-12.78c-.96-.62-2.09-1.12-3.32-1.49l.61-2.37a.5.5 0 1 0 -.97-.25l-.61 2.36a18.02 18.02 0 0 0 -3.63-.46v-2.51a.5.5 0 0 0 -1 0v2.51a17.9 17.9 0 0 0 -3.73.48l-.62-2.38a.5.5 0 0 0 -.97.25l.62 2.4c-1.22.38-2.33.88-3.28 1.5l-1.04-1.49a.5.5 0 0 0 -.82.57l1.05 1.5c-1.69 1.36-2.71 3.14-2.71 5.15 0 4.63 5.37 8 12 8s12-3.37 12-8c0-2.04-1.04-3.83-2.77-5.2l1.02-1.46a.5.5 0 0 0 -.82-.57zm-11.41 5.78a3 3 0 1 1 6 0 3 3 0 0 1 -6 0zm-1 0a4 4 0 1 0 8 0 4 4 0 0 0 -8 0z" fill-rule="evenodd"></path></svg>
                    <svg v-if="isClosed" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="显示密码" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;"><path d="m21.53 18.07c.15.22.46.28.69.13a.47.47 0 0 0 .14-.66l-1.32-1.9c1.86-1.33 2.97-3.11 2.97-5.17a.49.49 0 0 0 -.5-.48.49.49 0 0 0 -.5.48c0 3.82-4.73 6.7-11 6.7s-11-2.87-11-6.7a.49.49 0 0 0 -.5-.48.49.49 0 0 0 -.5.48c0 2.05 1.11 3.84 2.97 5.17l-1.32 1.9a.47.47 0 0 0 .14.66c.23.15.54.09.69-.13l1.32-1.9c.94.55 2.03.99 3.23 1.32a.29.29 0 0 0 -.01.04l-.58 2.23a.48.48 0 0 0 .36.58.5.5 0 0 0 .61-.35l.58-2.23.01-.04c1.1.23 2.28.37 3.51.4v2.4a.49.49 0 0 0 .5.48.49.49 0 0 0 .5-.48v-2.4a19.39 19.39 0 0 0 3.51-.4l.01.04.58 2.23a.5.5 0 0 0 .61.35.48.48 0 0 0 .36-.58l-.58-2.23-.01-.04c1.2-.33 2.29-.77 3.23-1.32z" fill-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>
        <div class="fxal fxbt mt25">
            <div class="fxal">
                <span @click="handleRemeber" v-if="!isRemeber" data-fake-checkbox="true" data-style-select="false" data-style-default="true" class="_fhj4ui">
                </span>
                <span v-if="isRemeber" data-fake-checkbox="true" data-style-select="false" data-style-default="true" class="_fhj4ui" style="border-radius: 2px;border: none">
                    <span @click="handleRemeber" >
                        <svg style="height: 20px;background-color: darkcyan; width: 20px; display: block;color: white;border-radius: 2px; overflow: visible;" viewBox="0 0 52 52" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="3" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round"><path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path></svg>
                    </span>
                </span>
                <p class="ml10">记住我</p>
            </div>
            <div class="fxal">
                <div class="check-info" style="font-weight:400;margin-top: 0">忘记密码？</div>
            </div>
        </div>
        <div class="mt20">
            <button class="normal-button mt25 normal-button-disabled">立即登录</button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "PasswordLogin",
        data(){
            return{
                isClosed:true,
                isRemeber:false
            }
        },
        methods:{
            handleBackClick(){
                this.$emit('passwordLogin')
            },
            handleClose(){
                this.isClosed =!this.isClosed
            },
            handleRemeber(){
                this.isRemeber = !this.isRemeber
            }
        }
    }
</script>

<style scoped>
    .accound-text{
        width: calc(100% - 17px);
    }
    .check-box{
        zoom: 160%;
        transform: scale(1.5,1.5);
    }
    ._fhj4ui{
        background: #ffffff;
        border: 1px solid lightgrey;
        border-radius: 2px;
        height: 18px;
        width: 18px;
    }
</style>
