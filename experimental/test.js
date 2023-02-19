const axios = require('axios')

const URI = 'https://yomomma-api.herokuapp.com/jokes'

const f = async (uri) => {
  const res = await axios.get(uri)
  const id = res.data.id
  return id
}
