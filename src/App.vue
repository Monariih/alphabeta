<template>
  <v-app>
    <AppHeader v-if="screenSize" />
    <AppHeaderXs v-if="!screenSize" />
    <v-main class="bg-alphabeta-background">
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
export default {
  setup() {
  },
  computed: {
    screenSize() {
      const { sm } = this.$vuetify.display
      return sm ? true : false
    },
  }
}
</script>
