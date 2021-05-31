<template>
  <CityHeader />
  <CitySearch />
  <CityList />
  <CityAlphabet />
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/CityList'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang='scss' scoped>
</style>
