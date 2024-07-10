<template>
	<div>
		<div>
			<v-parallax
				src="../assets/alphabeta-logos/logo-background.jpg"
				height="850"
			></v-parallax>
		</div>
	
		<div class="mx-auto w-lg-50 w-md-75 w-sm-75 position-relative mt-n16">
			<v-sheet class="pa-4 pa-sm-6 pa-md-8 pa-lg-12 rounded">
				<div class="text-h4 text-center">
					ALPHABETA
					<div class="text-caption mt-n2">
						SERVÇOS ESPECIALIZADOS EM SEGURANÇA E TERCEIRAZAÇÃO
					</div>
				</div>
				<v-divider class="my-2 mx-4"></v-divider>
				<div class="text-justify">
					A ALPHABETA oferece mão de obra especializada e treinada para atender todas as demandas
					em serviços terceirizados, tanto para condomínios quanto para empresas. Com mais de 10
					anos de experiência, entendemos profundamente a importância da transformação digital e
					das novas dinâmicas nas relações comerciais e sociais no mundo dos negócios.
					Estamos comprometidos em oferecer soluções inovadoras e eficientes para nossos clientes,
					adaptando-nos às necessidades do mercado atual. Nossos profissionais são cuidadosamente
					selecionados e continuamente treinados para garantir a mais alta qualidade de serviço,
					proporcionando segurança, confiabilidade e excelência operacional.
					Além disso, utilizamos tecnologias de ponta para otimizar processos e garantir uma gestão
					eficaz dos recursos, sempre visando a satisfação do cliente e a melhoria contínua. Com a ALPHABETA,
					você pode contar com um parceiro que entende suas necessidades e está preparado para enfrentá-las
					com competência e dedicação.
				</div>
			</v-sheet>
		</div>
	</div>
	<div class="mx-auto w-lg-50 w-md-75 w-sm-75 position-relative my-6">
		<v-sheet class="rounded">
			<v-container>
				<v-row>
					<v-col
						v-for="n in 4"
						:key="n"
						class="d-flex child-flex"
						:cols="cols[0]"
					>
						<v-img
							:lazy-src="imageLinks[n-1]"
							:src="imageLinks[n-1].img"
							aspect-ratio="1"
							class="bg-grey-lighten-2"
							cover
						>
							<template v-slot:placeholder>
								<v-row
									align="center"
									class="fill-height ma-0"
									justify="center"
								>
									<v-progress-circular
										color="grey-lighten-5"
										indeterminate
									></v-progress-circular>
								</v-row>
							</template>
							<v-sheet class="position-absolute rounded-e-lg mt-16 pl-6 pr-2">
								<div class="text-h6 text-center">
									{{ imageLinks[n-1].text }}
								</div>
							</v-sheet>
						</v-img>
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
			imageLinks: [
				{
					img: "https://seguranca.grupolasetronik.com.br/imagens/onde-faz-instalacao-de-camera-de-seguranca.jpg",
					text: "Câmeras de segurança"
				},
				{
					img: "https://www.generall.com.br/wp-content/uploads/elementor/thumbs/O-que-e-uma-central-de-monitoramento-px2roww7mssqn9nzkgkqbx4371itvnkvuj5r594ys0.jpg",
					text: "Central de monitoramento"
				},
				{
					img: "https://ascenty.com/wp-content/uploads/2021/07/Seguranca-de-dados-1920x1000-c-default.jpg",
					text: "Segurança de dados"
				},
				{
					img: "https://www.nuvent.com.br/wp-content/uploads/2020/04/segurancaparaeventos.jpeg",
					text: "Segurança para eventos"
				},
			]
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