<template>
  <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item__title border-bottom">
        <span class="item__title__icon"></span>
        {{ item.title }}
      </div>
      <div class="item__children" v-if="item.children">
        <List :list="item.children"> </List>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.item {
  .item__title {
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    &__icon {
      position: relative;
      left: 0.06rem;
      top: 0.06rem;
      display: inline-block;
      width: 0.36rem;
      height: 0.36rem;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem
        no-repeat;
      margin-right: 0.1rem;
      background-size: 0.4rem 3rem;
    }
  }
  &__children {
    padding: 0 .2rem;
  }
}
</style>
