import { onMounted, ref } from 'vue'
import axios from 'axios'
const useServiceEffect = () => {
  const city = ref('城市')
  const swipperList = ref([])
  const iconList = ref([])
  const recommendList = ref([])
  const weekendList = ref([])
  onMounted(() => {
    getHomeInfo()
  })
  function getHomeInfo() {
    axios.get('/data').then(getHomeInfoSucc)
  }
  function getHomeInfoSucc(res) {
    res = res.data
    if (res.ret && res.data) {
      const data = res.data
      // 双向绑定数据了，不用在意异步逻辑会混乱，当获取到数据后必回导致city刷新
      city.value = data.city
      swipperList.value = data.swiperList
      iconList.value = data.iconList
      recommendList.value = data.recommendList
      weekendList.value = data.weekendList
    }
  }
  return {
    city,
    swipperList,
    iconList,
    recommendList,
    weekendList
  }
}
export default useServiceEffect
