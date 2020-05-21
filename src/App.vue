<template>
  <div id="app">
    <Header v-on:show-banner="setBannerState" :showBanner="showBanner" />
    <router-view class="main-content" :hide="showBanner"/>
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
    setBannerState (showBanner) {
      this.showBanner = showBanner
    }
  }
}
</script>
