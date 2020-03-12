<template>
  <div class="page">
    <div class="room-detail">
        <div class="room-intro">
            <div class="block" style="margin-top:0">
                <h5 class="title">关于此房源</h5>
                <p class="text">{{roomIntro.notCollpased.关于此房源}}</p>
            </div>
            <div v-if="!isCollpased">
                <div class="block" v-for="(val,key,index) in roomIntro.isCollpased" :key="index">
                    <h5 class="title">{{key}}</h5>
                    <p class="text">{{val}}</p>
                </div>
            </div>
            <div class="check-info" @click="handleCollpasedIntro" v-if="isCollpased">查看全部内容</div>
            <div class="check-info" @click="handleCollpasedIntro" v-if="!isCollpased">收起</div>
        </div>
        <div class="room-intro">
            <h5>便利设施</h5>
            <div class="tool-bar">
                <div class="_12to336"><div class="_l0nj81"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:24px;width:24px;fill:currentColor"><path d="m12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5.92-5.78a.5.5 0 1 1 -.84.55c-1.19-1.81-3.07-2.77-5.08-2.77s-3.89.96-5.08 2.78a.5.5 0 0 1 -.84-.55c1.38-2.1 3.58-3.23 5.92-3.23s4.54 1.13 5.92 3.23zm2.98-3.03a.5.5 0 1 1 -.79.61c-1.66-2.14-5.22-3.8-8.11-3.8-2.83 0-6.26 1.62-8.12 3.82a.5.5 0 0 1 -.76-.65c2.05-2.42 5.75-4.17 8.88-4.17 3.19 0 7.05 1.8 8.9 4.19zm2.95-2.33a.5.5 0 0 1 -.71-.02c-2.94-3.07-6.71-4.84-11.14-4.84s-8.2 1.77-11.14 4.85a.5.5 0 0 1 -.72-.69c3.12-3.27 7.14-5.16 11.86-5.16s8.74 1.89 11.86 5.16a.5.5 0 0 1 -.02.71z" fill-rule="evenodd"></path></svg></div><div class="_1h5mb2a">无线网络</div></div>
                <div class="_12to336"><div class="_l0nj81"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:24px;width:24px;fill:currentColor"><path d="m10.5 0a .5.5 0 0 0 -.5.5v7a .5.5 0 0 1 -.49.5h-1.51v-7.5a.5.5 0 1 0 -1 0v7.5h-1.51a.5.5 0 0 1 -.49-.5v-7a .5.5 0 1 0 -1 0v7c0 .83.67 1.5 1.49 1.5h1.51v5c0 .03.01.06.02.09a1.49 1.49 0 0 0 -1.02 1.41v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.66-.43-1.21-1.02-1.41.01-.03.02-.06.02-.09v-5h1.51a1.5 1.5 0 0 0 1.49-1.5v-7a .5.5 0 0 0 -.5-.5zm-2.5 15.5v7a .5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zm11.5-15.5h-2c-1.4 0-2.5 1.07-2.5 2.5v7c0 1.43 1.1 2.5 2.5 2.5h1.5v2.09a1.49 1.49 0 0 0 -.5-.09c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-22.5zm-2 11c-.86 0-1.5-.63-1.5-1.5v-7c0-.87.65-1.5 1.5-1.5h1.5v10zm1.5 11.5a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5z" fill-rule="evenodd"></path></svg></div><div class="_1h5mb2a">厨房</div></div>
                <div class="_12to336"><div class="_l0nj81"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:24px;width:24px;fill:currentColor"><path d="m14.5 4h .5v-1.5c0-1.39-1.12-2.5-2.5-2.5h-.99a2.5 2.5 0 0 0 -2.51 2.5v1.5zm-4.5-1.5c0-.83.67-1.5 1.51-1.5h.99c.83 0 1.5.67 1.5 1.5v.5h-4zm5.5 2.5h-7a3.5 3.5 0 0 0 -3.5 3.49v12.01c0 1.93 1.57 3.5 3.5 3.5h7a3.5 3.5 0 0 0 3.5-3.49v-12.02c0-1.92-1.57-3.49-3.5-3.49zm2.5 15.51a2.5 2.5 0 0 1 -2.5 2.49h-7a2.5 2.5 0 0 1 -2.5-2.49v-12.02a2.5 2.5 0 0 1 2.5-2.49h7a2.5 2.5 0 0 1 2.5 2.49v12.01zm-1-11.01a.5.5 0 0 1 -.5.5h-9a .5.5 0 0 1 0-1h9a .5.5 0 0 1 .5.5z" fill-rule="evenodd"></path></svg></div><div class="_1h5mb2a">洗发水</div></div>
                <div class="_12to336"><div class="_l0nj81"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:24px;width:24px;fill:currentColor"><path d="m23.5 4h-1.5v-1.5c0-1.38-1.12-2.5-2.5-2.5h-15a2.5 2.5 0 0 0 -2.5 2.5v1.5h-1.5a.5.5 0 1 0 0 1h1.5v15.5c0 .83.67 1.5 1.5 1.5h1.5v.5c0 .83.67 1.5 1.5 1.5h14c .83 0 1.5-.67 1.5-1.5v-17.5h1.5a.5.5 0 0 0 0-1zm-20.5-1.5c0-.82.67-1.5 1.5-1.5h15.01c.82 0 1.49.67 1.49 1.5v1.5h-2v-.51a.5.5 0 0 1 .5-.49.5.5 0 0 0 0-1 1.5 1.5 0 0 0 -1.5 1.5v11.5h-15zm0 13.5h15v2h-15zm .5 5a .5.5 0 0 1 -.5-.5v-1.5h15v1.51c0 .27-.23.5-.5.5h-14zm17.5 1.5c0 .28-.22.5-.5.5h-14a .5.5 0 0 1 -.5-.5v-.5h11.5c.83 0 1.5-.67 1.5-1.5v-15.5h2z" fill-rule="evenodd"></path></svg></div><div class="_1h5mb2a">生活必需品</div></div>
                <div class="_12to336"><div class="_l0nj81"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:24px;width:24px;fill:currentColor"><path d="m16 13.54v-9.55a4 4 0 0 0 -4-3.99c-2.21 0-4 1.79-4 3.99v9.55a5.98 5.98 0 0 0 -2 4.46 6 6 0 1 0 12 0 5.98 5.98 0 0 0 -2-4.46zm-4 9.46a5 5 0 0 1 -3.18-8.86.5.5 0 0 0 .18-.39v-9.76a3 3 0 0 1 3-2.99c1.66 0 3 1.34 3 2.99v9.77a.5.5 0 0 0 .18.39 5 5 0 0 1 -3.18 8.85zm2-8.45v-10.54a2 2 0 1 0 -4 0v10.54a3.99 3.99 0 0 0 -2 3.45 4 4 0 0 0 8 0 3.99 3.99 0 0 0 -2-3.45zm-2 6.45a3 3 0 0 1 -1.29-5.71.5.5 0 0 0 .28-.45v-10.83a1 1 0 1 1 2 0v10.83a.5.5 0 0 0 .28.45 3 3 0 0 1 -1.27 5.71z" fill-rule="evenodd"></path></svg></div><div class="_1h5mb2a">暖气</div></div>
                <div v-if="!isCollpasedTool" class="_12to336" style="margin-top:15px"><div class="_l0nj81"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:24px;width:24px;fill:currentColor"><path d="m21.5 6h-9.07l3.49-5.22a.5.5 0 1 0 -.83-.55l-3.86 5.77h-2.46l-3.85-5.78a.5.5 0 0 0 -.83.55l3.48 5.23h-5.07a2.5 2.5 0 0 0 -2.5 2.5v13c0 1.39 1.12 2.5 2.5 2.5h19c1.38 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.12-2.5-2.5-2.5zm1.5 15.5c0 .83-.68 1.5-1.5 1.5h-19c-.83 0-1.5-.67-1.5-1.5v-13c0-.83.68-1.5 1.5-1.5h19c .83 0 1.5.67 1.5 1.5zm-6.49-12.5h-11.02a2.49 2.49 0 0 0 -2.49 2.49v7.02a2.5 2.5 0 0 0 2.49 2.49h11.02a2.49 2.49 0 0 0 2.49-2.49v-7.02a2.5 2.5 0 0 0 -2.49-2.49zm1.49 9.51c0 .82-.67 1.49-1.49 1.49h-11.02c-.82 0-1.49-.67-1.49-1.49v-7.02c0-.82.67-1.49 1.49-1.49h11.02c.82 0 1.49.67 1.49 1.49zm4-8.51a1 1 0 1 1 -2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z" fill-rule="evenodd"></path></svg></div><div class="_1h5mb2a">电视</div></div>
                <div v-if="!isCollpasedTool" class="_12to336" style="margin-top:15px"><div class="_l0nj81"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:24px;width:24px;fill:currentColor"><path d="m5 3.5a1.5 1.5 0 1 0 -3 0 1.5 1.5 0 0 0 3 0zm-1.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a .5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm4.5 3c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 15c-3.77 0-6.84-2.99-6.99-6.73.35-.23.84-.57.85-.57 1.64-1.05 3.31-1.06 5.85.71 2.88 2.01 4.99 1.99 6.96.73l.25-.17c-.47 3.4-3.39 6.03-6.92 6.03zm6.13-6.7c-1.64 1.05-3.31 1.06-5.85-.71-2.88-2.01-4.99-1.99-6.96-.73l-.25.17c.48-3.4 3.4-6.03 6.93-6.03 3.77 0 6.84 2.99 6.99 6.73-.35.23-.84.57-.85.57zm3.37-14.3h-19a2.51 2.51 0 0 0 -2.5 2.5v19c0 1.38 1.12 2.5 2.5 2.5h19c1.38 0 2.5-1.12 2.5-2.5v-19c0-1.37-1.12-2.5-2.5-2.5zm1.5 21.5c0 .83-.68 1.5-1.5 1.5h-19c-.83 0-1.5-.68-1.5-1.5v-19c0-.82.68-1.5 1.5-1.5h19c .83 0 1.5.68 1.5 1.5z" fill-rule="evenodd"></path></svg></div><div class="_1h5mb2a">洗衣机</div></div>
            </div>
            <div v-if="!isCollpasedTool">
                <h5 style="margin-top:15px">安全设施</h5> 
                <div class="tool-bar">
                    <div class="_12to336"><div class="_l0nj81"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:24px;width:24px;fill:currentColor"><path d="m14.78 5.41-.45-.22.44-.9.45.22a9.39 9.39 0 0 1 4.23 4.11l.23.44-.89.46-.23-.44a8.4 8.4 0 0 0 -3.77-3.67zm.44 14.09-.45.22-.44-.9.45-.22a8.4 8.4 0 0 0 3.77-3.67l.23-.44.89.46-.23.44a9.4 9.4 0 0 1 -4.23 4.11zm.56-15.54-.45-.22.44-.9.45.22a10.51 10.51 0 0 1 4.73 4.59l.23.45-.89.46-.23-.45a9.52 9.52 0 0 0 -4.27-4.15zm4.5 11.51.89.46-.23.44a10.51 10.51 0 0 1 -4.73 4.59l-.45.22-.44-.9.45-.22a9.52 9.52 0 0 0 4.27-4.15zm-11.07 3.14.45.22-.44.9-.45-.22a9.41 9.41 0 0 1 -4.23-4.11l-.23-.44.89-.46.23.44a8.4 8.4 0 0 0 3.78 3.67zm.01-14.31.44.9-.45.22a8.4 8.4 0 0 0 -3.78 3.67l-.23.44-.89-.46.23-.44a9.4 9.4 0 0 1 4.23-4.11zm-5.52 4.26-.89-.46.23-.45a10.52 10.52 0 0 1 4.73-4.59l.45-.22.44.9-.45.22c-1.84.9-3.36 2.37-4.28 4.15zm4.5 11.51.45.22-.44.9-.45-.22a10.52 10.52 0 0 1 -4.73-4.59l-.23-.44.89-.46.23.44a9.52 9.52 0 0 0 4.28 4.15zm3.78 2.95c-6.07 0-11-4.93-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm0-23c-6.62 0-12 5.38-12 12s5.38 12 12 12 12-5.38 12-12-5.38-12-12-12zm10 12a1 1 0 1 1 -2 0 1 1 0 0 1 2 0zm-10 2c-1.1 0-2-.9-2-2s .9-2 2-2 2 .9 2 2-.9 2-2 2zm0-5c-1.66 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-1.66-1.35-3-3-3zm0 7c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-9c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" fill-rule="evenodd"></path></svg></div><div class="_1h5mb2a">烟雾报警器</div></div>
                    <div class="_12to336"><div class="_l0nj81"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:24px;width:24px;fill:currentColor"><path d="m15.25 14c .97 0 1.75-.9 1.75-2s-.79-2-1.75-2-1.75.9-1.75 2 .79 2 1.75 2zm0 1c-1.52 0-2.75-1.35-2.75-3s1.23-3 2.75-3 2.75 1.35 2.75 3-1.23 3-2.75 3zm3.31-5.93.23.45.89-.46-.23-.45a9.4 9.4 0 0 0 -4.22-4.11l-.45-.22-.44.9.45.22a8.4 8.4 0 0 1 3.78 3.67zm.89 6.32.23-.45-.89-.46-.23.45a8.4 8.4 0 0 1 -3.78 3.67l-.45.22.44.9.45-.22a9.4 9.4 0 0 0 4.22-4.11zm.61.51c-.92 1.78-2.44 3.26-4.28 4.15l-.45.22.44.9.45-.22a10.51 10.51 0 0 0 4.72-4.59l.23-.44-.89-.46zm2.94-3.9c0-6.07-4.93-11-11-11s-11 4.93-11 11 4.93 11 11 11 11-4.93 11-11zm1 0c0 6.62-5.38 12-12 12s-12-5.38-12-12 5.38-12 12-12 12 5.38 12 12zm-19.44-3.39-.23.45.89.46.23-.45a8.4 8.4 0 0 1 3.78-3.67l.45-.22-.44-.9-.45.22a9.4 9.4 0 0 0 -4.22 4.11zm-.61 7.29-.23-.44-.89.46.23.44a10.51 10.51 0 0 0 4.72 4.59l.45.22.44-.9-.45-.22c-1.84-.9-3.36-2.37-4.28-4.15zm0-7.8c.92-1.78 2.44-3.26 4.28-4.15l.45-.22-.44-.9-.45.22a10.51 10.51 0 0 0 -4.72 4.59l-.23.44.89.46zm1.5 6.83-.23-.45-.89.46.23.45a9.4 9.4 0 0 0 4.22 4.11l.45.22.44-.9-.45-.22a8.4 8.4 0 0 1 -3.78-3.67zm3.4-4.93c.73 0 1.39.47 1.69 1.19l.93-.38c-.45-1.1-1.48-1.81-2.62-1.81-1.57 0-2.85 1.35-2.85 3s1.28 3 2.85 3c1.14 0 2.16-.71 2.62-1.81l-.93-.38c-.3.72-.96 1.19-1.69 1.19-1.02 0-1.85-.9-1.85-2s .83-2 1.85-2zm11.21-1.9.23.44.89-.46-.23-.44a10.51 10.51 0 0 0 -4.72-4.59l-.45-.22-.44.9.45.22c1.84.9 3.36 2.37 4.28 4.15zm1.94 3.9a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z" fill-rule="evenodd"></path></svg></div><div class="_1h5mb2a">一氧化碳报警器</div></div>
                </div>
            </div>
            <div class="check-info" @click="handleCollpasedTool" v-if="isCollpasedTool">查看全部 9 项</div>
            <div class="check-info" @click="handleCollpasedTool" v-if="!isCollpasedTool">收起</div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'RoomsIntro',
    data () {
      return {
        isCollpased: true,
        isCollpasedTool:true,
        roomIntro:{
            notCollpased:{
                关于此房源: 'I hope you have a great stay, just like at your own home!'
            },
            isCollpased:{
                房源细节: 'I hope you have a great stay, just like at your own home! I hope you have a great stay, just like at your own home! I hope you have a great stay, just like at your own home! I hope you have a great stay, just like at your own home! I hope you have a great stay, just like at your own home!',
                住客须知: 'I hope you have a great stay, just like at your own home! I hope you have a great stay, just like at your own home! I hope you have a great stay, just like at your own home! I hope you have a great stay, just like at your own home! I hope you have a great stay, just like at your own home!',
                其他: 'I hope you have a great stay, just like at your own home! I hope you have a great stay, just like at your own home! I hope you have a great stay, just like at your own home! I hope you have a great stay, just like at your own home! I hope you have a great stay, just like at your own home! I hope you have a great stay, just like at your own home!'
            }
       }
      }
    },
    methods:{
        handleCollpasedIntro(){
            this.isCollpased = !this.isCollpased
        },
        handleCollpasedTool(){
            this.isCollpasedTool = !this.isCollpasedTool
        }
    },
    components: {

    },
    computed:{
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
.room-detail{
        border-top:8px solid rgb(222,222,222,0.4);
}
.room-intro .text{
    margin-top: 12px;
    font-size:15px;
    font-weight: 300;
    line-height:1.43;
}
.room-intro .block{
    margin-top: 15px
}
.tool-bar{
    font-size: 10px;
    display: flex;
    text-align: center;
    padding: 15px 5px 0 10px;
    justify-content: flex-start;
    flex-wrap: wrap
}
._12to336{
    margin-right: 8px;
    width: 54px
}

</style>
