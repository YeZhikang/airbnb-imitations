<template>
    <div>
        <div v-if="usingPhone">
            <phone-login @passwordLogin="handleClick()"/>
        </div>
        <div v-if="!usingPhone">
            <password-login @passwordLogin="handleClick()"/>
        </div>
    </div>
</template>

<script>
    import PhoneLogin from "../components/account/PhoneLogin";
    import PasswordLogin from "../components/account/PasswordLogin";
    export default {
        name: "Login",
        components: {PasswordLogin, PhoneLogin},
        data(){
            return{
                usingPhone:true
            }
        },
        methods:{
            handleClick(){
                this.usingPhone = !this.usingPhone
            }
        }
    }
</script>

<style scoped>

</style>
