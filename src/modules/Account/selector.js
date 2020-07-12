import {Account as AccountAPI} from '../../api'

export const getAccountUpdated = async (idUser, setAtom) => {
  const data = await AccountAPI.fetchAccountUpdated(idUser)
  setAtom(data[0])
}
export const submitChangePass = async (idUser, passWord, setLoading) => {
  setLoading(true)
  const data = await AccountAPI.SubmitChangePassWord(idUser, passWord)
  setLoading(false)
  return data
}