<template>
  <div class="componentList">
    <draggable tag="ul"
               group="template"
               ghostClass="sortable-ghost-component"
               chosenClass="sortable-chosen-component"
               :list="components"
               @add="handleOnAddComponent"
               @start="handleOnStartMoveComponent"
               @end="handleOnDragEndComponent"
    >
      <li v-for="(component, index) in components"
          :key="index"
          :class="{'selected': index === indexSelectedComponent}"
          @click="handleClickComponent(index)"
      >
        <div class="overlap"></div>
        <div class="formComponentWrapper"></div>
        <form-component :type="component.type"></form-component>
      </li>
    </draggable>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, reactive} from 'vue'
import {VueDraggableNext as Draggable} from 'vue-draggable-next'
import {FormComponentMeta} from "./formComponent/FormComponentMeta";
import FormComponent from "./formComponent/FormComponent.vue";

export default defineComponent({
  components: {
    Draggable,
    FormComponent
  },

  setup() {
    const components = reactive<FormComponentMeta[]>([])
    const indexSelectedComponent = ref(-1)

    function handleClickComponent(index: number) {
      indexSelectedComponent.value = index
    }

    function handleOnAddComponent(evt) {
      indexSelectedComponent.value = evt.newIndex
    }

    function handleOnStartMoveComponent(evt) {
      indexSelectedComponent.value = -1
    }

    function handleOnDragEndComponent(evt) {
      indexSelectedComponent.value = evt.newIndex
    }

    return {
      components,

      indexSelectedComponent,
      handleClickComponent,

      handleOnAddComponent,
      handleOnStartMoveComponent,
      handleOnDragEndComponent
    }
  }
})
</script>

<style lang="scss" scoped>

.componentList {
  margin-left: 20px;
  margin-right: 20px;

  background: #ffffff;
  border: 1px solid #dddddd;

  width: 500px;
  min-height: 500px;

  ul {
    width: 100%;
    min-height: 500px;

    li {
      width: calc(100% - 30px);

      margin: 15px 15px;
      border: 1px solid #ffffff;

      position: relative;

      &:hover {
        border: 1px dashed #ccc;
        cursor: pointer;
      }

      &.selected {
        border: 1px solid #90d8c8;
        background: #f9fffe;
      }
    }

    .sortable-chosen-component.sortable-ghost-component {
      visibility: hidden;
    }
  }
}
</style>

<!--FIXME: global だし templateList と疎結合すぎてなんとかしたい心意気-->
<style lang="scss">
.componentList {

  li.sortable-ghost-component.sortable-chosen-template {
    margin: 15px 15px;
    height: 50px;
    border: 2px dashed #efefef;

    * {
      display: none;
    }
  }
}
</style>
