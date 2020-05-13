
<template>
  <div class="header">
    <Title name="John Gannon" title="Web Developer" :showTitle="showBanner" />
    <HeroBanner :showBanner="showBanner"/>
    <NavBar v-on:click.native="hideBanner" :sticky="showBanner"/>
  </div>
</template>

<script>
import Title from './Title'
import HeroBanner from './HeroBanner'
import NavBar from './NavBar'

export default {
  name: 'Header',
  props: {
    showBanner: Boolean
  },
  components: {
    Title,
    HeroBanner,
    NavBar
  },
  methods: {
    hideBanner () {
      this.$emit('hide-banner')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
