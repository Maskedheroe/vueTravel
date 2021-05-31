<template>
  <div class="list" ref="listRef">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item" v-for="innerItem in item" :key="innerItem.id">
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { onMounted, ref, onUpdated } from 'vue'

export default {
  name: 'CityList',
  props: {
    cities: {
      type: Object
    },
    hotCities: {
      type: Array
    }
  },
  setup() {
    const listRef = ref(null)
    const scroll = ref(null)
    onMounted(() => {
      scroll.value = new BScroll(listRef.value)
    })
    onUpdated(() => {
      scroll.value.refresh()
    })
    return {
      listRef
    }
  }
}
</script>

<style lang='scss' scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }
  &:after {
    border-color: #ccc;
  }
}
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }
  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      float: left;
      width: 33.33%;
      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        border-radius: 0.06rem;
        text-align: center;
        border: 0.02rem solid #ccc;
      }
    }
  }
  .area {
    .item-list {
      .item {
        line-height: 0.76rem;
        padding-left: 0.2rem;
        border-bottom: 0.01rem solid #ccc;
      }
    }
  }
}
</style>
