<template>
  <b-container fluid class="profile" :class="{ hide: hide }">
    <b-row>
      <b-col>
        <ProfileCard />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>Technologies</h3>
        <TechnologiesCard :technologies="skills" />
      </b-col>
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
