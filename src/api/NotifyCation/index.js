import Constants from '../../utils/Constants'

export default {
  fetchListNotify: function() {
    return fetch(`${Constants.host}/DoAnTN/getNotify.php`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => {
      console.log('fetchListNotify err', err)
    })
  },
  deleteNotify: function(idNoti) {
    return fetch(`${Constants.host}/DoAnTN/deleteNotification.php`,
    {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idNoti
      }),
    })
    .then((response)=> response.json())
    .then((json)=> json)
    .catch((err)=> {
      console.log('deleteNotify err', err)
    })
  },
}