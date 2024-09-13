<template>
	<v-footer
		class="bg-grey-darken-4 w-100"
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
      <v-col class="">
        <div class="">
          <v-img
            src="../assets/alphabeta-logos/logo.png"
            max-height="80"
          ></v-img>
          <v-divider class="my-2"></v-divider>
          <div class="text-center">
            <v-icon>mdi-map-marker</v-icon>
            Rua Orense, 41 - Sala 1214 - Diadema - SP
            <div>
              <v-icon>mdi-phone</v-icon>
              (11) 5242-5488
            </div>
          </div>
        </div>
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