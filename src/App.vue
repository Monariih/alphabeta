<template>
  <v-app>
    <AppHeader v-if="screenSize" />
    <AppHeaderXs v-if="!screenSize" />
    <v-main class="bg-alphabeta-background">
      <router-view />
    <AppFooter v-if="screenSize" />
    <AppFooterXs v-if="!screenSize"/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  setup() {
  },
  computed: {
    screenSize() {
      const { sm, md, lg, xl, xxl } = this.$vuetify.display
      return sm ? true : md ? true : lg ? true : xl ? true : xxl ? true : false
    },
  }
}
</script>
