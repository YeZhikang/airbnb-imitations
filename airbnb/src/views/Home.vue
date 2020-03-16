<template>
  <div>
    <div class="home">
      <div>
        <index-header></index-header>
        <div>
          <div class="normal-block" style="margin-top: 48px">
            <h3>国内热门目的地</h3>
          </div>
          <div class="slide">
            <div
                    @click="selectedCity(index)"
                    v-for="(city,index) in cityArr"
                    :key="index"
                    :class="{'city-box':isTrue,'city-box-active':cityArr[index].isSelected}"
            >
              <div class="city-info">
                <h4>{{city.name}}</h4>
                <p>{{city.info}}</p>
              </div>
            </div>
            <div style="min-width: 6%"></div>
          </div>
          <div class="slide" style="margin-top: 18px">
            <div
                    class="room-info"
                    v-for="(room,index) in roomArr "
                    :key="index"
                    @click="handleRoomPush(room)"
            >
              <div class="room-img" :style="{backgroundImage:roomArr[index].imgUrl}"></div>
              <div style="margin-top: 5px;white-space: normal;text-overflow:ellipsis;">
                <p style="color: #9b3143;font-size: 11px;font-weight: 500">{{room.context}}</p>
                <div
                        class="room-intro"
                        style=" font-size: 14px;color: rgb(55,55,55);max-height: 40px;line-height: 20px;text-overflow:ellipsis;overflow: hidden"
                >{{room.intro}}</div>
                <div style="font-size: 10px;font-weight: 300">{{room.price}}</div>
                <div style="display: flex;justify-content: flex-start;align-items: center">
                  <img src="../assets/stars.png" alt="5星" style="height: 16px" />
                  <div style="font-weight: 500;font-size: 12px;margin-left: 5px;">163</div>
                </div>
              </div>
            </div>
            <div style="min-width: 6%"></div>
          </div>
          <div class="normal-cyan normal">查看更多{{selected.name}}的房源</div>
          <div class="normal-block" style="margin-top: 48px">
            <h3 style="padding-bottom: 16px">爱彼迎旅行保障</h3>
            <div class="card-normal">
              <div class="card-item">
                <img
                        class="card-img"
                        src="https://z1.muscache.cn/airbnb/static/5308a6c455e5061137f8ae9e9a9ac4fc.png"
                        alt
                />
                <p class="card-intro">
                  <span class="card-intro-title">安心房源保障</span>人工审核所有中国房源页面信息，入住更放心
                </p>
              </div>
              <div class="card-item">
                <img
                        class="card-img"
                        src="https://z1.muscache.cn/airbnb/static/f142a9a066b66fcfea524d7c2f5dcf63.png"
                        alt
                />
                <p class="card-intro">
                  <span class="card-intro-title">专业中文客服</span>(86)400-022-1666、(86) 010-8783-3463，24 小时服务
                </p>
              </div>
              <div class="card-item">
                <img
                        class="card-img"
                        src="https://z1.muscache.cn/airbnb/static/da0afd2d0100f3c056e5c6778c1bed22.png"
                        alt
                />
                <p class="card-intro">
                  <span class="card-intro-title">旅行安全保障</span>多重风险控制设计，全方位保障您的行程安全
                </p>
              </div>
            </div>
          </div>
          <div class="normal-block" style="margin-top: 48px;margin-bottom: 10px">
            <h3 class="title" style="line-height: 0.8">全球热门房源精选</h3>
            <span class="span-normal">精选舒适房源供你挑选</span>
          </div>

          <div class="global-room-block normal-block">
            <div class="global-room" v-for="(room,index) in globalRoomArr" :key="index">
              <img class="global-room-image" :src="room.imgURL" alt="img" />
              <p :style="{color:room.fontColor,fontSize:'12px',fontWeight:600}">{{room.baseInfo}}</p>
              <p
                      class="room-context"
                      style="font-size: 14px;line-height: 16px;font-weight: 800;margin: 3px 0"
              >{{room.context}}</p>
              <p class="room-price">{{room.price}}</p>
              <div style="display: flex;justify-content: flex-start;align-items: center">
                <img src="../assets/stars.png" alt="5星" style="height: 16px" />
                <div class="room-comment-num">163</div>
              </div>
            </div>
          </div>
          <div class="normal-cyan normal" style="margin-top: 15px">查看更多房源</div>
          <div class="normal-block" style="margin-top: 40px;margin-bottom: 20px">
            <h3 style="line-height: 0.8" class="title">精选旅行故事</h3>
          </div>
          <div class="global-room-block normal-block">
            <div
                    style="padding-bottom: 5px"
                    class="global-room"
                    v-for="(story,index) in travelStories"
                    :key="index"
            >
              <div class="use-background" :style="{backgroundImage: `url(${story.imgURL})`}"></div>
              <div class="city-intro" style="padding: 8px 0 4px 0;font-weight: 300">
                <span class="city-name">{{story.cityName}}</span>
                {{story.title}}
              </div>
              <div style="display: flex;align-items: center;margin-bottom: 12px">
                <svg
                        viewBox="0 0 16 16"
                        role="img"
                        aria-label="“赞”的数量"
                        focusable="false"
                        style="height:12px;fill:#767676"
                >
                  {
                  <!-- -->
                  /* If you update this, update thumbs-up-alt-mirror.svg too */
                  <!-- -->
                  }
                  <path
                          d="m14.5 7.63c0-.97-.8-1.63-2-1.63l-4.5.01c.04-.05.11-.12.2-.21.39-.4 1.04-1.06 1.41-1.87.31-.68.46-1.61.37-2.32-.09-.65-.59-1.61-1.61-1.61-.44 0-1.23.2-1.6 1.52a3.12 3.12 0 0 0 -.05.22c-.14.62-.44 1.93-3.11 2.86-2.4.82-3.61 2.81-3.61 5.9 0 3.44 1.98 5.5 5.3 5.5h6.2c1.2 0 2-.65 2-1.63 0-.33-.09-.64-.24-.89.62-.34.74-.94.74-1.36a1.66 1.66 0 0 0 -.24-.9c.65-.37.74-1.01.74-1.35 0-.28-.06-.77-.45-1.14.29-.28.45-.66.45-1.11"
                  />
                </svg>
                <span
                        style="font-weight: 300;font-size: 12px;line-height: 18px;margin-left: 3px"
                >{{story.likeNum}}</span>
                <svg
                        viewBox="0 0 16 16"
                        role="img"
                        aria-label="评论数量"
                        focusable="false"
                        style="height:12px;margin-left:8px;fill:#767676"
                >
                  {
                  <!-- -->
                  /* If you update this, update comment-alt-mirror.svg too */
                  <!-- -->
                  }
                  <path
                          d="m4.5 7h4c .28 0 .5.23.5.5s-.22.5-.5.5h-4c-.28 0-.5-.23-.5-.5s.22-.5.5-.5m-.5-2.5c0-.28.22-.5.5-.5h7c .28 0 .5.23.5.5s-.23.5-.5.5h-7c-.28 0-.5-.23-.5-.5m8.5-3.5h-9c-1.38 0-2.5 1.12-2.5 2.5v12c0 .25.18.45.42.49.03.01.05.01.08.01.21 0 .41-.14.47-.34.56-1.69 2.74-3.66 7.03-3.66h3.5c1.38 0 2.5-1.12 2.5-2.5v-6c0-1.38-1.12-2.5-2.5-2.5"
                  />
                </svg>
                <span
                        style="font-weight: 300;font-size: 12px;;margin-left: 3px"
                >{{story.commentNum}}</span>
              </div>
            </div>
          </div>
          <div class="normal-cyan normal" style="margin-top: 15px">查看更多房源</div>
          <div class="normal-block" style="margin-top: 48px;margin-bottom: 10px">
            <h3 class="title" style="line-height: 0.8">高分体验</h3>
            <span class="span-normal">在下趟旅程中，不妨预订由本地达人组织的体验活动。</span>
          </div>
          <div class="global-room-block normal-block">
            <div class="global-room" v-for="(experience,index) in experienceArr" :key="index">
              <img class="global-room-image" :src="experience.imgURL" alt="img" />
              <p :style="{fontSize:'12px',fontWeight:400,color:'#484848'}">{{experience.country}}</p>
              <p
                      class="room-context"
                      style="font-size: 14px;line-height: 16px;font-weight: 800;margin: 3px 0;word-wrap: normal"
              >{{experience.title}}</p>
              <p class="room-price">{{experience.price}}</p>
              <div style="display: flex;justify-content: flex-start;align-items: center;">
                <div class="exp-comment-num" style="margin-left: 0;">{{experience.score[0]}}</div>
                <img src="../assets/stars.png" alt="5星" style="height: 16px;margin-left: 3px" />
                <div class="exp-comment-num2">(163)</div>
              </div>
            </div>
          </div>
          <div class="normal-cyan normal" style="margin-top: 15px">查看更多体验</div>

          <div
                  class="normal-block"
                  style="display: flex;justify-content: space-between;padding: 25px 0;margin-top:30px;border-top: 1px solid #e7e7e7;flex-wrap: wrap"
          >
            <select name="language" class="language-select" preval="中文 (简体)">
              <option value="中文 (简体)">中文 (简体)</option>
              <option value="英文 (English)">English</option>
            </select>
            <select
                    style="margin-bottom: 20px"
                    name="language"
                    class="language-select"
                    preval="CNY 人民币"
            >
              <option value="CNY 人民币">CNY 人民币</option>
              <option value="USD 美元">USD 美元</option>
            </select>
            <div class="link">
              <router-link :to="{name:'login'}">注册/登录</router-link>
            </div>
            <div class="link">下载应用</div>
            <div class="link">帮助</div>
            <div class="link">网站地图</div>
            <div class="link">条款</div>
            <div class="link">隐私政策</div>
          </div>
          <div class="normal-block" style="margin-top: 0px;margin-bottom: 20px;padding-left: 8px">
            <p style="font-size: 10px;color: darkgrey;margin-bottom: 5px">Airbnb ©</p>
            <svg
                    viewBox="0 0 1000 1000"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    style="height:1.5em;width:1.5em;display:block;fill:#FF5A5F"
            >
              <path
                      d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  import "../static/css/button.css";
  import "../static/css/card.css";
  import "../static/css/font.css";
  import "../static/css/input.css";
  // @ is an alias to /src
  import IndexHeader from "../components/index/IndexHeader";
  export default {
    name: "Home",
    data() {
      return {
        isTrue: true,
        roomArr: [
          {
            context: "整间阁楼·1室1.5卫1床",
            intro: "ONEHOUSE一间/ loft/投影仪/宽窄巷子/夜猫子",
            price: "每晚 ¥241",
            comment: [5, 188],
            imgUrl:
                    "url(https://z1.muscache.cn/im/pictures/cd1b77e4-28ea-42f0-a5be-84cec48959cd.jpg?aki_policy=large)"
          },
          {
            context: "整间阁楼·1室1.5卫1床",
            intro: "ONEHOUSE一间/ loft/投影仪/宽窄巷子/夜猫子",
            price: "每晚 ¥241",
            comment: [5, 188],
            imgUrl:
                    "url(https://z1.muscache.cn/im/pictures/96e9dbb4-65c3-4710-b0cd-5ff70fdaa6b6.jpg?aki_policy=large)"
          },
          {
            context: "整间阁楼·1室1.5卫1床",
            intro: "ONEHOUSE一间/ loft/投影仪/宽窄巷子/夜猫子",
            price: "每晚 ¥241",
            comment: [5, 188],
            imgUrl:
                    "url(https://z1.muscache.cn/im/pictures/cd1b77e4-28ea-42f0-a5be-84cec48959cd.jpg?aki_policy=large)"
          },
          {
            context: "整间阁楼·1室1.5卫1床",
            intro: "ONEHOUSE一间/ loft/投影仪/宽窄巷子/夜猫子",
            price: "每晚 ¥241",
            comment: [5, 188],
            imgUrl:
                    "url(https://z1.muscache.cn/im/pictures/96e9dbb4-65c3-4710-b0cd-5ff70fdaa6b6.jpg?aki_policy=large)"
          }
        ],
        cityArr: [
          {
            name: "成都",
            info: "19000+房源",
            isSelected: true
          },
          {
            name: "杭州",
            info: "19000+房源",
            isSelected: false
          },
          {
            name: "成都",
            info: "19000+房源",
            isSelected: false
          },
          {
            name: "杭州",
            info: "19000+房源",
            isSelected: false
          },
          {
            name: "成都",
            info: "19000+房源",
            isSelected: false
          },
          {
            name: "杭州",
            info: "19000+房源",
            isSelected: false
          }
        ],
        recent: 0,
        selected: {
          name: "成都",
          info: "19000+房源",
          isSelected: true
        },
        globalRoomArr: [
          {
            baseInfo: "整套公寓 1室1卫1厅",
            imgURL:
                    "https://z1.muscache.cn/im/pictures/ac0a5754-031b-4d3e-a134-62593737ecf6.jpg?aki_policy=large",
            context: "Romantic 1 bed with stunning views",
            price: "每晚 ¥771",
            fontColor: "#734f21",
            comments: 127
          },
          {
            baseInfo: "整套公寓 1室1卫1厅",
            imgURL:
                    "https://z1.muscache.cn/im/pictures/19755676/c2d3162d_original.jpg?aki_policy=large",
            context: "PORTA33 I PORTO PENTHOUSE Duplex at Rua das Flores",
            price: "每晚 ¥771",
            comments: 127,
            fontColor: "#341e13"
          },
          {
            baseInfo: "整套公寓 1室1卫1厅",
            imgURL:
                    "https://z1.muscache.cn/im/pictures/881d76c6-4de6-4808-9f0b-36462b6c48a2.jpg?aki_policy=large",
            context: "SUNSET CAVE HOUSE IN OIA",
            price: "每晚 ¥771",
            comments: 127,
            fontColor: "#572533"
          },
          {
            baseInfo: "整套公寓 1室1卫1厅",
            imgURL:
                    "https://z1.muscache.cn/im/pictures/38443604/307c98b4_original.jpg?aki_policy=large",
            context: "Cabin #3 - Alfie the A-Frame",
            price: "每晚 ¥771",
            comments: 127,
            fontColor: "#14275e"
          }
        ],
        travelStories: [
          {
            imgURL:
                    "https://z1.muscache.cn/im/pictures/c6a66b67-57d4-4206-90b9-82d94329762a.jpg?aki_policy=x_large",
            cityName: "广州",
            title: "房东说，欢迎体验你的 “珠江之夜”。",
            likeNum: "49",
            commentNum: "3"
          },
          {
            imgURL:
                    "https://z1.muscache.cn/im/pictures/694ef74b-4caf-4a10-98c4-78215bf0fb6c.jpg?aki_policy=x_large",
            cityName: "广州",
            title: "房东说，欢迎体验你的“珠江之夜”。",
            likeNum: "49",
            commentNum: "3"
          },
          {
            imgURL:
                    "https://z1.muscache.cn/im/pictures/41d3443a-97bf-401b-9acc-c5ba9ef1bf5e.jpg?aki_policy=x_large_portrait",
            cityName: "广州",
            title: "房东说，欢迎体验你的 “珠江之夜”。",
            likeNum: "49",
            commentNum: "3"
          },
          {
            imgURL:
                    "https://z1.muscache.cn/im/pictures/ed07ac15-ea02-4b73-8ada-9e511618f9dd.jpg?aki_policy=x_large_portrait",
            cityName: "广州",
            title: "房东说，欢迎体验你的 “珠江之夜”。",
            likeNum: "49",
            commentNum: "3"
          }
        ],
        experienceArr: [
          {
            imgURL:
                    "https://z1.muscache.cn/im/pictures/f61fb2a1-bd9e-4f05-ae0f-ad1194676efb.jpg?aki_policy=large",
            country: "葡萄牙",
            title: "里斯本极品美食",
            price: "每人 ¥484",
            score: [4.99, 1442]
          },
          {
            imgURL:
                    "https://z1.muscache.cn/im/pictures/2f690952-a2e3-47bc-8736-b98ec3ba60c4.jpg?aki_policy=large",
            country: "日本",
            title: "日本武士之魂",
            price: "每人 ¥484",
            score: [4.99, 1442]
          },
          {
            imgURL:
                    "https://z1.muscache.cn/im/pictures/354171df-e840-4310-a12b-bc8562c4398f.jpg?aki_policy=large",
            country: "法国",
            title: "1944年6月6日D-Day（诺曼底登陆日）",
            price: "每人 ¥484",
            score: [4.99, 1442]
          },
          {
            imgURL:
                    "https://z1.muscache.cn/im/pictures/7af6b5b6-03ac-42a5-8385-76c1cc986988.jpg?aki_policy=large",
            country: "哥伦比亚",
            title: "哥伦比亚安第斯山骑马之旅",
            price: "每人 ¥484",
            score: [4.99, 1442]
          }
        ]
      };
    },
    components: { IndexHeader },
    methods: {
      selectedCity(index) {
        if (index === this.recent) {
          return;
        }
        this.cityArr[index].isSelected = true;
        this.cityArr[this.recent].isSelected = false;
        this.recent = index;
        this.selected = this.cityArr[index];
      },
      handleRoomPush(room) {
        this.$router.push({
          name: "rooms",
          params: {
            roomId: room.roomId
          }
        });
      },

    },
    mounted() {

    }
  };
