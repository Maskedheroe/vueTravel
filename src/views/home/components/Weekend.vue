<template>
  <div>
    <div class="recommend__title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in recommendList"
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
  data() {
    const recommendList = [
      {
        id: '0001',
        imgUrl:
          'http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/09da45332823f014429b94e55fa96c5d.jpg?width=640&height=240&top=0&color=#928f52',
        title: '北京海洋世界',
        desc: '浪漫海洋世界主题公园'
      },
      {
        id: '0002',
        imgUrl:
          'http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/09da45332823f014429b94e55fa96c5d.jpg?width=2048&height=1365&top=0&color=#928f52',
        title: '北京海洋世界',
        desc: '浪漫海洋世界主题公园'
      },
      {
        id: '003',
        imgUrl:
          'http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/09da45332823f014429b94e55fa96c5d.jpg?width=640&height=240&top=0&color=#928f52',
        title: '北京海洋世界3',
        desc: '浪漫海洋世界主题公园'
      }
    ]
    return {
      recommendList
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
  &__imgwrapper {
    overflow: hidden;
    padding-bottom: 33.9%;
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
