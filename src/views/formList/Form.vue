<template>
  <li class="form" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="form__status" :style="formStatusStyle">
      <i class="ri-draft-line"></i>
    </div>
    <div class="form__name">
      <h2>{{ form.name }}</h2>
    </div>
    <div class="form__createdDate">
      <span>作成日：{{ formatDate(form.createdDate) }}</span>
    </div>
    <div class="form__editAction" v-if="hover">
      <i class="ri-pencil-line"></i>
      <b>編集</b>
    </div>
    <div class="form__mailSettingAction" v-if="hover">
      <i class="ri-mail-settings-line"></i>
      <b>メールの通知</b>
    </div>
    <div class="form__shareAction" v-if="hover">
      <i class="ri-share-line"></i>
      <b>共有</b>
    </div>
    <div class="form__moreAction" v-if="hover" @mouseenter="handleMouseEnterMoreAction"
         @mouseleave="handleMouseLeaveMoreAction">
      <i class="ri-more-line"></i>
      <div class="actionList" v-if="hoverMoreAction">
        <ul>
          <li>複製</li>
          <li>有効化/無効化</li>
          <li>削除</li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import Form from "./Form.ts";

// FIXME: 型推論
interface Props {
  form: Form
}

export default defineComponent({
  props: {
    form: Form
  },

  setup(props: Props) {
    const hover = ref(false)
    const formStatusColor = ref(props.form.isEnabled ? '#24A68A' : '#747474')
    const hoverMoreAction = ref(false)

    function handleMouseEnter() {
      hover.value = true
    }

    function handleMouseLeave() {
      hover.value = false
    }

    function handleMouseEnterMoreAction() {
      hoverMoreAction.value = true
    }

    function handleMouseLeaveMoreAction() {
      hoverMoreAction.value = false
    }

    function formatDate(date: string) {
      const d = new Date(date)

      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
    }

    return {
      form: props.form,
      formatDate,

      hover,
      handleMouseEnter,
      handleMouseLeave,

      hoverMoreAction,
      handleMouseEnterMoreAction,
      handleMouseLeaveMoreAction,

      formStatusStyle: {
        // FIXME: https://github.com/vuejs/rfcs/pull/182
        '--formStatusColor': formStatusColor,
      }
    }
  }
})
</script>

<style lang="scss" scoped>

.form {
  height: 115px;
  margin: 0 0 15px;
  padding: 13px 15px 13px 15px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px #e4e4e4;
  border-left: 2px solid #ffffff;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  &:hover {
    border-left: 2px solid #24A68A;
  }

  &__status {
    grid-area: 1 / 1 / 3 / 2;
    justify-self: start;
    align-self: center;

    i {
      font-size: 30px;
      color: var(--formStatusColor);
      display: inline-block;
      border-radius: 50%;
      border: 1px solid #ddd;
      padding: 0.4em 0.5em;
    }
  }

  &__name {
    text-align: left;
    grid-area: 1 / 2 / 2 / 3;
    justify-self: start;
    align-self: center;

    h2 {
      color: #2f404e;
      font-size: 20px;
    }

    &:hover {
      cursor: pointer;

      h2 {
        color: #24A68A;
      }
    }
  }

  &__createdDate {
    text-align: left;
    grid-area: 2 / 2 / 2 / 3;
    justify-self: start;
    align-self: center;

    span {
      color: #919191;
      font-weight: 300;
      font-size: 13px;
    }
  }

  .formAction {
    display: flex;
    flex-direction: column;
    padding: 17px;
    color: #222;
    font-weight: 300;

    * {
      display: block;
    }

    i {
      font-size: 24px;
    }

    b {
      font-size: 14px;
      margin-top: 13px;
    }

    &:hover {
      cursor: pointer;
      color: #24A68A;
      background: #fbfbfb;
      border: 1px dashed #fbfbfb;
    }
  }

  &__editAction {
    @extend .formAction;
    grid-area: 1 / 3 / 3 / 4;
    justify-self: center;
    align-self: center;
  }

  &__mailSettingAction {
    @extend .formAction;
    grid-area: 1 / 4 / 3 / 5;
    justify-self: center;
    align-self: center;
  }

  &__shareAction {
    @extend .formAction;
    grid-area: 1 / 5 / 3 / 6;
    justify-self: center;
    align-self: center;
  }

  &__moreAction {
    grid-area: 1 / 6 / 3 / 7;
    justify-self: center;
    align-self: center;

    padding: 17px;
    color: #222;
    font-weight: 300;

    position: relative;

    i {
      font-size: 24px;
    }

    .actionList {
      position: absolute;
      padding-top: 15px;
      right: 10px;
      top: 30px;

      ul {
        background: #ffffff;
        border: 1px solid #d3d3d3;
        border-radius: 0 0 3px 3px;
        box-shadow: 0 3px 4px #e2e2e2;
      }

      li {
        text-align: left;
        font-size: 14px;
        min-width: 150px;
        font-weight: 300;
        color: #555;
        border-bottom: 1px solid #f4f4f4;
        border-radius: 3px;
        cursor: pointer;
        padding: 8px 10px;

        &:hover {
          background: #f3f3f3;
        }
      }
    }
  }
}
</style>
