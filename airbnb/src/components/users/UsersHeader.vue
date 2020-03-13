<template>
    <div>
        <div class="fxal ft" @click="handleClick">
            <svg  viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="z-index:999;height:34px;width:34px;display:block;fill:currentColor;color: rgb(255, 90, 95) !important"><path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>
            <div class="ml10 arrow">
                <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 10px;width:10px;display:block;fill:currentColor"><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fill-rule="evenodd"></path></svg>
            </div>
        </div>
        <div class="user-menu menu" v-if="!isCollapsed">
            <div class="menu-main">
                <div class="menu-block">
                    <h4 class="light-font"><router-link to="/">首页</router-link></h4>
                </div>
                <div class="menu-block">
                    <h4 class="light-font">下载应用</h4>
                    <h4 class="light-font">邀请好友</h4>
                    <h4 class="light-font">邀请房东</h4>
                    <h4 class="light-font">历史足迹</h4>
                    <h4 class="light-font">商务爱彼迎</h4>
                </div>
                <div class="menu-block">
                    <div class="fxal fxbt">
                        <div>
                            <p>语言</p>
                            <p>简体中文（CN）</p>
                        </div>
                        <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 26px; width: 26px; display: block; fill: currentcolor;"><path d="m11 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.95-1.07-.14-.21a6.54 6.54 0 0 1 -.29-.5 12.85 12.85 0 0 1 -.66-1.47c-.09-.25-.17-.5-.25-.76h4.57c-.08.26-.16.51-.25.76a12.85 12.85 0 0 1 -.66 1.47 6.54 6.54 0 0 1 -.29.5l-.14.21c-.31.04-.63.07-.95.07s-.64-.03-.95-.07zm-2.03-6.93h5.95a14.71 14.71 0 0 1 -.41 3h-5.13a14.71 14.71 0 0 1 -.41-3zm .47-4h5.01c.27.88.43 1.88.47 3h-5.95c.04-1.12.2-2.12.47-3zm4.8 10.61a13.85 13.85 0 0 0 1.04-2.61h2.4a7.01 7.01 0 0 1 -3.44 2.61zm4.02-3.61h-2.73c.22-.96.35-1.96.38-3h3.02a6.96 6.96 0 0 1 -.68 3zm-2.34-4a12.86 12.86 0 0 0 -.44-3h2.2a6.95 6.95 0 0 1 1.18 3zm .92-4h-1.68c-.08-.22-.16-.45-.26-.65a8.38 8.38 0 0 0 -.49-.9 7 7 0 0 1 2.43 1.55zm-4.04-1.94.3.3c.05.04.14.15.26.32a6.8 6.8 0 0 1 .64 1.1c.03.07.06.15.09.23h-4.28c.03-.07.06-.15.09-.23a6.78 6.78 0 0 1 .64-1.1c.13-.17.22-.28.26-.32l.3-.3a7.04 7.04 0 0 1 .85-.06c.29 0 .57.02.85.06zm-3.31.4c-.16.25-.32.54-.49.9-.1.21-.17.43-.26.65h-1.68a7 7 0 0 1 2.43-1.55zm-3.28 2.55h2.2c-.25.9-.4 1.9-.44 3h-2.94a6.95 6.95 0 0 1 1.18-3zm1.76 4c .03 1.04.17 2.04.38 3h-2.73a6.96 6.96 0 0 1 -.68-3zm-1.02 4h1.66a13.85 13.85 0 0 0 1.04 2.61 7.01 7.01 0 0 1 -3.44-2.61zm6 5.95v3.05h3.5a.5.5 0 1 1 0 1h-7.93a.5.5 0 0 1 0-1h3.43v-3c-2.12 0-4.15-.66-5.89-1.89a.5.5 0 0 1 .58-.82c1.58 1.11 3.4 1.71 5.31 1.71a9 9 0 0 0 9-9c0-3.34-1.83-6.38-4.75-8.07a.5.5 0 0 1 .5-.86c3.22 1.87 5.25 5.23 5.25 8.93 0 5.19-3.95 9.45-9 9.95z" fill-rule="evenodd"></path></svg>
                    </div>
                    <div class="fxal fxbt" style="padding-top: 20px">
                        <div>
                            <p>币种</p>
                            <p>¥ CNY</p>
                        </div>
                    </div>
                </div>
                <div class="menu-block">
                    <div class="fxal fxbt">
                        <div>
                            <p>发布房源</p>
                            <p class="strong-font font-mid">每月多赚¥8,928元</p>
                        </div>
                        <svg viewBox="0 0 26 24" role="presentation" aria-hidden="true" focusable="false" style="height: 44px; width: 44px; display: block; fill: rgb(96, 182, 181);"><path d="m12 10a2.49 2.49 0 0 1 -1.3 2.18 4.53 4.53 0 0 1 2.47 1.74 3.53 3.53 0 0 1 1.19-.72 2.5 2.5 0 1 1 2.29 0 3.5 3.5 0 0 1 2.35 3.3v1.5h2.5a.49.49 0 0 0 .5-.48v-11.03a.97.97 0 0 0 -.43-.75l-5.14-3a .96.96 0 0 0 -.86 0l-5.14 3a .95.95 0 0 0 -.43.76v1.05a2.5 2.5 0 0 1 2 2.45z"></path><path d="m25.43 6.26a.5.5 0 0 1 -.69.17l-1.74-1.05v-4.38q-2 0-2 .01v2.16a.55.55 0 0 1 -.85.47l-3.99-2.45a.43.43 0 0 0 -.33 0l-7.56 4.62a.5.5 0 0 1 -.52-.85l7.56-4.62a1.4 1.4 0 0 1 1.38 0l3.32 2.03v-1.36a1 1 0 0 1 .98-1.01h2.02a1 1 0 0 1 .99.99v3.83l1.26.75a.5.5 0 0 1 .17.69zm-1.93 1.74a.5.5 0 0 0 -.5.5v10.5h-1.5a.5.5 0 0 0 0 1h1.9a.61.61 0 0 0 .6-.6v-10.9a.5.5 0 0 0 -.5-.5zm-4.5 8.5v3.5h-1v-3.5a2.49 2.49 0 0 0 -4.34-1.68 4.41 4.41 0 0 1 .34 1.68v3.5h-1v-3.5a3.46 3.46 0 0 0 -.5-1.77 3.5 3.5 0 0 0 -2.5-1.69 3.45 3.45 0 0 0 -.5-.04 3.54 3.54 0 0 0 -3.5 3.5v3.5h-1v-3.5a4.41 4.41 0 0 1 .34-1.68 2.49 2.49 0 0 0 -4.34 1.68v3.5h-1v-3.5a3.5 3.5 0 0 1 2.35-3.29 2.5 2.5 0 1 1 2.29 0 3.53 3.53 0 0 1 1.19.72 4.53 4.53 0 0 1 2.47-1.74 2.5 2.5 0 1 1 2.39 0 4.53 4.53 0 0 1 2.47 1.74 3.53 3.53 0 0 1 1.19-.72 2.5 2.5 0 1 1 2.29 0 3.5 3.5 0 0 1 2.36 3.29zm-14-5.5a1.5 1.5 0 1 0 -1.5 1.5 1.5 1.5 0 0 0 1.5-1.5zm6-1a1.5 1.5 0 0 0 -1-1.41 1.48 1.48 0 0 0 -.5-.09 1.5 1.5 0 0 0 0 3 1.48 1.48 0 0 0 .5-.09 1.5 1.5 0 0 0 1-1.41zm6 1a1.5 1.5 0 1 0 -1.5 1.5 1.5 1.5 0 0 0 1.5-1.5z" fill="#484848"></path></svg>
                    </div>
                    <div class="mt30"><p>了解如何出租你的房源</p></div>
                    <div class="mt30">
                        <p>开展体验</p>
                        <p class="strong-font font-mid">做你喜爱的事情来赚取收入</p>
                    </div>
                </div>
                <div class="menu-block">
                    <div ><p>帮助</p></div>
                    <div class="mt25">
                        <p>注册</p>
                    </div>
                    <div class="mt25">
                        <p>登陆</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UsersHeader",
        data(){
            return{
                isCollapsed:true,
                user:{
                    userName: "叶志康"
                }
            }
        },
        methods:{
            handleClick(){
                const arrow = document.querySelector('.arrow')
                this.isCollapsed = !this.isCollapsed
                if(this.isCollapsed){
                    arrow.style.transform = 'rotate(0deg)'
                }else{
                    arrow.style.transform = 'rotate(180deg)'
                    this.$nextTick(() => {
                        const menu = document.querySelector('.menu')
                        menu.style.width = window.innerWidth+'px'
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .ft{
        width: 100%;
        position: fixed;
        padding: 5px 20px;
        height: 64px;
        z-index: 2000;
        background-color: white;
        cursor: pointer;
    }

    .arrow{
        transition: 250ms;
        color: #757575;
        z-index:999;
    }

    .menu{
        padding-top: 88px;
    }


</style>
