<template>
  <router-link :to="to" v-slot="{ href, navigate, isActive }">
    <li :class="{ 'linkSelected': isActive }">
      <a :href="href" @click="navigate">
        <i class="ri-profile-line"></i><span>{{ label }}</span>
      </a>
    </li>
  </router-link>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    to: String,
    label: String
  },

  setup(props) {
    return {
      to: props.to,
      label: props.label
    }
  }
})
</script>

<style scoped>
li {
  padding: 5px 15px;
  color: #cacaca;
  border-left: 1px solid #273743;
  border-right: 1px solid #344755;
  line-height: 1.7;
}

* {
  display: inline-block;
  vertical-align: middle;
}

span {
  font-size: 14px;
}

i {
  margin-right: 5px;
  font-size: 18px;
}

.linkSelected {
  background: #24A68A;
  color: #ffffff;
}
</style>
