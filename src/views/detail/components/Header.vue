<template>
  <div class="header">
    <router-link class="header__abs" to="/" v-show="showAbs">
      <div class="iconfont header__abs__back">&#xe685;</div>
    </router-link>
    <div class="header__fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header__fixed__back">&#xe685;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll')
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~@/assets/styles/varible.scss';

.header {
  &__abs {
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.4rem;
    text-align: center;
    line-height: 0.8rem;
    background: rgba(0, 0, 0, 0.8);
    &__back {
      color: #fff;
      font-size: 0.4rem;
    }
  }
  &__fixed {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
    height: $headerHeight;
    line-height: $headerHeight;
    background: $bgColor;
    font-size: 0.32rem;
    &__back {
      top: 0;
      left: 0;
      position: absolute;
      width: 0.64rem;
      text-align: center;
      color: #fff;
      .iconfont {
        font-size: 0.4rem;
      }
    }
  }
}
</style>
