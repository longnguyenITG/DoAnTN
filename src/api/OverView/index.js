import Constants from '../../utils/Constants'

export default {
  fetchListTour: function() {
    return fetch(`${Constants.host}/DoAnTN/gettour.php`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => {
      console.log('fetchListTour err', err)
    })
  },
  fetchDetailTour: function(idTour) {
    return fetch(`${Constants.host}/DoAnTN/getDetailTour.php`,
    {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idTour
      }),
    })
    .then((response)=> response.json())
    .then((json)=> json)
    .catch((err)=> {
      console.log('fetchDetailTour err', err)
    })
  }
}