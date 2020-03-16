<template>
    <div class="menu2" style="position: fixed;display: flex;justify-content:flex-end;top: 0;left: 0">
        <div class="folder" style="width: 70%;height: 100%;background-color: white">
            <div style="padding: 38px 24px">
                <div class="fxal">
                    <div style="width: 80%">
                        <h3 style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap;width: 100%">{{userDoc.email}}sdsdsdsd</h3>
                        <a class="light-font font-mid cyan-color">查看个人资料</a>
                    </div>
                    <img style="width: 20%;height: auto" class="round-avatar" src="https://z1.muscache.cn/im/pictures/user/088d8b66-27d3-423f-911b-59abb9f9e42f.jpg?aki_policy=profile_small" alt="">
                </div>
                <div class="mt30">
                    <div class="fxal" v-for="(option,index) in userBarOptions" :key="index" style="padding-bottom: 34px">
                        <img :src="option.imgURL" width="20px" alt="">
                        <p class="ml15 light-font font-mid">{{option.optionName}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserFolder",

        props:{
            userDoc: Object
        },
        data(){
            return{
                menu: null,
                userBarOptions:[
                    {
                        imgURL: 'https://z1.muscache.cn/pictures/6772036c-e88c-466d-bf3b-00c73d1f0391.jpg',
                        optionName: '旅程',
                    },
                    {
                        imgURL: 'https://z1.muscache.cn/pictures/d2051cd0-0d0d-4c50-a1fa-5fb7b98beb65.jpg',
                        optionName: '消息',
                    },
                    {
                        imgURL: 'https://z1.muscache.cn/pictures/fcdb0b6a-da8d-4a9d-acb8-d15d63abc110.jpg',
                        optionName: '心愿单',
                    },
                    {
                        imgURL: 'https://z1.muscache.cn/pictures/56f58310-949b-4bc3-83d6-f26c3e7f7cdc.jpg',
                        optionName: '礼券中心',
                    },
                    {
                        imgURL: 'https://z1.muscache.cn/pictures/c8008cbd-3c25-4d68-b124-7711f2341ff0.jpg',
                        optionName: '下载爱彼迎APP',
                    },
                    {
                        imgURL: 'https://z1.muscache.cn/pictures/ca1d518e-4d50-4fd5-9205-48ab3a5f26a8.jpg',
                        optionName: '语言与货币',
                    },
                    {
                        imgURL: 'https://z1.muscache.cn/pictures/f521016a-3cb8-416c-ae8d-41189a386501.jpg',
                        optionName: '帮助',
                    },
                    {
                        imgURL: 'https://z1.muscache.cn/pictures/8ae4d357-5313-494e-80e9-92b58e1c41f8.jpg',
                        optionName: '退出',
                    },
                ]
            }
        },
        mounted() {
            const menu = document.querySelector('.menu2')
            this.menu = menu
            menu.style.width = window.innerWidth + 'px'
            menu.style.height = window.innerHeight + 'px'
        },
        methods:{

        },

    }
</script>

<style scoped>
    h1,h2,h3,h4,h5,p{
        margin-top: 0;
        margin-bottom: 0;
    }
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

    .folder{
        animation: fold 0.3s ;
        transform-origin: 100% 0;
    }

    @keyframes fold {
        from {transform: scaleX(0)}
        to {transform: scaleX(1)}
    }
</style>
