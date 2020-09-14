<template>
  <div class="mailAddress">
    <form-component-label label="姓名"></form-component-label>
    <input type="text" placeholder="姓名">
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import FormComponentLabel from './FormComponentLabel.vue'

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

  b {
    display: block;
    font-size: 12px;
    color: #222222;
    line-height: 30px;
    text-align: left;
  }

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
