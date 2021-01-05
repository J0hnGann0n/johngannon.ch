
<template>
  <div v-if="isDesktop" class="header">
    <b-navbar>
        <b-collapse id="nav-collapse" is-nav>
          <NavBar
            v-on:click.native="setBanner(false)"
            :showTitle="true" />
        </b-collapse>
        <b-navbar-brand href="#">
          <Title
            v-on:click.native="setBanner(true)"
            name="John Gannon"
            title="Web Developer"
            :showTitle="showBanner" />
        </b-navbar-brand>
      </b-navbar>
  </div>
  <div v-else class="header">
    <Title
      v-on:click.native="setBanner(true)"
      name="John Gannon"
      title="Web Developer"
      :showTitle="showBanner" />
    <HeroBanner
      class="slider"
      :class="{ closed: !showBanner }"
      />
    <NavBar
      v-on:click.native="setBanner(false)"
      :sticky="showBanner"/>
  </div>
</template>

<script>
import Title from './Title'
import HeroBanner from './HeroBanner'
import NavBar from './NavBar'

export default {
  name: 'Header',
  props: {
    showBanner: Boolean,
    isDesktop: Boolean
  },
  components: {
    Title,
    HeroBanner,
    NavBar
  },
  methods: {
    setBanner (show) {
      this.$emit('show-banner', show)
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
  .navbar {
    padding: 0;
  }
</style>
