<template>
  <div class="content" v-html="content">
    <!-- PAGE CONTENT -->
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
    }
  }
}
</script>

<style scoped>
</style>