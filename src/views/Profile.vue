<template>
  <b-container fluid class="profile nav-bar p-0" :class="{ hide: hide }">
    <b-row no-gutters class="nav-bar p-0 h-100">
      <ProfileCard />
    </b-row>
  </b-container>
</template>

<script>
import ProfileCard from '../components/ProfileCard'

export default {
  name: 'Profile',
  props: {
    hide: Boolean
  },
  components: {
    ProfileCard
  }
}
</script>

<style lang="scss" scoped>
  .hide {
    position: fixed;
    bottom: -50px;
  }
</style>
