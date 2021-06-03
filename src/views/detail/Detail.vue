<template>
  <div>
    <Banner />
    <DetailHeader />
    <div class="content"></div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/Header'

export default {
  name: 'Detail',
  components: {
    Banner,
    DetailHeader
  }
}
</script>

<style lang='scss' scoped>
.content {
  height: 50rem;
}
</style>
