import {MyTour as MyTourAPI, MyTour} from '../../api'

export const getListTourComing = async (idUser, setAtom, setLoading) => {
  setLoading(true)
  const data = await MyTourAPI.fetchListTourComing(idUser)
  setAtom(data)
  setLoading(false)
}
export const getListTourWalking = async (idUser, setAtom, setLoading) => {
  setLoading(true)
  const data = await MyTourAPI.fetchListTourWalking(idUser)
  setAtom(data)
  setLoading(false)
}
export const getListTourWent = async (idUser, setAtom, setLoading) => {
  setLoading(true)
  const data = await MyTourAPI.fetchListTourWent(idUser)
  setAtom(data)
  setLoading(false)
}