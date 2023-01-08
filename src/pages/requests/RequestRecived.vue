<template>
  <section>
    <base-dailog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dailog>
    <base-card>
      <header>
        <h2>Requests Recived</h2>
      </header>
      <base-spinner v-if="isLoading"> </base-spinner>
      <ul v-else-if="hasRequest">
        <request-item
          v-for="req in recivedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        >
        </request-item>
      </ul>
      <h3 v-else>You haven't recived any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
import BaseDailog from '../../components/ui/BaseDialog.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';

export default {
  components: { RequestItem, BaseDailog, BaseSpinner },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    recivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequest() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  methods: {
    async loadRequest() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'something failed;';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadRequest();
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
