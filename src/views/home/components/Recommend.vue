<template>
  <div>
    <div class="recommend__title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <img :src="item.imgUrl" class="item__img" />
        <div class="item__info">
          <p class="item__info__title">{{ item.title }}</p>
          <p class="item__info__desc">{{ item.desc }}</p>
          <button class="item__info__button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommendList: {
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
  margin-top: 0.2rem;
}
.item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;
  &__img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  &__info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
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
    &__button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
