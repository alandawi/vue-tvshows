<template>
  <div>
	<div class="header">
		<md-toolbar class="md-fixed">
		  <md-button class="md-icon-button" @click="toggleLeftSidenav">
		    <md-icon>menu</md-icon>
		  </md-button>

		  <h2 class="md-title">Vue-TVmaze</h2>
		</md-toolbar>
	</div>

	<md-sidenav class="md-left" ref="leftSidenav">
		<md-toolbar class="md-small">
		  <div class="md-toolbar-container">
		    <h3 class="md-title">Sections</h3>
		  </div>
		</md-toolbar>

		<div class="phone-viewport">
		  <md-list>
		    <md-list-item>
		      <md-icon>home</md-icon>
		      <span @click="openPage('')">Shows</span>
		    </md-list-item>

		    <md-list-item>
		      <md-icon>home</md-icon>
		      <span @click="openPage('search')">Search</span>
		    </md-list-item>
		  </md-list>
		</div>
	</md-sidenav>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
    }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    openPage(page) {
      this.$refs.leftSidenav.toggle();
      setTimeout(()=>{ this.$router.push('/' + page); }, 400); // Hack for the vue-material tab height
    }
  }
}
</script>

<style scoped>
</style>
