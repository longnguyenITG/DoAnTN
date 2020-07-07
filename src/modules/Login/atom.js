import {atom} from 'recoil'

export const isLoadingAuthen = atom({
  key: 'isLoadingAuthen',
  default: false,
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const successfullyAuthen = atom({
  key: 'successfullyAuthen',
  default: false,
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const listAccount = atom({
  key: 'listAccount',
  default: null,
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const Account = atom({
  key: 'Account',
  default: null,
  persistence_UNSTABLE: {
    type: 'log'
  },
})