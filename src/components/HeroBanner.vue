<template>
  <div class="hero-banner" v-show="showBanner">
    <p class="secondary-text">I wanted this to be an</p>
    <p class="secondary-text"><span class="standout-text">Amazing Banner</span>.</p>
    <p class="secondary-text">But hey,</p>
    <p class="secondary-text">Im a <span class="standout-text">Full Stack Dev</span>,</p>
    <p class="secondary-text">not a <span class="standout-text">CSS Wizard</span>.</p>
  </div>
</template>

<script>

export default {
  name: 'HeroBanner',
  props: {
    showBanner: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .hero-banner {
    width: max-content;
    margin: 0 auto;
    font-size: $base-font-size / 2.5;
  }
  .standout-text {
    color: $highlite-color;
    font-size: $base-font-size / 4.5;
  }
</style>
