<template>
  <div class="header">
    <div class="header__left">
      <div class="iconfont back_icon">&#xe685;</div>
    </div>
    <div class="header__input">
      <span class="iconfont">&#xe67d;</span>
      输入城市景点/游玩主题
    </div>
    <div class="header__right">
      城市
      <span class="iconfont arrow_icon">&#xe688;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang='scss' scoped>
@import '~@/assets/styles/varible.scss';
.header {
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;
  &__left {
    width: 0.64rem;
    float: left;
    .back_icon {
      text-align: center;
      font-size: .4rem;
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
    padding-left: .2rem;
  }
  &__right {
    float: right;
    width: 1.24rem;
    text-align: center;
    .arrow_icon {
      margin-left: -.04rem;
      font-size: .24rem;
    }
  }
}
</style>
