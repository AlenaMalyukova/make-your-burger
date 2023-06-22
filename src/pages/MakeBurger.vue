<template>
<div class="make-burger">
  <div class="make-burger__title">Make<br>Your<br>Burger</div>
  <Burger/>
  <Summary :ingredients="addedIngredients"/>
</div>
<div class="ingredients">
  <ingredient 
    v-for="item in ingredients" 
    :key="item.name" 
    :item="item"
    @turn-down="turnDownIngredient"
    @turn-up="turnUpIngredient"/>
</div>
</template>

<script>
import Ingredient from '../components/Ingredient.vue'
import Burger from '@/components/Burger.vue';
import Summary from '@/components/Summary.vue';

export default {
  name: 'MakeBurger',
  components: {
    Ingredient,
    Burger,
    Summary
  },
  data: () => ({
    ingredients: [
      {
        name: 'Cutlet',
        value: 'cutlet',
        time: 5,
        weight: 0.125,
        kcal: 280,
        price: 3
      },
      {
        name: 'Mayo',
        value: 'mayo',
        time: 0,
        weight: 0.30,
        kcal: 125,
        price: 0.80
      },
      {
        name: 'Onion',
        value: 'onion',
        time: 1,
        weight: 0.10,
        kcal: 24,
        price: 0.50
      },
      {
        name: 'Tomato',
        value: 'tomato',
        time: 2,
        weight: 0.50,
        kcal: 40,
        price: 1
      },
      {
        name: 'Cucumber',
        value: 'cucumber',
        time: 3,
        weight: 0.20,
        kcal: 15,
        price: 0.70
      },
      {
        name: 'Cheese',
        value: 'cheese',
        time: 5,
        weight: 0.20,
        kcal: 170,
        price: 1.5
      },
      {
        name: 'Salad',
        value: 'salad',
        time: 5,
        weight: 0.10,
        kcal: 15,
        price: 0.50
      },
      {
        name: 'Bun',
        value: 'bun',
        time: 5,
        weight: 0.125,
        kcal: 180,
        price: 1.7
      },
    ],
    addedIngredients: []
  }),
  methods: {
    turnDownIngredient(item) {
      const itemIndex = this.addedIngredients.findIndex(i => i.value === item.value)
      this.addedIngredients.splice(itemIndex, 1)
    },
    turnUpIngredient(item) {
      this.addedIngredients.push(item)
    }
  },
}
</script>

<style lang="scss" scoped>
.make-burger {
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
}

.ingredients {
  display: flex;
  justify-content: space-between;
}
</style>