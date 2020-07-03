import {atom} from 'recoil'

export const isLoading = atom({
  key: 'isLoading',
  default: false,
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const successfully = atom({
  key: 'successfully',
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