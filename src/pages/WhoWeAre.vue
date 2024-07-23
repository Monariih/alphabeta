<template>
	<div>
		<v-sheet class="mt-12">
			<v-row no-gutters align="center" class="mx-auto w-lg-50 w-md-75 w-sm-75">
				<v-col justify="end">
					<div
						v-if="cols == 6"
						class="ml-16"
					>
						<v-img 
							src="https://scontent.fgru6-1.fna.fbcdn.net/v/t1.6435-9/93136940_105502114464058_2667872051770949632_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=3iCZvxSq6tkQ7kNvgEQmPUd&_nc_ht=scontent.fgru6-1.fna&oh=00_AYCEBeuUtpXr80uCbfG8vE4w34nJ7kgxl5SK4m2FYnHBfw&oe=66C5D617"
							height="300"
						></v-img>
					</div>
					<div
						v-if="cols == 12"
					>
						<v-img 
							src="https://scontent.fgru6-1.fna.fbcdn.net/v/t1.6435-9/93136940_105502114464058_2667872051770949632_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=3iCZvxSq6tkQ7kNvgEQmPUd&_nc_ht=scontent.fgru6-1.fna&oh=00_AYCEBeuUtpXr80uCbfG8vE4w34nJ7kgxl5SK4m2FYnHBfw&oe=66C5D617"
							height="400"
						></v-img>
					</div>
				</v-col>
				<v-col
					v-if="cols == 6"
				>
					<div>
						<p class="text-h4">
							{{ whoWeAre.title }}
						</p>
						<p class="text-body-1 text-justify">
							{{ whoWeAre.text }}
						</p>
					</div>
				</v-col>
				<div
					v-if="cols == 12"
					class="text-justify pa-4"
				>
					<p class="text-h4">
						{{ whoWeAre.title }}
					</p>
					<p class="text-body-1 text-justify">
						{{ whoWeAre.text }}
					</p>
				</div>
			</v-row>
		</v-sheet>
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
