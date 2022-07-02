<template>
  <header>
    FILTER
  </header>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item v-for="coach in filtredCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName"
          :lastName="coach.lastName" :areas="coach.areas" :rate="coach.hourlyRate"></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
  components: {
    CoachItem
  },
  computed: {
    filtredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hascoaches'];
    }
  }
}
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>