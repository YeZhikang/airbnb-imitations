<template>
  <div class="page">
     <div class="room-detail">
        <div class="room-room-intro">
          <div class="block fxal fxbt" style="margin-top:0;">
            <div>
              <h5>房源位置</h5>
              <p class="mt10" style="font-weight:300">{{locationMsg}}</p>
            </div>
            <img @click="checkMap()" alt="" src="https://z1.muscache.cn/airbnb/static/69081d6e8bba54df976595033b5d0e75.png">
          </div>
        </div>
     </div>
      <div v-if="showMap" id="container">
          <div @click="closeMap()" style="position:fixed;left:20px;top:20px;z-index:2000;padding:15px;background-color:white;border-radius:50%;box-shadow:0 0 6px darkgray">
            <svg viewBox="0 0 12 12" role="img" aria-label="关闭" focusable="false" style="height: 12px; width: 12px; display: block; fill: currentcolor;"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fill-rule="evenodd"></path></svg>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MapLoader from '../../utils/remoteLoad'
  export default {
    name: "RoomsLocation",
    data () {
      return {
          location: {
            city: "克拉科夫",
            province: "小波兰省(Malopolskie)",
            country: "波兰"
          },
          showMap: false,
      }
    },
    components: {

    },
    methods:{
      checkMap(){
        this.showMap = !this.showMap;
        this.$nextTick(() => {
          const width = window.innerWidth;
          const height = window.innerHeight;
          const map = document.querySelector("#container")
          map.style.width = width + 'px'
          map.style.height = height + 'px'
          let that = this
          MapLoader().then(AMap => {
            console.log('地图加载成功')
            that.map = new AMap.Map('container', {
              center: [110.000923, 30.675807],
              zoom: 11
            })
          }, e => {
            console.log('地图加载失败' ,e)
          })
        })
      },
      closeMap(){
        this.showMap = false
      }
    },
    computed:{
      locationMsg(){
        return `${this.location.city}, ${this.location.province}, ${this.location.country}`
      }
    },
    mounted(){

    },
  }
</script>

<style scoped>
#container{
  top:0;
  z-index: 999;
  background: white;
  position: fixed;
  animation: moveMap 0.3s;
  transform-origin: 100% 100%;
}
@keyframes moveMap {
  from {transform: scaleY(0)}
  to {transform: scaleY(1)}
}

</style>
