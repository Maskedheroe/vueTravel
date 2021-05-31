<template>
  <CityHeader />
  <CitySearch />
  <CityList :cities="cities" :hotCities="hotCities"/>
  <CityAlphabet :cities="cities"/>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/CityList'
import CityAlphabet from './components/Alphabet'
import useCityServiceEffect from './use-service'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  setup() {
    const { cities, hotCities } = useCityServiceEffect()
    return {
      cities,
      hotCities
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
