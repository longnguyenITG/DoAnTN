import Constants from '../../utils/Constants'

export default {

  fetchAccountUpdated: function(idUser) {
    return fetch(`${Constants.host}/DoAnTN/getAccountUpdated.php`,
    {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idUser
      }),
    })
    .then((response)=> response.json())
    .then((json)=> json)
    .catch((err)=> {
      console.log('fetchLiked err', err)
    })
  },
  SubmitChangePassWord: function(idUser, passWord) {
    return fetch(`${Constants.host}/DoAnTN/changePass.php`,
    {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idUser,
        passWord
      }),
    })
    .then((response)=> response.json())
    .then((json)=> json)
    .catch((err)=> {
      console.log('SubmitChangePassWord err', err)
    })
  },
}