import {atom} from 'recoil'

export const isLoadingNotify = atom({
  key: 'isLoadingNotify',
  default: false,
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const successFullyNotify = atom({
  key: 'successFullyNotify',
  default: false,
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const listNotify = atom({
  key: 'listNotify',
  default: [],
  persistence_UNSTABLE: {
    type: 'log'
  },
})