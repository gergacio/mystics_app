const baseURL = 'http://localhost:9000/api/mystics/'
//  app.use('/api/mystics', mysticsRouter);--- base route using by express

 const MysticsService = {
  getMystics() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  postMystics(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteMystics(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}

export default MysticsService;