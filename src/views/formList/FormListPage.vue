<template>
  <div class="header container">すべてのフォーム</div>
  <ul class="formList container">
    <template v-for="form in formList" :key="form.id">
      <form-list-item :form="form" @click-form-edit="handleClickFormEdit"/>
    </template>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import FormListItem from './Form.vue';
import Form from "./Form.ts";
import {useRouter} from 'vue-router'

export default defineComponent({
  components: {
    FormListItem
  },

  async setup() {
    const router = useRouter()

    async function fetchFormList(): Promise<Form[]> {
      await new Promise(r => setTimeout(r, 1500))

      return [
        new Form('id1', 'フォーム1', 'enable', '2020-09-05'),
        new Form('id2', 'フォーム2', 'disable', '2020-09-06'),
        new Form('id3', 'フォーム3', 'enable', '2020-09-07')
      ]
    }

    function handleClickFormEdit(form: Form): void {
      router.push({name: 'form-builder', params: {formId: form.id}})
    }

    // FIXME: template で 'Unresolved variable or type formList' の警告が出る。setup についてる async を消すと警告消える。
    const formList = await fetchFormList()

    return {
      formList,

      handleClickFormEdit
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  margin: 15px 10vw;
}

.header {
  color: #2F404E;
  font-size: 19px;
  text-align: left;
}

.formList {
}

</style>
