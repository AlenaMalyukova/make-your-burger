<template>
<div class="main">
    <div class="main__title">Make<br>Your<br>Burger</div>
    <router-link class="main-btn" to="/make-burger">
      <span>make<br>burger</span>
    </router-link>
    <div class="main-images">
      <div class="main-images__background">
        <img src="../assets/main-burger-background.png" alt="backround">
      </div>
      <div class="main-images__burger">
        <img src="../assets/main-burger.png" alt="burger">
      </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-size: 72px;
    font-weight: 700;
    line-height: 1.1;
    color: #1F2939;
    text-align: left;
  }

  &-btn {
    padding: 60px 35px;
    background-color: #5243C2;
    color: #fff;
    border-radius: 50%;
    border: none;
    font-size: 24px;
    font-weight: 800;
    line-height: 1.2;
    text-transform: uppercase;
    box-sizing: border-box;
    position: absolute;
    bottom: 277px;
    left: 750px;
    text-decoration: none;
    width: 180px;
    height: 180px;
  }

  &-images {
    position: relative;

    &__background {
      position: relative;
      max-width: 875px;
      z-index: -1;
      padding-top: 70px;

      img{
        width: 100%;
      }
    }

    &__burger {
      max-width: 973px;
      position: absolute;
      top: 0;
      right: 0;

      img{
        width: 100%;
      }
    }
  }
}
</style>