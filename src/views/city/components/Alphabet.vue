<template>
  <ul class="list" v-if="letters.length">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object
    }
  },
  computed: {
    letters() {
      const letters = []
      for (const i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated() {
    const A = 'A'
    this.startY = this.$refs[A].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const headerHeight = 79
          const indexLength = this.letters.length
          const startY = this.startY
          const touchY = e.touches[0].clientY - headerHeight
          const index = Math.floor((touchY - startY) / 20)
          if (index >= 0 && index < indexLength) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../../assets/styles/varible.scss';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
