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
              <div class="my-2">
                <v-icon>mdi-email</v-icon>
                alphabeta@alphabeta.com.br
              </div>
              <div class="my-2">
                <v-icon>mdi-map-marker</v-icon>
                Rua Orense, 41 - Sala 1214 - Diadema - SP
              </div>
              <div class="my-2">
                <v-icon>mdi-phone</v-icon>
                (11) 5242-5488
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="my-4 mx-1">
        <v-divider></v-divider>
      </v-row>
      
      <v-row
        v-for="item in socialNetwork"
        :key="item.title"
        no-gutters
        class="text-center"
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
      <v-row>
        <v-col class="text-center">
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