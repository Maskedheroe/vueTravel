import SwiperCore, { Autoplay, Pagination } from 'swiper'
import { reactive } from 'vue'

SwiperCore.use([Autoplay, Pagination])

const useSwiperEffect = () => {
  const swiperOption = reactive({
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true,
    speed: 1000,
    pagination: {
      clickable: true
    }
  })
  return {
    swiperOption
  }
}
export default useSwiperEffect
