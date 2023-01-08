<template>
  <section>
    <base-card>
      <h2>page not found</h2>
      <p>
        This page could not be found - may be check out all our
        <router-link to="/coaches">coaches </router-link>
      </p>
    </base-card>
  </section>
</template>
<script>
import BaseCard from '../components/ui/BaseCard.vue';
export default {
  components: { BaseCard },
};
</script>
