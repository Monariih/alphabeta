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
	<div class="mx-auto w-lg-50 w-md-75 w-sm-75 my-12" v-if="cols == 6">
		<v-row
			v-for="(item, i) in imageLinks"
			:key="i"
			class="pa-3"
		>
			<v-sheet class="pa-2 w-100 rounded elevation-4">
				<v-row>
					<v-col cols="5">
						<v-img :src="imageLinks[i].img" aspect-ratio="1" cover>
							<v-sheet class="position-absolute rounded-e-lg mt-16 pl-6 pr-2">
								<div class="text-h6 text-center">
									{{ imageLinks[i].title }}
								</div>
							</v-sheet>
						</v-img>
					</v-col>
					<v-col>
						<v-card
							height="100%"
							variant="outlined"
						>
							<v-card-text>
								{{ imageLinks[i].text }}
							</v-card-text>
							<v-card-actions
								class="position-absolute bottom-0"
							>
								<div>
									<v-btn
										text
										color="primary"
										target="_blank"
										href="https://api.whatsapp.com/send?phone=551152425488"
									>
										Saiba mais
									</v-btn>
								</div>
								
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>

			</v-sheet>
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
					text: "Oferecemos projeto, instalação e manutenção de câmeras de segurança para condomínios e empresas. Nosso serviço inclui controle de acesso e monitoramento 24 horas por dia, garantindo a máxima segurança para o seu ambiente. Entre em contato conosco e solicite um orçamento personalizado."
				},
				{
					img: "https://www.generall.com.br/wp-content/uploads/elementor/thumbs/O-que-e-uma-central-de-monitoramento-px2roww7mssqn9nzkgkqbx4371itvnkvuj5r594ys0.jpg",
					title: "Central de monitoramento",
					text: "Central de monitoramento 24 horas por dia, 7 dias por semana. Equipe especializada em segurança e tecnologia para garantir a proteção de seu patrimônio. Monitore seu condomínio ou empresa de qualquer lugar do mundo. Entre em contato conosco e saiba mais."
				},
				{
					img: "https://img.freepik.com/fotos-gratis/digitalizando-o-dedo-em-um-controle-de-acesso-por-impressao-digital-contaminada-por-coronavirus_53876-95279.jpg?t=st=1725918224~exp=1725921824~hmac=26aae096f9381fb0b7fa9d26f40e8a2b12dc77cc42af5c9e314a96bdbc4c71fc&w=1380",
					title: "Portaria e controle de acesso",
					text: "Nosso serviço de portaria é amplamente reconhecido e valorizado por clientes de condomínios e empresas. Garantimos colaboradores rigorosamente selecionados, cordiais, eficientes e atenciosos, que se adaptam perfeitamente às necessidades específicas de cada local de trabalho. Confie em nossa expertise para proporcionar segurança e tranquilidade ao seu ambiente."
				},
				{
					img: "https://img.freepik.com/fotos-gratis/materiais-de-construcao-e-rascunhos-perto-de-laptop_23-2147831947.jpg?t=st=1725918554~exp=1725922154~hmac=4b5311479be06527ff1affd1222fd5f2d6d153ca232b3128827990d9672675bf&w=1380",
					title: "Serviços de engenharia",
					text: "Oferecemos projeto, instalações e manutenções em serviços de engenharia elétrica, hidráulica e telefonia. Também realizamos habilitação de rede de gases para indústrias e hospitais, garantindo eficiência e segurança em todas as etapas."
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