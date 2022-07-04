export default {
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId; // досутп к getters в главном index
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasrequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  }
};