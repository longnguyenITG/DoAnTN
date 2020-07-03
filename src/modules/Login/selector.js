import {Authen as AuthenAPI} from '../../api'
import {Alert} from 'react-native'

export const getListAccount = async (setAtom, setLoading) => {
  setLoading(true)
  const data = await AuthenAPI.fetchListAccount()
  setAtom(data)
  setLoading(false)
}
export const uploadAccount = async (user, passWord, fullName, numberPhone, setLoading, setSuccessfully) => {
  setLoading && setLoading(true)
  const data = await AuthenAPI.submitAccount(user, passWord, fullName, numberPhone)
  if(setSuccessfully){
    data.success ? setSuccessfully(true)
    : Alert.alert('Thông báo', 'Có lỗi xảy ra, vui lòng thực hiện lại')
  }
  setLoading(false)
}