<template>
    <div class="rooms-header">
        <div class="container">
            <div class="searching" style="padding: 10px;background-color: rgba(111,111,111,0.6);border-radius: 50%"><svg viewBox="0 0 24 24" role="img" aria-label="查找更多房源" focusable="false" style="height:14px;width:14px;display:block;fill:#ffffff"><path d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1" fill-rule="evenodd"></path></svg></div>
            <div style="display: flex">
                <div class="searching" style="padding: 10px;background-color: rgba(111,111,111,0.6);border-radius: 50%">
                    <svg viewBox="0 0 24 24" fill="#ffffff" fill-opacity="0" stroke="#ffffff" stroke-width="1" focusable="false" aria-label="保存到心愿单" role="img" stroke-linecap="round" stroke-linejoin="round" style="height: 14px; width: 14px; display: block; overflow: visible;"><path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" stroke-linejoin="round"></path></svg>
                </div>
                <div style="height:34px;width:34px;padding-left: 28px">
                    <img style="width: 100%;height: 100%;" src="https://z1.muscache.cn/airbnb/static/packages/hero_avatar.5ef981d8.jpg" alt="" >
                </div>
            </div>
        </div>
        <div class="bg">
        </div>
        <div class="room-intro">
            <div class="room-title">
                <p class="room-lil-intro">{{titleInfo}}</p>
                <h3 style="font-size:17px;margin:7px 0">{{roomInfo.context}}</h3>
            </div>
            <div style="display:flex;flex-wrap:wrap">
                <div class="sp-tag sp-tag-comment">{{roomInfo.comment[0]}}分·{{roomInfo.comment[1]}}评论</div>
                <div class="sp-tag sp-tag-info">整套房子/公寓</div>
                <div class="sp-tag sp-tag-info">超赞房东</div>
            </div>
            <div class="feature" style="display:flex;flex-wrap:wrap;margin-top:8px">
                <div class="sp-tag sp-tag-gray">自助入住</div>
                <div class="sp-tag sp-tag-gray">可以做饭</div>
                <div class="sp-tag sp-tag-gray">可以停车</div>
                <div class="sp-tag sp-tag-gray">有洗衣机</div>
            </div>
            <div class="check-info">查看具体信息</div>
        </div>
        <div class="room-intro">
            <div class="sp-tag sp-tag-info" style="display:flex;align-items:center">
                <div class="logo" style="background-image: url(&quot;https://z1.muscache.cn/airbnb/static/packages/icon-uc-light-bulb.1ffc0407.gif&quot;);"></div>
                <div style="margin-left:10px;font-size:12px;font-weight:500;color:#484848">过去一周浏览量超过{{roomInfo.viewNum}}次</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RoomsHeader",
        data(){
            return{
                roomInfo:{
                    baseInfo: '整套公寓 1室1卫1厅',
                    imgURL:'https://z1.muscache.cn/im/pictures/38443604/307c98b4_original.jpg?aki_policy=large',
                    context: 'Cabin #3 - Alfie the A-Frame',
                    price: '每晚 ¥771',
                    location: '克拉科夫',
                    comment: [4.9,675],
                    viewNum: 500
                }
            }
        },
        computed:{
            titleInfo(){
                const [intro,info] = this.roomInfo.baseInfo.split(' ')
                return `${this.roomInfo.location}·${intro}·${info}`
            }
        }
    }
</script>

<style scoped>
</style>
