import { onMounted, ref, onActivated, computed } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
const useServiceEffect = () => {
  const store = useStore()
  const city = computed(() => store.state.city)
  const swipperList = ref([])
  const iconList = ref([])
  const recommendList = ref([])
  const weekendList = ref([])
  const lastCity = ref('')
  onMounted(() => {
    getHomeInfo()
    lastCity.value = city.value
  })
  function getHomeInfo() {
    // axios.get(`/data?city=${city.value}`).then(getHomeInfoSucc)
    axios.get('/data').then(getHomeInfoSucc)
  }
  function getHomeInfoSucc(res) {
    res = res.data
    if (res.ret && res.data) {
      const data = res.data
      // 双向绑定数据了，不用在意异步逻辑会混乱，当获取到数据后必回导致city刷新
      swipperList.value = data.swiperList
      iconList.value = data.iconList
      recommendList.value = data.recommendList
      weekendList.value = data.weekendList
    }
  }
  onActivated(() => {
    if (lastCity.value !== city.value) {
      getHomeInfo()
    }
  })
  return {
    city,
    swipperList,
    iconList,
    recommendList,
    weekendList
  }
}
export default useServiceEffect
