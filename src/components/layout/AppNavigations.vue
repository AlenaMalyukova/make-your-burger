<template>
<div class="nav">
  <router-link to="/" :class='["nav-link", { "nav-link_active" : rout === "#/" } ]'>Discover </router-link>
  <router-link 
    to="/make-burger" 
    :class='["nav-link", { "nav-link_active" : router === "#/make-burger" } ]'
  >Make Your Burger </router-link>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;

  &-link{
    color: #1F2939;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    margin: 12px 0;

    &:first-child {
      margin-right: 60px;
    }

    &:focus, 
    &_active {
      border-bottom: 1px solid #5243C2;
    }
  }
}
</style>