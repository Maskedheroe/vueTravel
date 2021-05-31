<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="search__input" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang='scss' scoped>
@import '~@/assets/styles/varible.scss';

.search {
  height: .72rem;
  padding: 0 .1rem;
  background: $bgColor;
  &__input {
    box-sizing: border-box;
    line-height: .62rem;
    height: .62rem; 
    width: 100%;
    padding: 0 .2rem;
    text-align: center;
    border-radius: .06rem;
    color: #666;
  }
}
</style>
