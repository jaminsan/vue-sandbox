<template>
  <div class="templateListWrapper">
    <div class="header">
      <span>基本項目</span>
    </div>
    <div class="templateList">
      <draggable tag="ul"
                 :list="templates"
                 :group="{ name: 'template', pull: 'clone', put: false }"
                 :sort="false"
                 ghostClass="sortable-ghost-template"
                 chosenClass="sortable-chosen-template"
      >
        <li v-for="template in templates" :key="template.type">
          <i :class="template.icon"></i>
          <span>{{ template.name }}</span>
        </li>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {VueDraggableNext as Draggable} from 'vue-draggable-next'
import {formComponentTypes} from "./formComponent/FormComponentType";
import FormComponentMetaUtil from "./formComponent/FormComponentMeta";

export default defineComponent({
  components: {
    Draggable
  },

  setup() {
    const templates = formComponentTypes.map(FormComponentMetaUtil.valueOf)

    return {
      templates
    }
  }
})
</script>

<style lang="scss" scoped>
.templateListWrapper {
  border: 1px solid #dddddd;
  background: #f7f7f7;
  width: 283px;
}

.header {
  display: flex;
  flex-direction: row;

  span {
    display: inline-block;
    height: 33px;
    line-height: 33px;
    padding: 0 0 0 7px;
    color: #000000;
    background: #f7f7f7;
    font-size: 15px;
    cursor: pointer;
  }
}

.templateList {
  padding: 0 5px;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      margin-bottom: 5px;

      border: 1px solid #e2e2e2;
      height: 22px;
      width: 123px;
      box-sizing: content-box;
      padding: 6px 4px;

      cursor: move;
      border-radius: 3px;
      background: #ffffff;

      display: flex;
      align-items: center;

      i {
        margin-right: 5px;
        font-size: 18px;
      }

      span {
        color: #222222;
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
}
</style>
