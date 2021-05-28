<template>
  <div>
    <Header />
    <HomeSwiper/>
  </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    Header,
    HomeSwiper
  }
}
</script>

<style lang='scss' scoped>
</style>
