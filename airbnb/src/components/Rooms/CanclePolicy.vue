<template>
  <div class="page">
    <div class="room-detail">
      <div class="room-intro">
        <div @click="checkPolicy" class="block fxal fxbt">
          <div>
            <h5>退订政策</h5>
            <p
              class="mt15"
              style="font-weight:300"
            >{{policyInfo.policyLevel}} · {{policyInfo.limitCancle}}</p>
          </div>
          <div>
            <svg
              viewBox="0 0 18 18"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style="height: 20px; width: 20px; display: block; fill: rgb(111, 111, 111);"
            >
              <path
                d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div id="container" v-if="isChecking">
      <div @click="closePolicyCheck()" style="position:absolute;top:30px;left:30px;">
        <svg
          viewBox="0 0 12 12"
          role="img"
          aria-label="关闭"
          focusable="false"
          style="height: 12px; width: 12px; display: block; fill: currentcolor;"
        >
          <path
            d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <div style="text-align:center;margin-top:22px;font-size:18px">退订政策</div>
      <div style="padding:22px 30px">
        <p style="font-weight:500">{{policyInfo.policyLevel}} · {{policyInfo.limitCancle}}</p>
        <p style="font-weight:300">{{policyInfo.extra}}</p>
      </div>
      <div style="padding:15px 30px">
          <div>
            <svg
            viewBox="0 0 24 24"
            role="presentation"
            focusable="false"
            style="height: 24px; width: 24px; fill: rgb(0, 132, 137);"
            aria-hidden="false"
            >
            <path
                d="m12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12zm-5.9 11.4c-.5-.5-1.3-.6-1.9-.1-.5.5-.5 1.3 0 1.8l4.2 4.6c.5.5 1.4.5 1.9 0l9.3-9.7c.5-.5.5-1.3 0-1.8s-1.3-.5-1.8 0l-8.4 8.7z"
            />
            </svg>
          </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "CanclePolicy",
  data() {
    return {
      policyInfo: {
        policyLevel: "中等",
        limitCancle: "48小时内可免费取消预定",
        extra:
          "之后，距离入住日期至少5天前取消预订可获得全额退款（爱彼迎服务费除外）。"
      },
      isChecking: false
    };
  },
  methods: {
    checkPolicy() {
      this.isChecking = true;
      this.$nextTick(() => {
        const container = document.querySelector("#container");
        const width = window.innerWidth;
        const height = window.innerHeight;
        container.style.width = width + "px";
        container.style.height = height + "px";
      });
    },
    closePolicyCheck() {
      this.isChecking = false;
    }
  },
  components: {}
};
</script>

<style scoped>
#container {
  top: 0;
  z-index: 999;
  background: white;
  position: fixed;
  animation: moveMap 0.3s;
  transform-origin: 100% 100%;
}

@keyframes moveMap {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
</style>
