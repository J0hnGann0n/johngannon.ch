
<template>
  <div class="header">
    <Title name="John Gannon" title="Web Developer" />
    <HeroBanner :showBanner="showBanner"/>
    <NavBar :sticky="showBanner"/>
  </div>
</template>

<script>
import Title from './Title'
import HeroBanner from './HeroBanner'
import NavBar from './NavBar'

export default {
  name: 'Header',
  data: function () {
    return {
      showBanner: true
    }
  },
  components: {
    Title,
    HeroBanner,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
</style>
