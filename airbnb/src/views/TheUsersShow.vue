<template>
    <div>
        <users-header/>
        <div class="main-block">
            <div class="intro-head">
                <h1 class="normal-font" style="font-size: 27px">您好，我是{{user.userName}}</h1>
                <p class="light-font " style="margin-top: 5px">注册时间：{{user.registerTime}}</p>
            </div>
            <div class="menu-block">
                <div class="fxal">
                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:24px;width:24px;fill:#FFB400"><path d="m22.2909 2.4329c.195-.195.195-.512 0-.707s-.512-.195-.707 0l-1.425 1.425c-.195.195-.195.511 0 .707.195.195.512.195.707 0zm1.209 4.575c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-2.003c-.275 0-.5.224-.5.5s.225.5.5.5zm-5.492-4.497c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-2.011c0-.276.224-.5.5-.5s.5.224.5.5zm-13.008 3.488h12c.553 0 1 .447 1 1v6.999c0 1.658-1.343 3-3 3h-3.488l-4.715 3.49c-.221.164-.534.118-.699-.105-.063-.086-.098-.19-.098-.297v-3.088h-3c-.552 0-1-.447-1-1v-6.999c0-1.657 1.343-3 3-3zm8.87 4.766c.068-.065.112-.15.126-.242.033-.23-.129-.443-.364-.477l-2.243-.32-1.004-1.993c-.042-.082-.11-.15-.195-.191-.213-.103-.47-.017-.575.191l-1.004 1.993-2.243.32c-.094.013-.18.056-.246.123-.165.166-.162.433.007.596l1.624 1.551-.383 2.19c-.016.092-.001.186.043.268.11.206.37.284.58.177l2.007-1.035 2.007 1.035c.084.043.179.057.273.042.233-.039.39-.257.35-.487l-.383-2.19z"></path><path d="m12.1688 18.9983h5.331c1.381 0 2.5-1.119 2.5-2.5v-10c0-1.38-1.119-2.5-2.5-2.5h-15c-1.38 0-2.5 1.12-2.5 2.5v10.091c0 1.331 1.079 2.409 2.409 2.409h2.093c.277 0 .5-.224.5-.5 0-.275-.223-.5-.5-.5h-2.093c-.778 0-1.409-.631-1.409-1.409v-10.091c0-.828.672-1.5 1.5-1.5h15c.828 0 1.5.672 1.5 1.5v10c0 .829-.672 1.5-1.5 1.5h-5.499c-.109 0-.215.036-.302.102l-5.219 3.954c-.22.167-.264.48-.097.7.167.221.48.264.701.097zm-7.169 4.5c0-.275.224-.5.5-.5s.5.225.5.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5z" fill="#484848"></path></svg>
                    <p class="ml10  normal-font">{{user.commentNum}}条评论</p>
                </div>
                <div class="fxal mt15" v-if="user.isConfirmed">
                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:24px;width:24px;fill:#008489"><path d="m10.60128 22.13136c.9087991-.2972003 1.8886409-.2972003 2.79744 0l.6108.19975c.8981758.2937216 1.8832309-.026346 2.43722-.79191l.37673-.52061c.5605454-.7746179 1.3532554-1.3505531 2.26318-1.64429l.61155-.19742c.8992887-.2903049 1.5080889-1.1282465 1.50629-2.07323l-.00122-.64262c-.0018203-.9561618.3009688-1.8880493.86446-2.66053l.37871-.51918c.5568995-.7634465.5568995-1.7991935 0-2.56264l-.37871-.51918c-.5634851-.77247239-.8662739-1.70434844-.86446-2.6605l.00122-.64262c.001812-.94499459-.6069907-1.78295167-1.50629-2.07326l-.61155-.19741c-.909924-.29374328-1.7026331-.86968135-2.26318-1.6443l-.37673-.52061c-.5539891-.76556404-1.5390442-1.08563158-2.43722-.79191l-.6108.19975c-.9087991.29720032-1.8886409.29720032-2.79744 0l-.61079-.19975c-.8981788-.29372311-1.88323759.0263443-2.43723.79191l-.37673.52061c-.56054689.77461865-1.35325596 1.35055672-2.26318 1.6443l-.61155.19741c-.8992887.29030495-1.50808894 1.12824646-1.50629 2.07323l.00122.64262c.00181834.95615993-.30096674 1.88804587-.86445 2.66053l-.37872.51918c-.5568995.7634465-.5568995 1.7991935 0 2.56264l.37872.51918c.56347719.7724759.86626197 1.7043503.86445 2.6605l-.00122.64262c-.00181199.9449946.60699075 1.7829517 1.50629 2.07326l.61155.19742c.90992458.2937369 1.70263456.8696721 2.26318 1.64429l.37673.52061c.55399241.7655657 1.5390512 1.0856331 2.43723.79191z" fill="#fff"></path><path d="m10.91211 23.08183-.6108.19974c-1.31127377.4288215-2.74939061-.0384499-3.55818-1.15612l-.37674-.52061c-.43597531-.6024863-1.05252831-1.0504395-1.76025-1.2789l-.61155-.19742c-1.31289983-.4238231-2.20170689-1.6471595-2.19908-3.02677l.00122-.64263c.00141781-.7436802-.23408206-1.4684811-.67235-2.0693l-.37872-.51917c-.81303977-1.1145858-.81303977-2.6267142 0-3.7413l.37872-.51917c.43826794-.60081894.67376781-1.32561984.67235-2.0693l-.00122-.64263c-.00262689-1.37961049.88618017-2.60294686 2.19908-3.02677l.61155-.19742c.70771841-.22846162 1.32427017-.67641042 1.76025-1.27889l.37674-.52062c.80878939-1.11767012 2.24690623-1.58494149 3.55818-1.15612l.6108.19974c.7068408.23115991 1.4689392.23115991 2.17578 0l.6108-.19974c1.3112738-.42882149 2.7493906.03844988 3.55818 1.15612l.37674.52062c.4359798.60247958 1.0525316 1.05042838 1.76025 1.27889l.61155.19742c1.3128998.42382314 2.2017069 1.64715951 2.19908 3.02677l-.00122.64263c-.0014178.74368016.2340821 1.46848106.67235 2.0693l.37872.51917c.8130398 1.1145858.8130398 2.6267142 0 3.7413l-.37872.51917c-.4382679.6008189-.6737678 1.3256198-.67235 2.0693l.00122.64263c.0026269 1.3796105-.8861802 2.6029469-2.19908 3.02677l-.61155.19742c-.7077217.2284605-1.3242747.6764137-1.76025 1.2789l-.37674.52061c-.8087894 1.1176701-2.2469062 1.5849415-3.55818 1.15612l-.6108-.19974c-.7068408-.2311599-1.4689392-.2311599-2.17578 0zm-.31083-.95047c.9087991-.2972003 1.8886409-.2972003 2.79744 0l.6108.19975c.8981758.2937216 1.8832309-.026346 2.43722-.79191l.37673-.52061c.5605454-.7746179 1.3532554-1.3505531 2.26318-1.64429l.61155-.19742c.8992887-.2903049 1.5080889-1.1282465 1.50629-2.07323l-.00122-.64262c-.0018203-.9561618.3009688-1.8880493.86446-2.66053l.37871-.51918c.5568995-.7634465.5568995-1.7991935 0-2.56264l-.37871-.51918c-.5634851-.77247239-.8662739-1.70434844-.86446-2.6605l.00122-.64262c.001812-.94499459-.6069907-1.78295167-1.50629-2.07326l-.61155-.19741c-.909924-.29374328-1.7026331-.86968135-2.26318-1.6443l-.37673-.52061c-.5539891-.76556404-1.5390442-1.08563158-2.43722-.79191l-.6108.19975c-.9087991.29720032-1.8886409.29720032-2.79744 0l-.61079-.19975c-.8981788-.29372311-1.88323759.0263443-2.43723.79191l-.37673.52061c-.56054689.77461865-1.35325596 1.35055672-2.26318 1.6443l-.61155.19741c-.8992887.29030495-1.50808894 1.12824646-1.50629 2.07323l.00122.64262c.00181834.95615993-.30096674 1.88804587-.86445 2.66053l-.37872.51918c-.5568995.7634465-.5568995 1.7991935 0 2.56264l.37872.51918c.56347719.7724759.86626197 1.7043503.86445 2.6605l-.00122.64262c-.00181199.9449946.60699075 1.7829517 1.50629 2.07326l.61155.19742c.90992458.2937369 1.70263456.8696721 2.26318 1.64429l.37673.52061c.55399241.7655657 1.5390512 1.0856331 2.43723.79191z" fill="#484848"></path><path d="m19.05415 5.86267-7.09628 6.61772-2.48167-2.12714c-.62923882-.53637654-1.57386067-.46241974-2.11195555.1653503-.53809488.62777-.46672096 1.5725905.15957555 2.1123997l3.5 3c.5798858.4970486 1.4406583.479017 1.99922-.04188l7.1148-6.635c.0826056.43786517.2617132.85183043.52431 1.21182l.37984.52072c.5708107.782512.5708107 1.844128 0 2.62664l-.37984.52072c-.3756621.5149835-.5775196 1.1362409-.5763 1.77368l.00123.64453c.0018404.9685815-.6221643 1.8274462-1.54391 2.125l-.61336.198c-.6066166.1958295-1.1350902.579788-1.50879 1.0962l-.37785.52215c-.5678229.784687-1.5774838 1.1127463-2.49809.81168l-.6126-.20034c-.6058789-.1981388-1.2591211-.1981388-1.865 0l-.6126.20034c-.92060616.3010663-1.93026707-.026993-2.49809-.81168l-.37779-.52213c-.37369979-.516412-.90217339-.9003705-1.50879-1.0962l-.61336-.198c-.92174569-.2975519-1.54574811-1.1564192-1.5439-2.125l.00122-.64453c.00121405-.6374382-.20064292-1.2586939-.5763-1.77368l-.37987-.52072c-.57081065-.782512-.57081065-1.844128 0-2.62664l.37984-.52072c.37565708-.51498609.57751405-1.13624182.5763-1.77368l-.00122-.64453c-.00184811-.96858084.62215431-1.82744809 1.5439-2.125l.61336-.198c.6066276-.19582384 1.13511241-.57978287 1.50882-1.0962l.37785-.52215c.56782293-.78468703 1.57748384-1.11274629 2.49809-.81168l.6126.20033c.6058773.19814852 1.2591227.19814852 1.865 0l.6126-.20033c.9206062-.30106629 1.9302671.02699297 2.49809.81168l.37785.52215c.3736998.51641201.9021734.90037052 1.50879 1.0962l.61336.198c.1797924.05798184.3514774.13860244.51092.23992z"></path></svg>
                    <p class="ml10  normal-font">已验证</p>
                </div>
            </div>
            <div class="menu-block">
                <h4 style="padding: 0">关于</h4>
                <div class="fxal mt15" v-if="user.isConfirmed">
                    🏠
                    <p class="ml10  normal-font">住在{{user.country}}</p>
                </div>
            </div>
            <div class="menu-block">
                <h4 style="padding: 0">{{user.userName}}已提供</h4>
                <div class="fxal mt15">
                    <svg viewBox="0 0 20 20" role="presentation" aria-hidden="true" focusable="false" style="height:18px;width:18px;display:block;fill:#008489"><path d="m8.3 14.1 7.5-7.5c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-7.1 7.1-3-3c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l3.3 3.3c.1.1.2.1.4.1.1 0 .3-.1.4-.1m1.7-13.1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9m0 19c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10"></path></svg>
                    <p class="ml10  normal-font">手机号</p>
                </div>
            </div>

            <div class="menu-block">
                <h4 style="padding: 0;">{{recievedComments.length}}条评价</h4>
                <div class="mt20" style="border-bottom: 1px solid #f0f0f0;padding-bottom: 12px" v-for="(comment,index) in recievedComments" :key="index">
                    <p class="normal-font" style="font-size: 11px">{{comment.dealTime}}</p>
                    <p class="mt10">{{comment.commentText}}</p>
                    <div class="fxal mt15 mb15" >
                        <img class="round-avatar" :src="comment.user.imgURL" alt="">
                        <div class="ml10">
                            <p class="font-small strong-font">{{comment.user.userName}} · {{comment.user.country}}</p>
                            <p class="font-small">注册时间：{{comment.user.registerTime}}</p>
                        </div>
                    </div>
                </div>
                <div class="check-info mt30" style="font-weight:500;">举报此个人资料</div>
            </div>
        </div>
    </div>
