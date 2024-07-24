<template>
	<v-row no-gutters align="center" class="my-4" v-if="cols == 6">
		<v-col class="d-flex" cols="6" offset="3">
			<div>
				<v-img
					src="../assets/alphabeta-logos/alphabeta-who-are-we.jpg"
					width="300"
				></v-img>
			</div>
			<div class="mx-2 my-8">
				<p class="text-h4">
					{{ whoWeAre.title }}
				</p>
				<p class="text-body-1 text-justify">
					{{ whoWeAre.text }}
				</p>
			</div>
		</v-col>
	</v-row>
	<v-row no-gutters align="center" class="my-4" v-if="cols == 6">
		<v-col class="d-flex" cols="6" offset="3">
			<div class="mx-2 my-8">
				<p class="text-h4 text-right px-2">
					{{ location.title }}
				</p>
				<p class="text-body-1 text-justify">
					{{ location.text }}
				</p>
			</div>
			<div>
				<iframe 
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.720912150467!2d-46.6193651!3d-23.685936599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44f1d7daebd7%3A0x9de6668372ee3cb2!2sR.%20Orense%2C%2041%20-%20Sala%201214%20-%20Centro%2C%20Diadema%20-%20SP%2C%2009920-650!5e0!3m2!1spt-BR!2sbr!4v1721743831195!5m2!1spt-BR!2sbr" 
					width="300" 
					height="300" 
					style="border:0;" 
					allowfullscreen="true" 
					loading="lazy" 
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</v-col>
	</v-row>
	<v-container v-if="cols == 12">
		<v-row>	
			<v-col>
				<div class="pa-4">
					<p class="text-h4 text-center">{{ whoWeAre.title }}</p>
					<p class="text-body-1 text-justify">{{ whoWeAre.text }}</p>
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-img
				src="../assets/alphabeta-logos/alphabeta-who-are-we.jpg"
			></v-img>
		</v-row>
		<v-row>
			<v-col>
				<div class="pa-4">
					<p class="text-h4 text-center">{{ location.title }}</p>
					<p class="text-body-1 text-justify">{{ location.text }}</p>
				</div>
			</v-col>
		</v-row>
		<v-row>
			<iframe 
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.720912150467!2d-46.6193651!3d-23.685936599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44f1d7daebd7%3A0x9de6668372ee3cb2!2sR.%20Orense%2C%2041%20-%20Sala%201214%20-%20Centro%2C%20Diadema%20-%20SP%2C%2009920-650!5e0!3m2!1spt-BR!2sbr!4v1721743831195!5m2!1spt-BR!2sbr" 
					width="400" 
					height="400" 
					style="border:0;" 
					allowfullscreen="true" 
					loading="lazy" 
					referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</v-row>
	</v-container>
	
</template>

<script>
export default {
	setup() {
		return {
			whoWeAre: {title: 'Quem somos.', text: 'A Alphabeta é uma empresa que oferece mão de obra especializada e treinada para atender todas as demandas em serviços terceirizados, voltados para condomínios e empresas. Com mais de 10 anos de experiência, a Alphabeta compreende a importância da transformação digital e das novas relações comerciais e sociais no mundo dos negócios.'},
			location: {title: 'Localização', text: 'A Alphabeta está estrategicamente localizada na Rua Orense, 41 - Sala 1214, em Diadema, São Paulo. Esta localização facilita o acesso e a prestação de serviços para uma ampla variedade de clientes, desde condomínios residenciais e comerciais até instituições de ensino, indústrias, hospitais e empresas em geral.'}
		}
	},
	computed: {
			cols () {
			const { lg, xs } = this.$vuetify.display
			return lg ? [6] : xs ? [12] : [6]
		},
	}
}
</script>
