import {OverView as OverViewAPI} from '../../api'
import {Alert} from 'react-native'

export const getListTour = async (setAtom, setLoading) => {
  setLoading(true)
  const data = await OverViewAPI.fetchListTour()
  setAtom(data)
  setLoading(false)
}
export const getDetailTour = async (idTour, setAtom, setLoading) => {
  setLoading(true)
  const data = await OverViewAPI.fetchDetailTour(idTour)
  setAtom(data)
  setLoading(false)
}
export const joinTour = async (idTour, idUser, setLoading) => {
  setLoading(true)
  const data = await OverViewAPI.submitJoinTour(idTour, idUser)
  data.success ? Alert.alert('Thành công', 'Tham gia thành công') : Alert.alert('Thất bại', 'Có lỗi xảy ra')
  setLoading(false)
}
export const getLiked = async (idTour, idUser, setAtom) => {
  const data = await OverViewAPI.fetchLiked(idTour, idUser)
  data && data.length ? setAtom(true) : setAtom(false)
}
export const deleteLiked = async (idTour, idUser, setAtom) => {
  const data = await OverViewAPI.submitDeleteLiked(idTour, idUser)
  data.success ? setAtom(false) : Alert.alert('Thất bại', 'Có lỗi xảy ra')
}
export const uploadLiked = async (idTour, idUser, setAtom) => {
  const data = await OverViewAPI.submitUploadLiked(idTour, idUser)
  data.success ? setAtom(true) : Alert.alert('Thất bại', 'Có lỗi xảy ra')
}