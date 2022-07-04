export default {
  async contactCoach(contex, payload) {
    const newRequest = {
      UserEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(`https://vue-demo-coach-f459b-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest),
    });
    
    const responseData = await response.json();
    
    if(!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request!');
      throw error;
    }

    newRequest.id = responseData.name // добавляю новое свойство ID в newRequest
    newRequest.coachId = payload.coachId;

    contex.commit('addRequest', newRequest);
  },
  async fetchRequests(contex) { // получение запроса
    const coachId = contex.rootGetters.userId;
    const response = await fetch(`https://vue-demo-coach-f459b-default-rtdb.firebaseio.com/requests/${coachId}.json`);
    const responseData = await response.json();

    if(!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch requests!');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        UserEmail: responseData[key].UserEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    contex.commit('setRequest', requests);
  }
}