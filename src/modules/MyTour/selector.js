import {MyTour as MyTourAPI, MyTour} from '../../api'
import {OverView as OverViewAPI} from '../../api'
import {selector} from 'recoil'
import {listTourComing, listTourWalking, listTourWent} from './atom'

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
export const deleteLiked = async (idTour, idUser) => {
  const data = await OverViewAPI.submitDeleteLiked(idTour, idUser)
  data.success ? null : Alert.alert('Thất bại', 'Có lỗi xảy ra')
}
export const uploadLiked = async (idTour, idUser) => {
  const data = await OverViewAPI.submitUploadLiked(idTour, idUser)
  data.success ? null : Alert.alert('Thất bại', 'Có lỗi xảy ra')
}
export const deleteAtomLikeComing = selector({
  key: 'deleteAtomLikeComing',
  get: ({ get }) => {
    const list = get(listTourComing);
    return list;
  },
  set: ({ get, set }, index) => {
    let list = get(listTourComing);
    let temp = list.slice()
    temp[index] = {...temp[index], like_yn: null}
    console.log('list', temp)
    set(
      listTourComing,
      temp.slice()
    );
  },
});
export const deleteAtomLikeWalking = selector({
  key: 'deleteAtomLikeWalking',
  get: ({ get }) => {
    const list = get(listTourWalking);
    return list;
  },
  set: ({ get, set }, index) => {
    let list = get(listTourWalking);
    let temp = list.slice()
    temp[index] = {...temp[index], like_yn: null}
    console.log('list', temp)
    set(
      listTourWalking,
      temp.slice()
    );
  },
});
export const deleteAtomLikeWent = selector({
  key: 'deleteAtomLikeWent',
  get: ({ get }) => {
    const list = get(listTourWent);
    return list;
  },
  set: ({ get, set }, index) => {
    let list = get(listTourWent);
    let temp = list.slice()
    temp[index] = {...temp[index], like_yn: null}
    console.log('list', temp)
    set(
      listTourWent,
      temp.slice()
    );
  },
});

export const uploadAtomLikeComing = selector({
  key: 'uploadAtomLikeComing',
  get: ({ get }) => {
    const list = get(listTourComing);
    return list;
  },
  set: ({ get, set }, index) => {
    let list = get(listTourComing);
    let temp = list.slice()
    temp[index] = {...temp[index], like_yn: 1}
    console.log('list', temp)
    set(
      listTourComing,
      temp.slice()
    );
  },
});
export const uploadAtomLikeWalking = selector({
  key: 'uploadAtomLikeWalking',
  get: ({ get }) => {
    const list = get(listTourWalking);
    return list;
  },
  set: ({ get, set }, index) => {
    let list = get(listTourWalking);
    let temp = list.slice()
    temp[index] = {...temp[index], like_yn: 1}
    console.log('list', temp)
    set(
      listTourWalking,
      temp.slice()
    );
  },
});
export const uploadAtomLikeWent = selector({
  key: 'uploadAtomLikeWent',
  get: ({ get }) => {
    const list = get(listTourWent);
    return list;
  },
  set: ({ get, set }, index) => {
    let list = get(listTourWent);
    let temp = list.slice()
    temp[index] = {...temp[index], like_yn: 1}
    console.log('list', temp)
    set(
      listTourWent,
      temp.slice()
    );
  },
});
