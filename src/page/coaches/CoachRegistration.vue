<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: { CoachForm },
  data() {
    return {

    };
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data); // отравляем в actioncs
      this.$router.replace('/coaches'); // replace and push - replace не позвоялет вернутся
    }
  },
}
</script>