export default {
  fetchListAccount: function() {
    return fetch ('http://192.168.99.94/DoAnTN/getAccount.php')
    .then((response)=> response.json())
    .then((json)=> json)
    .catch((err)=> {
      console.log('fetchListAccount', err)
    })
  },
  submitAccount: function(userName, passWord, fullName, sdt) {
    debugger
    return fetch ('http://192.168.99.94/DoAnTN/uploadUser.php',
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