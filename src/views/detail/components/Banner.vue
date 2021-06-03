<template>
  <div>
    <div class="banner" @click="handleGarlClick">
      <img
        src="https://imgs.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_710x360_075ec9d6.jpg"
        class="banner__img"
      />
      <div class="banner__info">
        <div class="banner__info__title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner__info__number">
          <span class="iconfont banner-icon">&#xe6c6; 39</span>
        </div>
      </div>
    </div>
  </div>
  <CommenGallary :images="imgs" v-if="showGallery" @close="handleGarlClose" />
</template>

<script>
import CommenGallary from '../../../common/gallary/Gallery'
export default {
  name: 'Banner',
  components: {
    CommenGallary
  },
  data() {
    const imgs = [
      'https://imgs.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_710x360_075ec9d6.jpg',
      'https://imgs.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_710x360_075ec9d6.jpg'
    ]
    return {
      imgs,
      showGallery: false
    }
  },
  methods: {
    handleGarlClick() {
      this.showGallery = true
    },
    handleGarlClose() {
      this.showGallery = false
    }
  }
}
</script>

<style lang='scss' scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 52%;
  &__img {
    width: 100%;
  }
  &__info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    &__title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    &__number {
      height: 0.32rem;
      padding: 0 0.4rem;
      margin-right: 0.1rem;
      margin-top: 0.1rem;
      line-height: 0.32rem;
      border-radius: 0.2rem;
      font-size: 0.24rem;
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
