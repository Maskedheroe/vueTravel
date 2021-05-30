<template>
  <div class="icons">
    <!-- <div class="icon__img">
        <img
          class="icon__img__content"
          src="http://s.qunarzz.com/homenode/images/touchheader/piao.png"
        />
      </div>
      <p class="icon__desc">热门景点</p> -->
    <Swiper class="icons__container">
      <!-- :pagination="swiperOption.pagination" -->
      <SwiperSlide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon__img">
            <img class="icon__img__content" :src="item.imgUrl" />
          </div>
          <p class="icon__desc">{{ item.desc }}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import useSwiperEffect from './use-swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

export default {
  name: 'HomeIcons',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    const { swiperOption } = useSwiperEffect()
    
    return {
      swiperOption
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  props: {
    iconList: {
      type: Array,
      defalut: []
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../../assets/styles/varible.scss';
@import '../../../assets/styles/mixins.scss';

.icons {
  &__container {
    height: 0;
    padding-bottom: 50%;
    .icon {
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      &__img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: border-box;
        padding: 0.1rem;
        &__content {
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }
      &__desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: 0.44rem;
        height: 0.44rem;
        color: $darkTextColor;
        text-align: center;
        @include ellipsis
      }
    }
  }
}
</style>
