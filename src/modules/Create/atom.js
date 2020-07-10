import {atom} from 'recoil'

export const isLoadingCreate = atom({
  key: 'isLoadingCreate',
  default: false,
  persistence_UNSTABLE: {
    type: 'log'
  },
})