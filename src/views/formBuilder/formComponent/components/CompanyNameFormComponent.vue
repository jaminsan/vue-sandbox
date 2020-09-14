<template>
  <div class="mailAddress">
    <form-component-label label="企業名"></form-component-label>
    <input type="text" placeholder="ベンジャミンカフェ">
  </div>
</template>

<script lang="ts">
import FormComponentLabel from './FormComponentLabel.vue'

import {defineComponent} from 'vue'

export default defineComponent({
  components: {
    FormComponentLabel
  }
})
</script>

<style lang="scss" scoped>

.mailAddress {
  padding: 20px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  input {
    display: block;
    padding: 0 10px;
    background: #ffffff;
    font-size: 14px;
    width: 160px;
    height: 30px;
    line-height: 30px;
    text-align: left;
    border: 1px solid #c6c6c6;
    border-radius: 4px;
  }
}
</style>
