export default {
    coaches(state) {
      return state.coaches;
    },
    hascoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) {
      const coaches = getters.coaches;
      const userId = rootGetters.userId;
      return coaches.some( // some метод, который возвращает true, если какой-то тренер соответствует критериям
        coach => coach.id === userId
      ); 
    }
};