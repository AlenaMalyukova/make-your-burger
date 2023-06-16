<template>
<div class="actions">
  <button class="actions-phone callback" @click="toggleModal">
    <img src="@/assets/icons/phone.svg" alt="phone">
    Call Me Back</button>
  <button class="actions-phone">8 800 437-87-22</button>
</div>
<call-back v-if="isModalVisible" @close="toggleModal"/>
</template>

<script setup>
import CallBack from "../modal/CallBack.vue";
import { ref } from "vue"

const isModalVisible = ref(false)

const toggleModal = () => {
  isModalVisible.value = !isModalVisible.value
}
</script>

<style lang="scss" scoped>
.actions {
  &-phone {
    background-color: transparent;
    color: #1F2939;;
    padding: 10px 14px;
    border: none;
    border-radius: 99px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
  }
}

.callback {
  color: #FF4D4F;
  margin-right: 60px;
  background: #FFEDED;

  img{
    max-width: 12px;
    max-height: 12px;
  }
}
</style>