<template>
  <div>
    <b>{{ label }}</b>
    <required-mark></required-mark>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import RequiredMark from './RequiredMark.vue'

export default defineComponent({
  props: {
    label: String
  },

  components: {
    RequiredMark
  },

  setup(props) {
    return {
      label: props.label
    }
  }
})
</script>

<style scoped>
b {
  margin-right: 3px;

  font-size: 12px;
  color: #222222;
  line-height: 30px;
  text-align: left;
}
</style>
