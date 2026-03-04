<template>
  <view class="container">
    <image class="splash-image" src="/static/splash.png" mode="aspectFill"></image>
  </view>
</template>

<script>
export default {
  name: 'SplashPage',
  onShow() {
    setTimeout(() => {
      uni.redirectTo({
        url: '/pages/guide/guide'
      });
    }, 3000);
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>