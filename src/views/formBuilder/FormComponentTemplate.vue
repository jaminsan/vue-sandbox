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
        <li v-for="template in templates" :key="template.id">
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
import FormComponentTemplate from './FormComponentTemplate.ts'

export default defineComponent({
  components: {
    Draggable
  },

  setup() {
    const templates = [
      new FormComponentTemplate('id1', '名前', 'ri-user-line'),
      new FormComponentTemplate('id2', '企業名', 'ri-building-4-line'),
      new FormComponentTemplate('id3', '電話番号', 'ri-phone-line'),
      new FormComponentTemplate('id4', 'メール', 'ri-mail-line'),
      new FormComponentTemplate('id5', '日付', 'ri-calendar-line'),
      new FormComponentTemplate('id6', '時間', 'ri-time-line'),
      new FormComponentTemplate('id7', '意思確認', 'ri-checkbox-line'),
      new FormComponentTemplate('id8', 'ドロップダウン', 'ri-list-check'),
      new FormComponentTemplate('id9', 'ラジオボタン', 'ri-radio-button-line'),
      new FormComponentTemplate('id10', '数値', 'ri-list-ordered'),
    ]

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
