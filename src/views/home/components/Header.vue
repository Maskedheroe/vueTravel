<template>
  <div class="header">
    <div class="header__left">
      <div class="iconfont back_icon">&#xe685;</div>
    </div>
    <div class="header__input">
      <span class="iconfont">&#xe67d;</span>
      输入城市景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header__right">
        {{ city }}
        <span class="iconfont arrow_icon">&#xe688;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: {
      type: String
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~@/assets/styles/varible.scss';
.header {
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  &__left {
    width: 0.64rem;
    float: left;
    .back_icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }
  &__input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.12rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
    padding-left: 0.2rem;
  }
  &__right {
    float: right;
    min-width: 1.04rem;
    text-align: center;
    color: #fff;
    padding: 0 .1rem;
    .arrow_icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
