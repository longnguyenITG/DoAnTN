import {atom} from 'recoil'

export const isLoading = atom({
  key: 'isLoadingAuthen',
  default: false,
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const successfully = atom({
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