<template>
	<div class="content section-show">
		<md-layout md-align="start" md-gutter="16" v-if="detail">
			<md-layout md-flex="50">
				<span><img v-if="detail" v-bind:src="detail.image.original" /></span>
			</md-layout>

			<md-layout md-flex="50">
				<div>
					<div class="detail-summary" v-html="detail.summary">
					</div>

					<div class="detail-detail">
						<ul>
							<li>Status: {{detail.status}}</li>
							<li>Runtime: {{detail.runtime}}</li>
							<li>Premiered: {{detail.premiered}}</li>
							<li>Language: {{detail.language}}</li>
							<li>Type: {{detail.type}}</li>
							<li>Genres: <span v-for="genre in detail.genres"> - {{genre}}</span></li>
						</ul>
					</div>
				</div>
			</md-layout>
		</md-layout>

		<md-divider class="md-inset class-divider"></md-divider>
		<span class="md-display-1">Cast:</span>

		<md-layout v-if="cast">
		  <md-layout md-flex="100">
		  	<md-table v-once>
			  <md-table-header>
			    <md-table-row>
			      <md-table-head>Photo</md-table-head>
			      <md-table-head>Person</md-table-head>
			      <md-table-head>Character</md-table-head>
			    </md-table-row>
			  </md-table-header>

			  <md-table-body>
			    <md-table-row v-for="item in cast">
			      <md-table-cell><img v-bind:src="item.person.image.medium"></md-table-cell>
			      <md-table-cell v-text="item.person.name"></md-table-cell>
			      <md-table-cell v-text="item.character.name">Dessert Name</md-table-cell>
			    </md-table-row>
			  </md-table-body>
			</md-table>
		  </md-layout>
		</md-layout>
	</div>
</template>

<script>
import API from '../api/endpoints'

export default {
	name: 'show',
	data () {
		return {
			id: this.$route.params.id,
			detail: null,
			cast: null
		}
	},
	created: function () {
		this.fetchData()
	},
	methods: {
		fetchData: function () {
			this.axios.get(API.show + this.id).then((response) => {
				this.detail = response.data;
				console.log(this.detail);
			});

			this.axios.get(API.show + this.id + '/cast').then((response) => {
				this.cast = response.data;
				console.log(this.cast);
			})
		}
	}
}
</script>

<style scoped>
.md-table {
	width: 100%;
}
</style>