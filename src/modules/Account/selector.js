import {Account as AccountAPI} from '../../api'

export const getAccountUpdated = async (idUser, setAtom) => {
  const data = await AccountAPI.fetchAccountUpdated(idUser)
  setAtom(data[0])
}