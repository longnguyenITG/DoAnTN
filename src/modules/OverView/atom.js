import {atom} from 'recoil'

export const isLoadingOverview = atom({
  key: 'isLoadingOverview',
  default: false,
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const successfullyOverview = atom({
  key: 'successfullyOverview',
  default: false,
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const listTour = atom({
  key: 'listTour',
  default: [],
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const detailTour = atom({
  key: 'detailTour',
  default: {},
  persistence_UNSTABLE: {
    type: 'log'
  },
})
export const liked = atom({
  key: 'liked',
  default: false,
  persistence_UNSTABLE: {
    type: 'log'
  },
})
