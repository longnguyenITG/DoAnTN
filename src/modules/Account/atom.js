import {atom} from 'recoil'

export const isLoadingAccount = atom({
  key: 'isLoadingAccount',
  default: false,
  persistence_UNSTABLE: {
    type: 'log'
  },
})