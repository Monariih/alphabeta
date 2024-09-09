<template>
	<div>
		<div>
			<v-parallax
				src="../assets/alphabeta-logos/alphabeta-background-horizontal.jpg"
				height="650"
			></v-parallax>
		</div>

		<div>
			<v-sheet class="text-center pa-4">
				Soluções em segurança e terceirização para condomínios e empresas
			</v-sheet>
		</div>
	</div>
	<div class="mx-auto w-lg-50 w-md-75 w-sm-75 my-12">
		<v-row
			v-for="(item, i) in imageLinks"
			:key="i"
		>
			<v-col>
				<v-img :src="imageLinks[i].img" aspect-ratio="4/3">
					<v-sheet class="position-absolute rounded-e-lg mt-16 pl-6 pr-2">
						<div class="text-h5 text-center">
							{{ imageLinks[i].title }}
						</div>
					</v-sheet>
				</v-img>
			</v-col>
			<v-col 
				v-if="cols == 6"
				class="my-4"	
			>
				<div class="text-justify">
					{{ imageLinks[i].text }}
				</div>
				<div class="d-flex my-2 justify-end">
					<v-btn
						color="alphabeta-red"
						large
						rounded
					>
						Saiba mais
					</v-btn>
				</div>
			</v-col>
			<div 
				v-if="cols == 12"
				class="text-justify pa-4"	
			>
				<div>
					{{ imageLinks[i].text }}
				</div>
				<div class="d-flex justify-end">
					<v-btn
						class="mt-4"
						color="alphabeta-red"
						large
						rounded
					>
						Saiba mais
					</v-btn>
				</div>
			</div>
		</v-row>
	</div>

	<div class="mx-auto w-lg-50 w-md-75 w-sm-75 position-relative my-12 d-md-rouded-lg">
		<v-sheet class="pa-4 pa-sm-6 pa-md-8 pa-lg-12">
			<div class="text-h4 text-center">
				ALPHABETA
			</div>
			<v-divider class="my-2 mx-4"></v-divider>
			<div class="text-justify">
				{{ primaryText }}
			</div>
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
					title: "Câmeras de segurança",
					text: "Instalação e manutenção de câmeras de segurança para condomínios e empresas. Controle de acesso e monitoramento 24 horas por dia. Proteja seu patrimônio e garanta a segurança de seus colaboradores e clientes. Entre em contato conosco e solicite um orçamento."
				},
				{
					img: "https://www.generall.com.br/wp-content/uploads/elementor/thumbs/O-que-e-uma-central-de-monitoramento-px2roww7mssqn9nzkgkqbx4371itvnkvuj5r594ys0.jpg",
					title: "Central de monitoramento",
					text: "Central de monitoramento 24 horas por dia, 7 dias por semana. Equipe especializada em segurança e tecnologia para garantir a proteção de seu patrimônio. Monitore seu condomínio ou empresa de qualquer lugar do mundo. Entre em contato conosco e saiba mais."
				},
				{
					img: "https://ascenty.com/wp-content/uploads/2021/07/Seguranca-de-dados-1920x1000-c-default.jpg",
					title: "Segurança de dados",
					text: "Proteja as informações de sua empresa com soluções de segurança de dados. Backup em nuvem, criptografia, firewall e muito mais. Garanta a integridade e a confidencialidade de seus dados. Entre em contato conosco e saiba mais."
				},
				{
					img: "https://www.nuvent.com.br/wp-content/uploads/2020/04/segurancaparaeventos.jpeg",
					title: "Segurança para eventos",
					text: "Segurança para eventos corporativos, sociais, esportivos e culturais. Equipe especializada em segurança e atendimento ao público. Controle de acesso, segurança patrimonial, brigada de incêndio e muito mais. Entre em contato conosco e solicite um orçamento."
				},
			],
			primaryText:
				`A ALPHABETA oferece mão de obra especializada e treinada para atender todas as demandas
				em serviços terceirizados, tanto para condomínios quanto para empresas.Com mais de 10
				anos de experiência, entendemos profundamente a importância da transformação digital e
				das novas dinâmicas nas relações comerciais e sociais no mundo dos negócios.
				Estamos comprometidos em oferecer soluções inovadoras e eficientes para nossos clientes,
				adaptando-nos às necessidades do mercado atual. Nossos profissionais são cuidadosamente
				selecionados e continuamente treinados para garantir a mais alta qualidade de serviço,
				proporcionando segurança, confiabilidade e excelência operacional.
				Além disso, utilizamos tecnologias de ponta para otimizar processos e garantir uma gestão
				eficaz dos recursos, sempre visando a satisfação do cliente e a melhoria contínua. Com a ALPHABETA,
				você pode contar com um parceiro que entende suas necessidades e está preparado para enfrentá-las
				com competência e dedicação .`,
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