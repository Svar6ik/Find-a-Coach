export default {
    coaches(state) {
      return state.coaches;
    },
    hascoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
};