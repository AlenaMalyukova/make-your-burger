<template>
<div class="header">
  <div class="nav-wrapper">
    <app-logo/>
    <app-navigations/>
  </div>
  
  <app-actions/>
</div>
</template>

<script setup>
import AppNavigations from './AppNavigations.vue'
import AppLogo from './AppLogo.vue';
import AppActions from './AppActions.vue'

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

.nav-wrapper {
  display: flex;
  justify-content: start;
  align-items: center;
}
</style>