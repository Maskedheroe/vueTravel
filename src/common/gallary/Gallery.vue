<template>
  <div class="container" @click='handleGarClick'>
    <div class="wrapper">
      <Swiper :loop="swiperOption.loop" :pagination="swiperOption.pagination">
        <SwiperSlide v-for="(item, index) in images" :key="index">
          <img class="wrapper__img" :src="item" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
SwiperCore.use([Pagination])
export default {
  name: 'CommenGallary',
  components: { Swiper, SwiperSlide },
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props, { emit }) {
    const swiperOption = reactive({
      pagination: {
        clickable: true,
        type: 'fraction'
      }
    })
    const handleGarClick = () => {
      emit('close')
    }
    return {
      swiperOption,
      handleGarClick
    }
  }
}
</script> 

<style lang='scss' scoped>
.wrapper ::v-deep .swiper-pagination {
  color: #fff;
  bottom: -1rem;
}
.container ::v-deep .swiper-container {
  overflow: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  .wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    &__img {
      width: 100%;
    }
  }
}
</style>
