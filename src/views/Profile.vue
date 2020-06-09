<template>
  <b-container fluid class="profile" :class="{ hide: hide }">
    <b-row>
      <ProfileCard />
    </b-row>
    <b-row>
      <TechnologiesCard :technologies="skills" />
    </b-row>
  </b-container>
</template>

<script>
import ProfileCard from '../components/ProfileCard'
import TechnologiesCard from '../components/TechnologiesCard'

export default {
  name: 'Profile',
  data: function () {
    return {
      skills: [
        'Bash', 'Css', 'Django',
        'Gitlab', 'Html', 'Jquery',
        'Js', 'Nginx', 'Python', 'Vue'
      ]
    }
  },
  props: {
    hide: Boolean
  },
  components: {
    ProfileCard,
    TechnologiesCard
  }
}
</script>

<style lang="scss" scoped>
  .hide {
    position: fixed;
    bottom: -700px;
  }
</style>
