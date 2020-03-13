<template>
  <div class="page">
    <div class="page">
      <div class="room-detail">
        <div class="room-room-intro">
          <h5>房东</h5>
          <div class="block fxal mt20">
            <img class="round avatar-small" :src="ownerInfo.avatarImg" />
            <div class="ml15">
              <strong class="font-mid">{{ownerInfo.userName}}</strong>
              <p class="font-small" style="font-weight:300">
                共 {{ownerInfo.totalCommentNum}} 条评价
                <span v-if="ownerInfo.isConfirmed">· 已验证</span>
              </p>
            </div>
          </div>
          <p class="font-mid mt20" style="font-weight:300">{{ownerInfo.introduce}}</p>
          <div class="check-info mt10" style="font-weight:400;">联系房东</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "RoomsOwner",
  data() {
    return {
      ownerInfo: {
        userName: "Nicholas",
        isConfirmed: true,
        totalCommentNum: 317,
        avatarImg:
          "https://z1.muscache.cn/im/users/814738/profile_pic/1354739406/original.jpg?aki_policy=profile_x_medium",
        introduce:
          "Hello, I´m Nick,I´m an Englishman living in Krakow. I like to meet new people and I like to travel and explore  new places. I'm interested in music, food & cooking, sports, film and design. You are invited to my apartment, where I'll give you the keys, try to make you feel welcome, and to take good care of you and provide good tips for your stay.. "
      }
    };
  },
  components: {}
};
</script>

<style scoped>
</style>
