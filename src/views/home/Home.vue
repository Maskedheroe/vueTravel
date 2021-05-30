<template>
  <div>
    <Header />
    <HomeSwiper />
    <HomeIcons />
    <HomeRecommend />
    <HomeWeekend />
  </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style lang='scss' scoped>
</style>
