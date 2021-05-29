<template>
  <div class="wrapper">
    <Swiper
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
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import useSwiperEffect from './use-swiper'
export default {
  name: 'HomeSwiper',
  components: { Swiper, SwiperSlide },
  data() {
    const { swiperOption } = useSwiperEffect()
    const swiperList = ref([
      {
        id: '0001',
        imgUrl:
          'http://imgs.qunarzz.com/vs_ceph_vcimg/c0a60fa20379efa4f02ce527a680dc1b.jpeg'
      },
      {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg'
        
      }
    ])
    return {
      swiperOption,
      swiperList
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
