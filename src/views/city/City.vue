<template>
  <CityHeader />
  <CitySearch />
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang='scss' scoped>
</style>
