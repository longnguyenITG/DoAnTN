import Constants from '../../utils/Constants'

export default {

  fetchAccountUpdated: function(idUser) {
    debugger
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
}