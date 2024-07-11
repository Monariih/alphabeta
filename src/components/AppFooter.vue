<template>
  <v-footer height="40" app>
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon === '$vuetify' ? 24 : 16"
      />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      &copy; 2016-{{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Vuetify, LLC</span>
      —
      <a
        class="text-decoration-none on-surface"
        href="https://vuetifyjs.com/about/licensing/"
        rel="noopener noreferrer"
        target="_blank"
      >
        MIT License
      </a>
    </div>
  </v-footer>
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
