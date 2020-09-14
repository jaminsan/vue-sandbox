export const formComponentTypes = [
  'name',
  'company-name',
  'phone',
  'mail-address',
  // 'calender',
  // 'time',
  // 'checkbox',
  'dropdown',
  // 'radio',
  // 'number'
] as const

export type FormComponentType = typeof formComponentTypes[number]
