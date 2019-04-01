<template>
  <div :class="$style.loadingWrapper">
    <img width="24" height="24" src="./loading.gif">
    <div :class="$style.tip">{{text}}</div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '正在加载中...'
    }
  }
}
</script>
<style lang="scss" module>
  .loading-wrapper {
    display: flex;
    padding: 10px 0;
    justify-content: center;
    align-items: center;
    .tip {
      font-size: 12px;
    }
  }
</style>
