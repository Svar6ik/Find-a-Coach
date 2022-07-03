export default {
  contactCoach(contex, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      UserEmail: payload.email,
      message: payload.message,
    };

    contex.commit('addRequest', newRequest);
  }
};