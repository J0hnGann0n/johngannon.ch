<template>
  <div id="app">
    <Header v-on:hide-banner="hideBanner()" :showBanner="showBanner" />
    <router-view :hide="showBanner"/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  data: function () {
    return {
      showBanner: true
    }
  },
  components: {
    Header
  },
  methods: {
    hideBanner () {
      console.log('hello')
      this.showBanner = false
    }
  }
}
</script>
