<template>
  <ul class="list">
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang='scss' scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: .4rem;
  .item {
    line-height: .4rem;
    text-align: center;
    color: #666;
  }
}
</style>
