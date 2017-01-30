<template>
  <div id="app">
    <div class="wrapper">
      <layout-menu></layout-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from 'components/layout/Menu'

export default {
  components: {
    'layout-menu': Menu
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;            
  height: 100vh;
  overflow: hidden;
}
.header {
  flex: 0 0 auto;  
  background: #aaa;
}
.content {
  flex: 1 1 auto;     
  overflow-y: auto;
  padding: 5px 10px;    
}

.section-holidays button {
  padding-left: 0 !important;
}
</style>