</template>

<script>

    import UsersHeader from "../components/users/UsersHeader";
    export default {
        name: "TheUsers",
        data(){
            return{
                recievedComments:[
                    {
                        user: {
                            imgURL: 'https://a0.muscache.com/im/pictures/user/72d03edf-bb42-494d-bd5b-8905d7b047b0.jpg?aki_policy=profile_x_medium',
                            userName: 'Power',
                            registerTime: new Date().getFullYear(),
                            country: '中国',
                        },
                        dealTime: `${new Date().getFullYear()}年${new Date().getMonth()}月`,
                        commentText: '感谢入住'
                    },{
                        user: {
                            imgURL: 'https://a0.muscache.com/im/pictures/user/100b9fe5-c9b3-468c-b6e1-6a9af2220fbb.jpg?aki_policy=profile_x_medium',
                            userName: 'Benjamin',
                            registerTime: new Date().getFullYear(),
                            country: '中国',
                        },
                        dealTime: new Date().toLocaleDateString(),
                        commentText: '非常好的客人'
                    },
                ],
                user:{
                    userName: "叶志康",
                    registerTime: new Date().getFullYear(),
                    commentNum: 2,
                    isConfirmed: true,
                    country: '中国'
                }
            }
        },
        components: {UsersHeader}
    }
</script>

<style scoped>
    @import '../static/css/rooms.css';

    .main-block{
        padding-top: 96px;
    }
    .menu-block{
        border-bottom: 1px solid #ededed;
    }
    .menu-block{
        padding-bottom: 30px;
    }
    h4{
        font-size: 19px;
    }
    .menu-block:last-child{
        border: none;
    }

</style>
