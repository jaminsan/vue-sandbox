<template>
  <div class="mailAddress">
    <form-component-label label="ドロップダウン"></form-component-label>
    <select>
      <option disabled="disabled">選択してください</option>
      <option>選択肢1</option>
      <option>選択肢2</option>
      <option>選択肢3</option>
    </select>
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

  select {
    display: block;
    padding: 0 10px;
    font-size: 14px;
    width: 160px;
    height: 30px;
    line-height: 30px;
    text-align: left;
    border: 1px solid #c6c6c6;
    border-radius: 4px;
    font-weight: 400;

    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 2px;
  }
}
</style>
