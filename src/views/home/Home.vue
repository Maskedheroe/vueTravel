<template>
  <div>
    <Header :city="city" />
    <HomeSwiper :swiperList="swipperList"/>
    <HomeIcons :iconList="iconList"/>
    <HomeRecommend :recommendList="recommendList"/>
    <HomeWeekend :weekendList="weekendList"/>
  </div>
</template>

<script>
// import { onMounted, ref } from 'vue'
// import axios from 'axios'
import { computed } from 'vue'
import { useStore } from 'vuex'
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import useServiceEffect from './use-service.js'
export default {
  name: 'Home',
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  setup() {
    const store = useStore()
    const city = computed(() => store.state.city)
    const { swipperList, iconList, recommendList, weekendList } = useServiceEffect()
    return {
      city,
      swipperList,
      iconList,
      recommendList,
      weekendList
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