</script>

<style scoped>
  *:not(.normal) {
    margin: 0;
  }
  .normal-block {
    width: 88%;
    margin: 0 auto;
  }

  .normal-block > h3 {
    font-weight: 500;
    color: rgb(99, 95, 95);
    font-size: 17px;
  }

  .slide {
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

  .city-box:first-child {
    margin-left: 6%;
  }

  /*
    question
     */
  .city-box:nth-child(6) {
    margin-right: 0;
  }

  .room-info:nth-child(4) {
    margin-right: 0;
  }

  .city-box {
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
    background-color: rgb(248, 248, 248);
    transition: 0.3s ease;
  }

  .city-box-active {
    background-color: rgb(56, 130, 136);
    color: white;
  }

  .city-info > h4 {
    font-size: 14px;
    font-weight: 400;
  }

  .city-info > p {
    font-size: 12px;
    font-weight: 300;
  }

  .room-info {
    min-width: 177px;
    margin-right: 8px;
    width: 177px;
    /*background-image: url(https://z1.muscache.cn/im/pictures/96e9dbb4-65c3-4710-b0cd-5ff70fdaa6b6.jpg?aki_policy=large);*/
  }

  .room-img {
    height: 118px;
    background-size: cover;
    width: 100%;
  }

  .room-info:first-child {
    margin-left: 6%;
  }

  .room-intro {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 500;
  }
</style>
