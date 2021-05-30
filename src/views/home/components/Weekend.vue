<template>
  <div>
    <div class="recommend__title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in weekendList"
        :key="item.id"
      >
        <div class="item__imgwrapper">
          <img :src="item.imgUrl" class="item__img" />
        </div>

        <div class="item__info">
          <p class="item__info__title">{{ item.title }}</p>
          <p class="item__info__desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    weekendList: {
      type: Array
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../../assets/styles/mixins.scss';

.recommend__title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item {
  &__imgwrapper {
    overflow: hidden;
    padding-bottom: 37.09%;
    height: 0;
    .item__img {
      width: 100%;
    }
  }
  &__info {
    padding: 0.1rem;
    &__title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      @include ellipsis;
    }
    &__desc {
      line-height: 0.4rem;
      color: #ccc;
      @include ellipsis;
    }
  }
}
</style>
