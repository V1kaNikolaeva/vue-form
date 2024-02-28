<template>
  <div id="app">
    <UiContanier>
      <ClientFrom></ClientFrom>
    </UiContanier>
  </div>
</template>

<script>
import ClientFrom from './components/ClientFrom.vue';
import UiContanier from './components/UiContanier.vue'

export default {
  name: 'App',

  components: { ClientFrom, UiContanier },

  provide: {
    
  }
}
</script>

<style>

</style>
