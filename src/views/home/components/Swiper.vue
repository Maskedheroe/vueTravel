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
import { reactive, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
SwiperCore.use([Autoplay, Pagination])
export default {
  name: 'HomeSwiper',
  components: { Swiper, SwiperSlide },
  data() {
    const swiperOption = reactive({
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      speed: 1000,
      pagination: {
        clickable: true
      }
    })
    const swiperList = ref([
      {
        id: '0001',
        imgUrl:
          'http://imgs.qunarzz.com/vs_ceph_vcimg/c0a60fa20379efa4f02ce527a680dc1b.jpeg'
      },
      {
        id: '0002',
        imgUrl: 'https://dimg04.c-ctrip.com/images/0zg0r120008ot7gnw8CA5.jpg'
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
