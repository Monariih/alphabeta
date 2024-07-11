<template>
  <v-footer height="40" app>
    <a
      v-for="item in items"
      :key="item.title"
      <v-col>
        <v-row
          v-for="item in socialNetwork"
          :key="item.title"
          no-gutters
        >
          <v-col>
            <v-btn
              :prepend-icon="item.icon"
              variant="plain"
              size="large"
              :href="item.to"
              target="_blank"
            >{{ item.title }}</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
      <a
      </v-col>
      <v-col class="text-right">
        <v-row
          v-for="item in contactForms"
          :key="item.title"
          no-gutters
        >
          <v-col>
            <v-btn
              :append-icon="item.icon"
              variant="plain"
              size="large"
              :href="item.to"
              target="_blank"
            >{{ item.title }}</v-btn>
          </v-col>
        </v-row>
      </v-col>
</template>

<script>
export default {
  setup() {
    return {
      socialNetwork: [
        { title: 'Facebook', icon: 'mdi-facebook', to: 'https://www.facebook.com' },
        { title: 'Instagram', icon: 'mdi-instagram', to: 'https://www.instagram.com' },
        { title: 'LinkedIn', icon: 'mdi-linkedin', to: 'https://www.linkedin.com' }
      ],
      contactForms: [
        { title: 'Email', icon: 'mdi-email', to: 'mailto:' },
        { title: 'Telefone', icon: 'mdi-phone', to: 'tel:' },
        { title: 'WhatsApp', icon: 'mdi-whatsapp', to: 'https://api.whatsapp.com/send?phone='}
      ]
    }
  }
}
    {
      title: 'Vuetify GitHub',
      icon: `mdi-github`,
      href: 'https://github.com/vuetifyjs/vuetify',
    },
    {
      title: 'Vuetify Discord',
      icon: `mdi-discord`,
      href: 'https://community.vuetifyjs.com/',
    },
    {
      title: 'Vuetify Reddit',
      icon: `mdi-reddit`,
      href: 'https://reddit.com/r/vuetifyjs',
    },
  ]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
