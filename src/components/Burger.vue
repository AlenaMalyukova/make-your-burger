<template>
  <div class="app-burger" >
    <img class="app-burger__bg" src="../assets/burger-bg.png"/>
    <img class="app-burger__bun-bottom" src="../assets/images/bun-bottom.png" alt="bun">
  </div>
</template>

<script>
export default {
  name: 'Burger',
  data: () => ({
    
  }),
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.app{
  &-burger {
    position: relative;
    &__bg {
      position: relative;
      max-width: 598px;
      z-index: -1;
      padding-top: 70px;
    }
    &__bun-bottom {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      max-width: 441px;
    }
  }
}
</style>