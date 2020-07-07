import {atom} from 'recoil'

export const isLoadingMyTour = atom({
  key: 'isLoadingMyTour',
  default: false,
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const listTourComing = atom({
  key: 'listTourComing',
  default: [],
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const listTourWalking = atom({
  key: 'listTourWalking',
  default: [],
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const listTourWent = atom({
  key: 'listTourWent',
  default: [],
  persistence_UNSTABLE: {
    type: 'log'
  },
})