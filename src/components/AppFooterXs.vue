<template>
  <v-footer
    class="bg-grey-darken-4"
  >
    <v-container>

      <v-row>
        <v-col>
          <div>
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
      </v-row>
    </div>
    </v-container>
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