<template>
	<v-row no-gutters align="center" class="my-4" v-if="cols == 6">
		<v-col class="d-flex" cols="6" offset="3">
			<v-sheet class="w-100 pa-4 rounded elevation-4">
				<v-row>
					<v-col>
						<v-img
							src="../assets/alphabeta-logos/alphabeta-who-are-we.jpg"
						></v-img>
					</v-col>
					<v-col>
						<p class="text-h4 text-center">{{ whoWeAre.title }}</p>
						<p class="text-body-1 text-justify">{{ whoWeAre.text }}</p>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<p class="text-body-1 text-justify">{{ whoWeAre.secondaryText }}</p>
					</v-col>
				</v-row>
			</v-sheet>
		</v-col>
	</v-row>
	<v-row no-gutters align="center" class="my-4" v-if="cols == 6">
		<v-col class="d-flex" cols="6" offset="3">
			<v-sheet class="w-100 pa-4 rounded elevation-4">
				<v-row>
					<v-col>
						<div class="text-h4 text-right px-2">
							<p class="text-h4 text-center">{{ location.title }}</p>
							<p class="text-body-1 text-justify">{{ location.text }}</p>
						</div>
					</v-col>
					<v-col>
						<iframe 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.720912150467!2d-46.6193651!3d-23.685936599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44f1d7daebd7%3A0x9de6668372ee3cb2!2sR.%20Orense%2C%2041%20-%20Sala%201214%20-%20Centro%2C%20Diadema%20-%20SP%2C%2009920-650!5e0!3m2!1spt-BR!2sbr!4v1721743831195!5m2!1spt-BR!2sbr" 
						width="300" 
						height="300" 
						style="border:0;" 
						allowfullscreen="true" 
						loading="lazy" 
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
					</v-col>
				</v-row>
			</v-sheet>
		</v-col>
	</v-row>
	<v-row no-gutters align="center" class="my-12" v-if="cols == 6">
		<v-col class="d-flex" cols="6" offset="3">
			<v-expansion-panels variant="inset">
				<v-expansion-panel
					v-for="(item, i) in missionVision"
					:key="i"
					class="text-justify text-body-1"
				>
					<v-expansion-panel-title>
						{{ item.title }}
						<template v-slot:actions>
							<v-icon>{{ item.icon }}</v-icon>
						</template>
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						{{ item.text }}
					</v-expansion-panel-text>
				</v-expansion-panel>
				<v-expansion-panel
					:title="values[0].title"
					class="text-justify text-body-1"
				>
					<v-expansion-panel-text>
						<li
							v-for="(item, i) in values[0].text"
							:key="i"
							class="my-3"
						>
							{{ item }}
						</li>
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
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
				<p class="text-body-1 text-justify">{{ whoWeAre.secondaryText }}</p>
			</v-col>
		</v-row>
		<v-row>
			<v-divider class="my-2 mx-4"></v-divider>
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
					width="500"
					height="500" 
					style="border:0;" 
					allowfullscreen="true" 
					loading="lazy" 
					referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</v-row>
		<v-row class="my-12">
			<v-expansion-panels variant="inset">
				<v-expansion-panel
					v-for="(item, i) in missionVision"
					:key="i"
					class="text-justify text-body-1"
				>
					<v-expansion-panel-title>
						{{ item.title }}
						<template v-slot:actions>
							<v-icon>{{ item.icon }}</v-icon>
						</template>
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						{{ item.text }}
					</v-expansion-panel-text>
				</v-expansion-panel>
				<v-expansion-panel
					:title="values[0].title"
					class="text-justify text-body-1"
				>
					<v-expansion-panel-text>
						<li
							v-for="(item, i) in values[0].text"
							:key="i"
							class="my-3"
						>
							{{ item }}
						</li>
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-row>
	</v-container>
	
</template>

<script>
export default {
	setup() {
		return {
			whoWeAre: {
				title: 'Quem somos.',
				text: `
					Fundada em 2009, nossa empresa tem se destacado no mercado de segurança patrimonial,
				 	oferecendo soluções completas e personalizadas em portaria e controle de acesso.
				  Com uma equipe altamente qualificada e comprometida, garantimos a segurança e a
					tranquilidade dos nossos clientes através de tecnologias avançadas e um atendimento
					diferenciado.`,
				secondaryText: `
					Nosso objetivo é protejer o que é mais valioso para você. Operamos com rigorosos
					padrões de qualidade, sempre alinhados às necessidades específicas de cada cliente. 
					Com mais de uma década de experiência, somos referência em segurança, construindo 
					relações de confiança e proporcionando ambientes mais seguros para empresas e residências.`
			},
			location: { title: 'Localização', text: 'A Alphabeta está estrategicamente localizada na Rua Orense, 41 - Sala 1214, em Diadema, São Paulo. Esta localização facilita o acesso e a prestação de serviços para uma ampla variedade de clientes, desde condomínios residenciais e comerciais até instituições de ensino, indústrias, hospitais e empresas em geral.' },
			missionVision: [
				{ title: 'Missão', text: 'Nossa missão é fornecer serviços terceirizados especializados que atendam às necessidades de segurança, controle de acesso e instalações elétricas de nossos clientes, promovendo a transformação digital e novas relações comerciais e sociais. Comprometemo-nos a garantir a máxima eficiência, segurança e satisfação para todos os segmentos que atendemos, desde condomínios até grandes empresas.', icon:'mdi-target' },
				{ title: 'Visão', text: 'Ser reconhecida como a principal fornecedora de serviços terceirizados de alta qualidade no Brasil, destacando-se pela inovação, excelência operacional e parcerias duradouras. Buscamos continuamente aprimorar nossos processos e adotar tecnologias de ponta para manter nossa posição de liderança no mercado.', icon:'mdi-eye' },
			],
			values: [
				{
					title: 'Valores', text: [
						'Qualidade: Comprometimento com a excelência em todos os serviços prestados.',
						'Inovação: Busca constante por soluções tecnológicas avançadas para melhorar a segurança e eficiência.',
						'Parcerias: Construção de relacionamentos de longo prazo com clientes e parceiros.',
						'Competência: Equipe altamente treinada e capacitada para atender às diversas necessidades do mercado.',
						'Proatividade: Antecipação das necessidades dos clientes e adoção de práticas preventivas e eficientes.'
					]
				}
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
