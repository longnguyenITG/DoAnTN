import {atom} from 'recoil'

export const isLoading = atom({
  key: 'isLoading',
  default: false
})
export const successfully = atom({
  key: 'successfully',
  default: false
})
export const listAccount = atom({
  key: 'listAccount',
  default: null
})
export const Account = atom({
  key: 'Account',
  default: null
})