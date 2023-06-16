<template>
<modal-window @close="close">
  <template #title>
    <h2>Leave your phone <br> and we will contact you</h2>
  </template>
  <template #body>
    <input type="tel" name="tel" class="input number" placeholder="phone number">
    <input type="text" name="message" class="input time" placeholder="convenient time to call">
  </template>
  <template #footer>
    <button class="modal-footer__button" @click="close">
      Request a call
    </button>
  </template>
</modal-window>
</template>

<script setup>
import modalWindow from './modalWindow.vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['close'])

const close = () => emit('close')
</script>

<style lang="scss" scoped>
.input {
  width: 300px;
  margin-bottom: 10px;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid #818181;

  // &:focus,
  // &:active {
  //   border-color: #5243C2;
  // }
}

.modal-footer__button {
  background-color: #5243C2;
  padding: 8px 15px;
  margin-top: 10px;
  color: #fff;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #413599;
  }
}
</style>