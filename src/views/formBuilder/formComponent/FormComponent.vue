<template>
  <component :is="dynamicComponent"></component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import NameFormComponent from './components/NameFormComponent.vue'
import MailAddressFormComponent from './components/MailAddressFormComponent.vue'
import PhoneFormComponent from './components/PhoneFormComponent.vue'
import {FormComponentType} from './FormComponentType'
import DropdownFormComponent from "./components/DropdownFormComponent.vue";
import CompanyNameFormComponent from "./components/CompanyNameFormComponent.vue";

interface Props {
  type: FormComponentType
}

function lookupComponent(type: FormComponentType) {
  switch (type) {
    case 'name':
      return 'name-form-component'

    case 'company-name':
      return 'company-name-form-component'

    case 'mail-address':
      return 'mail-address-form-component'

    case 'phone':
      return 'phone-form-component'

    case 'dropdown':
      return 'dropdown-form-component'

    // TODO: Exhaustive Check
    default:
      return 'name-form-component'
  }
}

export default defineComponent({
  props: {
    type: String as PropType<FormComponentType>
  },

  components: {
    NameFormComponent,
    CompanyNameFormComponent,
    MailAddressFormComponent,
    PhoneFormComponent,
    DropdownFormComponent
  },

  setup(props: Props) {
    const t = computed(() => lookupComponent(props.type))

    return {
      dynamicComponent: t
    }
  }
})
</script>

<style scoped>

</style>
