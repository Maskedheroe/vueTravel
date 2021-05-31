<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="header__back">
        <div class="iconfont back__icon">&#xe685;</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: ' '
}
</script>

<style lang='scss' scoped>
@import '../../../assets/styles/varible.scss';

.header {
  position: relative;
  overflow: hidden;
  text-align: center;
  color: #fff;
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgColor;
  font-size: .32rem;
  &__back {
    top: 0;
    left: 0;
    position: absolute;
    width: .64rem;
    text-align: center;
    color: #fff;
    .iconfont {
      font-size: .4rem;
    }
  }
}
</style>
