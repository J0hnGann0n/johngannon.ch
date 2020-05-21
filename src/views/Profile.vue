<template>
  <b-container fluid class="profile" :class="{ hide: hide }">
    <b-row>
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
    bottom: -200px;
  }
</style>
