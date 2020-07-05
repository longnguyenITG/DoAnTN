import {OverView as OverViewAPI} from '../../api'

export const getListTour = async (setAtom, setLoading) => {
  setLoading(true)
  const data = await OverViewAPI.fetchListTour()
  setAtom(data)
  setLoading(false)
}
export const getDetailTour = async (idTour, setAtom, setLoading) => {
  debugger
  setLoading(true)
  const data = await OverViewAPI.fetchDetailTour(idTour)
  setAtom(data)
  setLoading(false)
}
