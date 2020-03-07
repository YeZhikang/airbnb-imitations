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
      </div >
    </div>
  </div>
</template>


<script>
  import '../static/css/button.css'
  // @ is an alias to /src
  import IndexHeader from "../components/index/IndexHeader";
  export default {
    name: 'Home',
    data(){
      return{
        isTrue:true,
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
        recent: 0
      }
    },
    components: {IndexHeader},
    methods:{
      selectedCity(index){
        this.cityArr[index].isSelected = true
        this.cityArr[this.recent].isSelected = false
        this.recent = index
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
    border-radius: 6px;
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
    font-weight: 400;
  }
</style>
