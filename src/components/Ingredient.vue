<template>
  <div class="ingredient">
    <img :src="require(`../assets/images/${item.value}.png`)" :alt="`${item.value}`">
    <p>{{ item.name }}</p>
    <div class="counter">
      <button @click="turnDown(item)">-</button>
      <p>{{ this.count }}</p>
      <button @click="turnUp(item)">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
  }),
  props: {
    item: Object,
  },
  methods: {
    turnDown(item) {
      if(this.count === 0) {
        return
      } else {
        this.count--
        return this.$emit('turn-down', item)
      }
    },
    turnUp(item) {
      this.count++
      if(this.count>=10) {
        this.$emit('open-modal')
      }
      return this.$emit('turn-up', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.ingredient {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #F0F7FA;
  border-radius: 32px;
  padding: 24px 18px;
  img {
    max-width: 104px;
    height: 35px;
  }
  button {
    border-radius: 50%;
    border: none;
    background-color: #f5f5f5;
    color: #5243C2;
    width: 28px;
    height: 28px;
    text-align: center;
    cursor: pointer;
  }
  p{
    padding: 0 10px;
  }
}
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>