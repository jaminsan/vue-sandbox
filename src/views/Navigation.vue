<template>
  <div class="mainNavBar">
    <ul class="linkList">
      <navigation-link to="/forms" label="フォーム"></navigation-link>
      <navigation-link to="/marketo-setting" label="Marketo 連携"></navigation-link>
    </ul>
    <div class="searchForm">
      <i class="ri-search-line"></i>
      <input type="text" placeholder="すべてのフォーム">
    </div>
    <div class="newFormButton">
      <button><span>新しいフォーム</span></button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import NavigationLink from "./NavigationLink.vue";

export default defineComponent({
  components: {
    // FIXME: a tag が余計に出ている気がする......見た目と動きは問題なさそうだけど
    NavigationLink
  }
})
</script>

<style lang="scss" scoped>
.mainNavBar {
  margin: 0;
  padding: 0 10vw;
  background: #2f404e;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.linkList {
  margin: 0;
  display: flex;
  justify-content: flex-start;
}

.searchForm {
  margin-left: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  input {
    background: #ffffff;
    font-size: 14px;
    border-radius: 15px;
    width: 160px;
    height: 27px;
    text-align: left;
    padding-left: 30px;
  }

  i {
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
  }
}

.newFormButton {
  margin-left: 8px;

  button {
    height: 31px;
    line-height: 31px;
    font-size: 14px;
    background: #24A68A;
    border: #24A68A;
    border-radius: 2px;
    color: #ffffff;
    padding: 0 15px;
  }
}
</style>
