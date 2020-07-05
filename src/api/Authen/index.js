import Constants from '../../utils/Constants'
export default {
  fetchListAccount: function() {
    return fetch (`${Constants.host}/DoAnTN/getAccount.php`)
    .then((response)=> response.json())
    .then((json)=> json)
    .catch((err)=> {
      console.log('fetchListAccount', err)
    })
  },
  submitAccount: function(userName, passWord, fullName, sdt) {
    return fetch (`${Constants.host}/DoAnTN/uploadUser.php`,
    {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        passWord,
        sdt,
        fullName
      }),
    })
    .then((response)=> response.json())
    .then((json)=> json)
    .catch((err)=> {
      console.log('submitAccount error', err)
    })
  }
}