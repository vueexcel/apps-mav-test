<template>
  <v-app>
    <v-main>
      <div class="mt-6 mx-4">
        <router-view/>
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',

  components: {
    Footer
  },
};
</script>
