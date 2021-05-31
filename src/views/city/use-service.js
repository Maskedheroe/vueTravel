import axios from 'axios'
import { onMounted, ref } from 'vue'
const useCityServiceEffect = () => {
  const cities = ref({})
  const hotCities = ref([])
  const getCityInfo = () => {
    axios.get('/city').then(handleGetCityInfoSucc)
  }
  function handleGetCityInfoSucc(res) {
    res = res.data
    if (res.ret && res.data) {
      const data = res.data
      cities.value = data.cities
      hotCities.value = data.hotCities
    }
  }
  onMounted(() => {
    getCityInfo()
  })
  return {
    cities,
    hotCities
  }
}
export default useCityServiceEffect
