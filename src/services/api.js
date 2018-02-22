import axios from 'axios'

class Api {
  constructor() {
    this.baseURL = ''
  }

  get() {
    const options = {
      method: 'GET',
      baseURL: this.baseURL,
      timeout: 60000,
    }

    return new Promise((resolve, reject) => {
      axios
        .request(options)
        .then(result => resolve(result))
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default new Api()
