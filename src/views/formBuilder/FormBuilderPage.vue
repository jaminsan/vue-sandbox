<template>
  <div class="header">
    <div class="formName">
      <span>フォーム{{ formId }}</span>
    </div>
    <div class="saveFormButton">
      <button>保存</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, SetupContext} from 'vue'
import {useRoute} from 'vue-router'

export default defineComponent({
  setup(props, context: SetupContext) {
    const route = useRoute()

    return {
      formId: route.params.formId
    }
  }
})
</script>

<style lang="scss" scoped>
$header-height: 30px;

.header {
  margin: 15px 10vw 0 10vw;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  .formName {

    span {
      color: #434343;
      font-size: 20px;
      line-height: $header-height;
    }
  }

  .saveFormButton {
    margin-left: auto;

    button {
      height: $header-height;
      background: #2F404E;
      border: 1px solid #2F404E;
      border-radius: 26px;
      color: #ffffff;
      font-size: 14px;
      padding: 0 14px;
    }
  }
}
</style>
