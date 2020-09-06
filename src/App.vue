<template>
  <Navigation></Navigation>
  <div class="screenSize">
    <suspense>
      <template #default>
        <router-view></router-view>
      </template>
      <template #fallback>
        <div class="loading">
          <loading></loading>
        </div>
      </template>
    </suspense>
  </div>
</template>

<script>
import {defineComponent, Suspense} from 'vue'
import Navigation from "./views/Navigation.vue"
import Loading from "./components/Loading.vue";

export default defineComponent({
  components: {
    Navigation,
    Suspense,
    Loading
  }
})
</script>

<style lang="scss" scoped>
.loading {
  margin: 15px auto;
  display: flex;
  justify-content: center;
  align-items: start;
}
</style>
