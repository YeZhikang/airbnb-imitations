<template>
  <div class="page">
      <div class="room-detail">
        <div class="room-intro">
            <div class="block" style="margin-top:0;display:flex;justify-content:space-between">
                <h5>房客评价</h5>
                <div class="fxal">
                    <p style="margin-right:10px;font-size:14px;font-weight:500">{{comments.total}} 条</p>
                    <img src="../../assets/rooms-comment.png" width="75px" height="20px" alt="">
                </div>
            </div>
            <div style="margin-top:12px">
                <div class="fxal fxbt ">
                    <div class="fxal">
                        <p class="comment-font">如实描述</p>
                        <img src="../../assets/rooms-comment.png" width="75px" height="20px">
                    </div>
                    <div class="fxal">
                        <p class="comment-font">沟通交流</p>
                        <img src="../../assets/rooms-comment.png" width="75px" height="20px">
                    </div>
                </div>
                <div class="fxal fxbt mt10">
                    <div class="fxal">
                        <p class="comment-font">干净卫生</p>
                        <img src="../../assets/rooms-comment.png" width="75px" height="20px">
                    </div>
                    <div class="fxal">
                        <p class="comment-font">位置便利</p>
                        <img src="../../assets/rooms-comment.png" width="75px" height="20px">
                    </div>
                </div>
                <div class="fxal fxbt mt10">
                    <div class="fxal">
                        <p class="comment-font">入住顺利</p>
                        <img src="../../assets/rooms-comment.png" width="75px" height="20px">
                    </div>
                    <div class="fxal">
                        <p class="comment-font">高性价比</p>
                        <img src="../../assets/rooms-comment.png" width="75px" height="20px">
                    </div>
                </div>
                <div class="fxal mt25">
                    <img class="round avatar-small" :src="commentUser.avatarImg">
                    <div class="ml15">
                        <strong class="font-mid">{{commentUser.userName}}</strong>
                        <p class="font-small">{{commentUser.commentTime}}</p>
                    </div>
                </div>
                <div class="mt10">
                    <div class="check-info" style="font-weight:400">翻译</div>
                    <p class="mt10 wb font-mid" style="font-weight:300">
                        {{commentUser.text}}
                    </p>
                    <div class="check-info mt10" style="font-weight:400;">查看更多评价</div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "RoomsComments",
    data () {
      return {
        comments:{
            total: 55,
        },
        commentUser:{
            userName: 'Len',
            commentTime: '2019年10月',
            avatarImg: 'https://z1.muscache.cn/im/pictures/user/b67c2e5d-12dc-4d02-a1ea-3df19cb39108.jpg?aki_policy=profile_x_medium',
            text: 'Nicholas offers a great space at a good price in a nice, quiet neighborhood with cafes and markets. It is a seven minute walk to the crowds in Old Town. The space was perfect for five people. Three large rooms with beds, big kitchen, nice bathroom, high ceilings, lots of natural light. We really liked Krakow and would certainly try to stay here again if we came back.',
        }
      }
    },
    components: {

    }
  }
</script>

<style scoped >

 
</style>
