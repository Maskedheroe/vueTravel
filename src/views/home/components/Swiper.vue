<template>
  <div class="wrapper">
    <Swiper
      v-if="isShowSwiper"
      :autoplay="swiperOption.autoplay"
      :loop="swiperOption.loop"
      :speed="swiperOption.speed"
      :pagination="swiperOption.pagination"
    >
      <SwiperSlide v-for="(item) in swiperList" :key="item.id">
        <img class="swiper__img" :src="item.imgUrl" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import useSwiperEffect from './use-swiper'
import { computed } from 'vue'
export default {
  name: 'HomeSwiper',
  components: { Swiper, SwiperSlide },
  data(props) {
    const { swiperOption } = useSwiperEffect()
    const isShowSwiper = computed(() => props.swiperList.length)
    return {
      isShowSwiper,
      swiperOption
    }
  },
  props: {
    swiperList: {
      type: Array,
      defalut: []
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper ::v-deep .swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  overflow: hidden;
  height: 0;
  width: 100%;
  padding-bottom: 32.8%;
  .swiper__img {
    width: 100%;
  }
}
</style>
