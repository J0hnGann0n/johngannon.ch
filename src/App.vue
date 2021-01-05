<template>
  <div id="app">
    <Header v-on:show-banner="setBannerState" :showBanner="showBanner" :isDesktop="isDesktop" />
    <router-view class="main-content" :hide="!isDesktop && showBanner" :isDesktop="isDesktop"/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  data: function () {
    return {
      showBanner: true,
      isDesktop: (window.innerWidth >= 992)
    }
  },
  components: {
    Header
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.checkScreenWidth)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkScreenWidth)
  },
  methods: {
    setBannerState (showBanner) {
      this.showBanner = this.isDesktop || showBanner
    },
    checkScreenWidth () {
      this.isDesktop = (window.innerWidth >= 992)
      this.showBanner = this.isDesktop ? true : this.showBanner
    }
  }
}
</script>
