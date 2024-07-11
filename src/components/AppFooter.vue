<template>
	<v-footer
		class="bg-grey-darken-4"
	>
    <v-row>
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
    </v-row>
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
</script>