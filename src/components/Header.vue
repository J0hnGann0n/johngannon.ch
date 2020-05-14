
<template>
  <div class="header">
    <Title name="John Gannon" title="Web Developer" :showTitle="showBanner" />
    <HeroBanner class="slider" :class="{ closed: !showBanner }"/>
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
  .slider {
    overflow-y: hidden;
    max-height: 500px; /* approximate max height */

    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }
  .slider.closed {
    max-height: 0;
  }
</style>
