<template>
  <v-app>
    <AppHeader v-if="screenSize" />
    <AppHeaderXs v-if="!screenSize" />
    <v-main class="bg-alphabeta-background">
      <router-view />
      <!-- Botão flutuante do WhatsApp -->
      <a
        href="https://api.whatsapp.com/send?phone=551152425488"
        target="_blank"
        class="whatsapp-float"
      >
        <v-icon class="whatsapp-icon">mdi-whatsapp</v-icon>
      </a>
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

<style>
.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;
}

.whatsapp-icon {
  font-size: 45px;
	margin: 7px 0 0 3px;
  color: #fff;
}
</style>
