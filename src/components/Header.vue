
<template>
  <div class="header">
    <Title name="John Gannon" title="Web Developer" />
    <HeroBanner />
    <NavBar />
  </div>
</template>

<script>
import Title from './Title'
import HeroBanner from './HeroBanner'
import NavBar from './NavBar'

export default {
  name: 'Header',
  components: {
    Title,
    HeroBanner,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
</style>
