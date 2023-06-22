<template>
  <div class="summary">
    <div class="summary__title">Summary</div>
    <div class="actions">
      <div class="actions__sum">{{ countSum }}$</div>
      <button class="actions__checkout">Checkout</button>
    </div>
    <p class="text">Build a <span class="text_danger">$10</span> Burger and Get a Gift</p>
    <div class="info">
      <div class="info-block time">
        <img class="info-block__img" src="../assets/icons/time.svg" alt="time">
        <div class="in-numbers">{{ countTheTime }} min</div>
      </div>
      <div class="info-block weight">
        <img class="info-block__img" src="../assets/icons/weight.svg" alt="weight">
        <div class="in-numbers">{{ calcWeight }} weight</div>
      </div>
      <div class="info-block kcal">
        <img class="info-block__img" src="../assets/icons/kcal.svg" alt="kcal">
        <div class="in-numbers">{{ countKcal }} kcal</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  props: {
    ingredients: Array
  },
  computed: {
    countTheTime() {
      let time = 0

      this.ingredients.forEach(i => {
        time += i.time
      })

      return time
    },
    calcWeight() {
      let weight = 0

      this.ingredients.forEach(i => {
        weight += i.weight
      })

      return weight.toFixed(2)
    },
    countKcal() {
      let kcal = 0

      this.ingredients.forEach(i => {
        kcal += i.kcal
      })

      return kcal.toFixed(2)
    },
    countSum() {
      let sum = 0

      this.ingredients.forEach(i => {
        sum += i.price
      })

      return sum.toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
.summary {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 405px;

  &__title {
    font-size: 36px;
    font-weight: 600;
    color: #1F2939;
    padding-bottom: 50px;
    
  }
}

.actions {
  display: flex;
  justify-content: space-between;
  width: 100%;

  &__sum {
    font-size: 36px;
    font-weight: 600;
    line-height: 1.5;
    color: #5243C2;
  }

  &__checkout{ 
    padding: 16px 60px;
    background-color: #5243C2;
    color: #f5f5f5;
    border-radius: 99px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}

.text {
  font-size: 14px;
  font-weight: 600;
  color: #1F2939;
  padding-top: 16px;
  padding-bottom: 24px;

  &_danger {
    color: #FF4D4F;
  }
}

.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 16px;
  background-color: #F5F5FF;
  border-radius: 99px;
  
  &-block {
    display: flex;
    align-items: center;
    width: 124px;
  }

  &__img {
    width: 32px;
    height: 32px;
  }
}

.in-numbers {
  padding-left: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #1F2939;
  text-align: left;
}
</style>