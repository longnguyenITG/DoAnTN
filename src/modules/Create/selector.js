import {OverView as OverviewAPI} from '../../api'

export const getListTourUpdated = async (setAtom) => {
  const data = await OverviewAPI.fetchListTour()
  setAtom(data)
}
export const submitKeyAccount = async (idTour, idUser) => {
  const data = await OverviewAPI.submitJoinTour(idTour, idUser)
  !data.success && Alert.alert('Thất bại', 'Có lỗi xảy ra')
}