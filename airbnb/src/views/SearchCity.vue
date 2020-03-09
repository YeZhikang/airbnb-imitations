<template>
    <div class="fixed-search" style="position: fixed;top:0;width: 100%;background-color: white;padding: 15px 0;">
        <div style="display: flex;height:40px;align-items: center;width: 88%;margin: 0 auto;padding: 5px 0;box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.01), 0px 3px 18px rgba(0, 0, 0, 0.12) !important">
            <div style="padding: 5px 10px 5px 18px" class="_h6ib8e">
                <svg  viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style="height:16px;width:16px;display:block;fill:#484848;font-weight: 300"><path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>
            </div>
            <input ref="input" placeholder="搜「北京」试试" class="input-searching" type="text">
        </div>
        <div class="search-option">
            <p style="font-size: 13px">最近搜索</p>
            <button class="city-history"><svg viewBox="0 0 15 15" role="presentation" aria-hidden="true" focusable="false" style="padding-right: 8px;height: 14px; width: 14px; display: block; fill: rgb(76, 76, 76);"><path d="M7.5 14.25A6.758 6.758 0 0 1 .75 7.5 6.757 6.757 0 0 1 7.5.75a6.758 6.758 0 0 1 6.75 6.75 6.758 6.758 0 0 1-6.75 6.75m0-12A5.256 5.256 0 0 0 2.25 7.5a5.256 5.256 0 0 0 5.25 5.25 5.256 5.256 0 0 0 5.25-5.25A5.256 5.256 0 0 0 7.5 2.25m1.334 7.92a.749.749 0 0 0 .336-1.005l-.92-1.842V4.5a.75.75 0 0 0-1.5 0v2.977l.01.22 1.068 2.138a.75.75 0 0 0 1.006.336"></path></svg>上海</button>
            <div style="margin-top: 15px">
                <button @click="changeOption(0)" :class="{'city-option-active': isActive,'city-option': !isActive}">国内热门目的地</button>
                <button @click="changeOption(1)" :class="{'city-option-active': !isActive,'city-option': isActive}">海外及港澳台热门目的地</button>
            </div>
            <div style="width: 90%;">
                <div v-if="isActive" style="display: flex;flex-wrap: wrap">
                    <button class="city-pop" v-for="(city,index) in cityArrLocal" :key="index">{{city}}</button>
                </div>
                <div v-if="!isActive" style="display: flex;flex-wrap: wrap">
                    <button class="city-pop" v-for="(city,index) in cityI18n" :key="index">{{city}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../static/css/font.css'
    export default {
        name: "SearchCity",
        data(){
            return{
                isActive: true,
                cityArrLocal:["北京","上海","成都","重庆","杭州","厦门","广州","西安"],
                cityI18n: ['大阪','东京','台北','香港','京都','曼谷','首尔','清迈']
            }
        },
        mounted() {
            this.$refs.input.focus()
        },
        methods:{
            changeOption(index){
                if(index === 0){
                    this.isActive = true
                }else{
                    this.isActive = false
                }
            }
        }
    }
</script>

<style scoped>
    span{
        margin-left: 6px;
        color: darkgrey;
        font-weight: 300;
        line-height: 48px;
        font-size: 15px;
    }

    .search-container{
        width: 90%;
        left: 5%;
        height: 48px;
        background-color: white;
        box-shadow: 0 10px 10px #efefef;
        margin: -24px auto;
        border-radius: 4px;
        position: absolute;
    }

    .input-searching{
        width: 200px;
        line-height: 22px;
        font-size: 15px;
        outline: none;
        border: none;
    }

    .search-option{
        padding: 44px 24px 24px 24px;
    }
</style>
