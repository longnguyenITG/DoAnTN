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
  },
  submitJoinTour: function(idTour, idUser) {
    return fetch(`${Constants.host}/DoAnTN/jointour.php`,
    {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idTour,
        idUser
      }),
    })
    .then((response)=> response.json())
    .then((json)=> json)
    .catch((err)=> {
      console.log('submitJoinTour err', err)
    })
  },
  fetchLiked: function(idTour, idUser) {
    return fetch(`${Constants.host}/DoAnTN/getLiked.php`,
    {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idTour,
        idUser
      }),
    })
    .then((response)=> response.json())
    .then((json)=> json)
    .catch((err)=> {
      console.log('fetchLiked err', err)
    })
  },
  submitDeleteLiked: function(idTour, idUser) {
    return fetch(`${Constants.host}/DoAnTN/deleteLiked.php`,
    {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idTour,
        idUser
      }),
    })
    .then((response)=> response.json())
    .then((json)=> json)
    .catch((err)=> {
      console.log('submitDeleteLiked err', err)
    })
  },
  submitUploadLiked: function(idTour, idUser) {
    return fetch(`${Constants.host}/DoAnTN/uploadLiked.php`,
    {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idTour,
        idUser
      }),
    })
    .then((response)=> response.json())
    .then((json)=> json)
    .catch((err)=> {
      console.log('submitUploadLiked err', err)
    })
  },
}