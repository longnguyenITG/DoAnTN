import Constants from '../../utils/Constants'

export default {

  fetchListTourComing: function(idUser) {
    return fetch(`${Constants.host}/DoAnTN/getUpComing.php`,
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
      console.log('fetchListTourComing err', err)
    })
  },
  fetchListTourWalking: function(idUser) {
    return fetch(`${Constants.host}/DoAnTN/getWalking.php`,
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
      console.log('fetchListTourWalking err', err)
    })
  },
  fetchListTourWent: function(idUser) {
    return fetch(`${Constants.host}/DoAnTN/getWent.php`,
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
      console.log('fetchListTourWent err', err)
    })
  },
}