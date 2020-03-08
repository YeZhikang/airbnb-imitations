<template>
  <div class="home">
    <div>
      <index-header></index-header>
      <div>
        <div class="normal-block" style="margin-top: 48px">
          <h3>国内热门目的地</h3>
        </div>
        <div class="slide">
          <div @click="selectedCity(index)" v-for="(city,index) in cityArr" :key="index"
               :class="{'city-box':isTrue,'city-box-active':cityArr[index].isSelected}">
            <div class="city-info">
              <h4>{{city.name}}</h4>
              <p>{{city.info}}</p>
            </div>
          </div>
          <div style="min-width: 6%"></div>
        </div>
        <div class="slide" style="margin-top: 18px">
          <div class="room-info"  v-for="(room,index) in roomArr " :key="index">
            <div class="room-img"  :style="{backgroundImage:roomArr[index].imgUrl}">
            </div>
            <div style="margin-top: 5px;white-space: normal;text-overflow:ellipsis;">
              <p style="color: #9b3143;font-size: 11px;font-weight: 500">整间阁楼·1室1.5卫1床</p>
              <div class="room-intro" style=" font-size: 14px;color: rgb(55,55,55);max-height: 40px;line-height: 20px;text-overflow:ellipsis;overflow: hidden">ONEHOUSE一间/ loft/投影仪/宽窄巷子/夜猫子
              </div>
              <div style="font-size: 10px;font-weight: 300">每晚 ¥241</div>
              <div style="display: flex;justify-content: flex-start;align-items: center">
                <img src="../assets/stars.png" alt="5星" style="height: 16px">
                <div style="font-weight: 500;font-size: 12px;margin-left: 5px;">163</div>
              </div>
            </div>
          </div>
          <div style="min-width: 6%"></div>
        </div>
        <div
          class="normal"
          style="font-size: 14px;
            line-height: 20px;color: rgb(56,130,136);border-color: rgb(56,130,136);width: 88%;margin: 20px auto;
            padding: 7px 0;font-weight: 500"
        >
          查看更多{{selected.name}}的房源
        </div>
        <div class="normal-block" style="margin-top: 48px">
          <h3 style="padding-bottom: 16px">爱彼迎旅行保障</h3>
          <div class="card-normal">
            <div class="card-item">
              <img class="card-img" src="https://z1.muscache.cn/airbnb/static/5308a6c455e5061137f8ae9e9a9ac4fc.png" alt="">
                <p class="card-intro"><span class="card-intro-title">安心房源保障</span>人工审核所有中国房源页面信息，入住更放心</p>
            </div>
            <div class="card-item">
              <img class="card-img" src="https://z1.muscache.cn/airbnb/static/f142a9a066b66fcfea524d7c2f5dcf63.png" alt="">
              <p class="card-intro"><span class="card-intro-title">专业中文客服</span>(86)400-022-1666、(86) 010-8783-3463，24 小时服务</p>
            </div>
            <div class="card-item">
              <img class="card-img" src="https://z1.muscache.cn/airbnb/static/da0afd2d0100f3c056e5c6778c1bed22.png" alt="">
              <p class="card-intro"><span class="card-intro-title">旅行安全保障</span>多重风险控制设计，全方位保障您的行程安全</p>
            </div>
          </div>
        </div>
      </div >
    </div>
  </div>
</template>


<script>
  import '../static/css/button.css'
  import '../static/css/card.css'

  // @ is an alias to /src
  import IndexHeader from "../components/index/IndexHeader";
  export default {
    name: 'Home',
    data(){
      return{
        isTrue:true,
        roomArr:[
          {
            context:'',
            intro: '',
            price: '',
            comment: [5,188],
            imgUrl:'url(https://z1.muscache.cn/im/pictures/cd1b77e4-28ea-42f0-a5be-84cec48959cd.jpg?aki_policy=large)'
          },
          {
            context:'',
            intro: '',
            price: '',
            comment: [5,188],
            imgUrl:'url(https://z1.muscache.cn/im/pictures/96e9dbb4-65c3-4710-b0cd-5ff70fdaa6b6.jpg?aki_policy=large)'
          },
          {
            context:'',
            intro: '',
            price: '',
            comment: [5,188],
            imgUrl:'url(https://z1.muscache.cn/im/pictures/cd1b77e4-28ea-42f0-a5be-84cec48959cd.jpg?aki_policy=large)'
          },
          {
            context:'',
            intro: '',
            price: '',
            comment: [5,188],
            imgUrl:'url(https://z1.muscache.cn/im/pictures/96e9dbb4-65c3-4710-b0cd-5ff70fdaa6b6.jpg?aki_policy=large)'
          }
        ],
        cityArr:[
          {
            name: "成都",
            info: '19000+房源',
            isSelected: true,
          }, {
            name: '杭州',
            info: '19000+房源',
            isSelected: false,
          }, {
            name: "成都",
            info: '19000+房源',
            isSelected: false,
          }, {
            name: '杭州',
            info: '19000+房源',
            isSelected: false,
          },{
            name: "成都",
            info: '19000+房源',
            isSelected: false,
          },
          {
            name: '杭州',
            info: '19000+房源',
            isSelected: false,
          }],
        recent: 0,
        selected:{
          name: "成都",
          info: '19000+房源',
          isSelected: true,
        }
      }
    },
    components: {IndexHeader},
    methods:{
      selectedCity(index){
        if(index === this.recent){
          return
        }
        this.cityArr[index].isSelected = true
        this.cityArr[this.recent].isSelected = false
        this.recent = index
        this.selected = this.cityArr[index]
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
  }
  .normal-block{
    width: 88%;
    margin: 0 auto;
  }

  .normal-block>h3{
    font-weight: 500;
    color: rgb(99,95,95);
    font-size: 17px;
  }

  .slide{
    margin-top: 16px;
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .slide::-webkit-scrollbar {
    display: none;
  }

  .city-box:first-child{
    margin-left: 6%;
  }

  /*
  question
   */
  .city-box:nth-child(6){
    margin-right: 0;
  }

  .room-info:nth-child(4){
    margin-right: 0;
  }



  .city-box{
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 8px;
    flex: 1;
    min-width: 76px;
    overflow: hidden;
    width: 76px;
    height: 58px;
    border-radius: 4px;
    background-color: rgb(248,248,248);
    transition: 0.3s ease;
  }



  .city-box-active{
    background-color: rgb(56,130,136);
    color: white;
  }

  .city-info>h4{
    font-size: 14px;
    font-weight: 400;
  }

  .city-info>p{
    font-size: 12px;
    font-weight: 300;
  }

  .room-info{
    min-width: 177px;
    margin-right: 8px;
    width: 177px;
    /*background-image: url(https://z1.muscache.cn/im/pictures/96e9dbb4-65c3-4710-b0cd-5ff70fdaa6b6.jpg?aki_policy=large);*/
  }

  .room-img{
    height: 118px;
    background-size: cover;
    width: 100%;
  }

  .room-info:first-child{
    margin-left: 6%;
  }

  .room-intro{
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 500;
  }


</style>
