import {FormComponentType} from "./FormComponentType";

export interface FormComponentMeta {
  type: FormComponentType
  name: string
  icon: string
}

const name: FormComponentMeta = {
  type: 'name',
  name: '名前',
  icon: 'ri-user-line'
}

const companyName: FormComponentMeta = {
  type: 'company-name',
  name: '企業名',
  icon: 'ri-building-4-line'
}

const phone: FormComponentMeta = {
  type: 'phone',
  name: '電話番号',
  icon: 'ri-phone-line'
}

const mailAddress: FormComponentMeta = {
  type: 'mail-address',
  name: 'メール',
  icon: 'ri-mail-line'
}

const calender: FormComponentMeta = {
  type: 'calender',
  name: '日付',
  icon: 'ri-calendar-line'
}

const time: FormComponentMeta = {
  type: 'time',
  name: '時間',
  icon: 'ri-time-line'
}

const checkbox: FormComponentMeta = {
  type: 'checkbox',
  name: '意思確認',
  icon: 'ri-checkbox-line'
}

const dropdown: FormComponentMeta = {
  type: 'dropdown',
  name: 'ドロップダウン',
  icon: 'ri-list-check'
}

const radio: FormComponentMeta = {
  type: 'radio',
  name: 'ラジオボタン',
  icon: 'ri-radio-button-line'
}

const number: FormComponentMeta = {
  type: 'number',
  name: '数値',
  icon: 'ri-list-ordered'
}

function valueOf(type: FormComponentType): FormComponentMeta {
  switch (type) {
    case "name":
      return name

    case "company-name":
      return companyName

    case "phone":
      return phone

    case "mail-address":
      return mailAddress

    case "calender":
      return calender

    case "time":
      return time

    case "checkbox":
      return checkbox

    case "dropdown":
      return dropdown

    case "radio":
      return radio

    case "number":
      return number

    default:
      const _exhaustiveCheck: never = type;
  }
}

export default class FormComponentMetaUtil {

  static valueOf(type: FormComponentType): FormComponentMeta {
    return valueOf(type)
  }
}

