import FormComponentTemplate from './FormComponentTemplate'

export default class Form {

  id;
  name;
  components;

  constructor(id: string, name: string, components: FormComponentTemplate[]) {
    this.id = id
    this.name = name
    this.components = components
  }
}
