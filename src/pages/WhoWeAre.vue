<template>
	<div>
		<v-sheet class="my-6">
			<v-container>
				<v-row no-gutters class="mx-auto w-lg-50 w-md-75 w-sm-75 my-12">
					<v-col class="">
						<div>
							<v-img 
								:width="200"
								src="https://scontent.fgru6-1.fna.fbcdn.net/v/t1.6435-9/93136940_105502114464058_2667872051770949632_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=3iCZvxSq6tkQ7kNvgEQmPUd&_nc_ht=scontent.fgru6-1.fna&oh=00_AYCEBeuUtpXr80uCbfG8vE4w34nJ7kgxl5SK4m2FYnHBfw&oe=66C5D617"
							></v-img>
						</div>
					</v-col>
					<v-col>
						<v-sheet class="pa-4">
							<div class="text-h4">
								Quem somos
							</div>
							<div class="text-justify">
								A Alphabeta é uma empresa especializada em segurança e terceirização para condomínios e empresas. Atuamos no mercado desde 2000 e temos como missão oferecer soluções personalizadas e inovadoras para nossos clientes.
							</div>
						</v-sheet>
					</v-col>
				</v-row>
			</v-container>
		</v-sheet>
	</div>
</template>

<script>
export default {
	setup() {
		return {
			whoWeAre: {title: 'Quem somos.', text: 'A Alphabeta é uma empresa que oferece mão de obra especializada e treinada para atender todas as demandas em serviços terceirizados, voltados para condomínios e empresas. Com mais de 10 anos de experiência, a Alphabeta compreende a importância da transformação digital e das novas relações comerciais e sociais no mundo dos negócios.'}
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
