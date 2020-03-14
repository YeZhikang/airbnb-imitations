<template>
    <div>
        <div v-if="usingPhone && !checking">
            <phone-login @passwordLogin="handleClick()" @checkPhoneId="handleCheckPhone"/>
        </div>
        <div v-if="!usingPhone && !checking">
            <password-login @passwordLogin="handleClick()"/>
        </div>
        <div v-if="checking">
            <checking-phone-id @handleBack="handleBack" :phoneNumber="phoneNumber"/>
        </div>
    </div>
</template>

<script>
    import PhoneLogin from "../components/account/PhoneLogin";
    import PasswordLogin from "../components/account/PasswordLogin";
    import CheckingPhoneId from "../components/account/CheckingPhoneId";
    export default {
        name: "Login",
        components: {CheckingPhoneId, PasswordLogin, PhoneLogin},
        data(){
            return{
                usingPhone:true,
                checking: false,
                phoneNumber: ''
            }
        },
        methods:{
            handleClick(){
                this.usingPhone = !this.usingPhone
            },
            handleCheckPhone(phoneNumber){
                this.phoneNumber = phoneNumber
                this.checking = true
            },
            handleBack(){
                this.checking = false
            }
        }
    }
</script>

<style scoped>

</style>
