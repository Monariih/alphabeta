<template>
	<v-app-bar scroll-behavior="hide" class="bg-alphabeta-red">
		<div class="d-flex align-center mx-auto">
			<div class="text-h4 text-alphabeta-grey mx-4">
				<router-link to="/">
					<v-img
						:width="200"
						src="../assets/alphabeta-logos/logo-txt.png"
					></v-img>
				</router-link>
			</div>
			<v-divider class="border-opacity-100" color="alphabeta-grey" vertical></v-divider>
			<div class="text-alphabeta-grey">
				<v-btn to="/">Home</v-btn>
				<v-btn to="/quem-somos">Quem somos</v-btn>
				<v-btn to="/clientes">Clientes</v-btn>
				<v-btn to="/servicos">Serviços</v-btn>
				<v-btn to="/fale-conosco">Fale Conosco</v-btn>
			</div>
		</div>
	</v-app-bar>
</template>