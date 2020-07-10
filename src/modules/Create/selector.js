import {OverView as OverviewAPI} from '../../api'

export const getListTourUpdated = async (setAtom) => {
  const data = await OverviewAPI.fetchListTour()
  setAtom(data)
}