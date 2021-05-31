<template>
  <CityHeader />
  <CitySearch />
  <CityList :cities="cities" :hotCities="hotCities" :letter="letter"/>
  <CityAlphabet :cities="cities" @change="handleLetterChange"/>
</template>

<script>
import { ref } from 'vue'
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
    const letter = ref('')
    const { cities, hotCities } = useCityServiceEffect()
    const handleLetterChange = (mletter) => {
      letter.value = mletter
    }
    return {
      cities,
      hotCities,
      handleLetterChange,
      letter
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
