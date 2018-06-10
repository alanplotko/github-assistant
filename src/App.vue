<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="sass">
html
  font-family: 'Roboto', Helvetica, sans-serif
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

@import '../node_modules/bulma/bulma.sass'
@import 'mq'
</style>
