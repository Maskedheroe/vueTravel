<template>
  <div class="search">
    <input
      v-model="keyword"
      type="text"
      placeholder="输入城市名或拼音"
      class="search__input"
    />
  </div>
  <div class="search__content" ref="searchRef" v-show="keyword">
    <ul>
      <li
        class="search__content__item"
        v-for="item in list"
        :key="item.id"
        @click="() => handleCityClick(item.name)"
      >
        {{ item.name }}
      </li>
      <li class="search__content__item" v-show="hasNoData">没有找到匹配数据</li>
    </ul>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.searchRef, {
      click: true
    })
  },
  updated() {
    this.scroll.refresh()
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang='scss' scoped>
@import '~@/assets/styles/varible.scss';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;
  &__input {
    box-sizing: border-box;
    line-height: 0.62rem;
    height: 0.62rem;
    width: 100%;
    padding: 0 0.2rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
.search__content {
  overflow: hidden;
  background: #eee;
  z-index: 1;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  &__item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
    border-bottom: 0.01rem solid #ccc;
  }
}
</style>
