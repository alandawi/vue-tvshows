<template>
  <div class="wrapper-loader" v-if="displaySpinner">
	<md-spinner :md-size="60" md-indeterminate class="md-warn loader"></md-spinner>
  </div>
</template>

<script>
export default {
  name: 'loader',
  data () {
    return {
    	displaySpinner: true
    }
  }
}
</script>

<style scoped>
.wrapper-loader {
	background: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin: auto;
}
.loader {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin: auto;
}
</style>
