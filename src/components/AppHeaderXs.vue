<template>
  <v-app-bar scroll-behavior="collapse" class="bg-alphabeta-red">
		<v-app-bar-nav-icon @click.stop="drawer = !drawer">
		</v-app-bar-nav-icon>
		<v-toolbar-title>
			<router-link to="/">
				<v-img
					:width="200"
					src="../assets/alphabeta-logos/logo-txt.png"
				></v-img>
			</router-link>
		</v-toolbar-title>
	</v-app-bar>

		<v-navigation-drawer
			v-model="drawer"
			:location="$vuetify.display.mobile ? 'bottom' : undefined"
			temporary
		>
			<v-list
				class="bg-alphabeta-red"
			>
				<v-list-item
					v-for="item in items"
					:key="item.title"
					:to="item.to"
					link
				>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
					<template v-slot:append>
          <v-icon :icon="item.icon"></v-icon>
        </template>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
</template>

<script>
export default {
	data: () => ({
		drawer: false,
		group: null,
		items: [
			{ title: 'Home', icon: 'mdi-home', to: '/' },
			{ title: 'Quem somos', icon: 'mdi-account-group', to: '/quem-somos' },
			{ title: 'Clientes', icon: 'mdi-account-multiple', to: '/clientes' },
			{ title: 'Serviços', icon: 'mdi-cog', to: '/servicos' },
			{ title: 'Fale Conosco', icon: 'mdi-email', to: '/fale-conosco' },
		],
	}),
	watch: {
		group () {
			this.drawer = false
		},
	}
}
</script>