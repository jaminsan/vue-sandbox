type FormStatus = 'enable' | 'disable'

export default class Form {
  id;
  name;
  status;
  createdDate;

  constructor(id: string, name: string, status: FormStatus, createdDate: string) {
    this.id = id
    this.name = name
    this.status = status
    this.createdDate = createdDate
  }

  get isEnabled() {
    return this.status === 'enable'
  }
}

