<template>
  <div class="content section-shows">

    <div class="phone-viewport">
	  <md-list class="md-double-line" v-if="shows">
	  	<md-list-item v-for="show in shows">
  			<img v-bind:src="show.image.medium">
			<div class="md-list-text-container">
				<span>{{show.name}}</span>
				<span v-html="show.summary"></span>
			</div>
			<md-divider class="md-inset"></md-divider>
	    </md-list-item>
	  </md-list>
	</div>

  </div>
</template>

<script>
import API from '../api/endpoints'

export default {
  name: 'shows',
  data () {
    return {
      shows: null
    }
  },
  created: function () {
		this.fetchData()
	},
	methods: {
		fetchData: function () {
			this.axios.get(API.shows).then((response) => {
				this.shows = response.data;
			});
		}
	}
}
</script>

<style scoped>
.md-list-item-holder img {
	margin-right: 20px;
	width: 20% !important;
}
.md-list-item {
	margin-bottom: 20px;
}
</style>