import {NotifyCation as NotifyCationAPI} from '../../api'
import {Alert} from 'react-native'

export const getListNotify = async (setAtom, setLoading) => {
  setLoading(true)
  const data = await NotifyCationAPI.fetchListNotify()
  setAtom(data)
  setLoading(false)
}
export const deleteNotify = async (idNoti, setLoading, setSuccessFully) => {
  debugger
  setLoading(true)
  const data = await NotifyCationAPI.deleteNotify(idNoti)
  if(data.success) {
    setLoading(false)
    setSuccessFully(true)
  } else {
    setLoading(false)
    Alert.alert('Thất bại', 'Có lỗi xảy ra')
  }
  
}