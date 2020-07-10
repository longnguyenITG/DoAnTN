import {NotifyCation as NotifyCationAPI} from '../../api'
import {Alert} from 'react-native'
import {selector} from 'recoil'
import {listNotify} from './atom'

export const getListNotify = async (setAtom, setLoading) => {
  setLoading(true)
  const data = await NotifyCationAPI.fetchListNotify()
  setAtom(data)
  setLoading(false)
}
export const deleteNotify = async (idNoti, setLoading, setSuccessFully) => {
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
export const deleteAtomNotify = selector({
  key: 'deleteAtomNotify',
  get: ({ get }) => {
    const list = get(listNotify);
    return list;
  },
  set: ({ get, set }, idNoti) => {
    let list = get(listNotify);
    const index = list.findIndex(e => e.idNoti == idNoti)
    let temp = list.slice()
    temp.splice(index, 1)
    console.log('list', temp)
    set(
      listNotify,
      temp
    );
  },
});
