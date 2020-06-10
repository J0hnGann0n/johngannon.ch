<template>
  <b-container class="profile" :class="{ hide: hide }">
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
    <b-row>
      <b-col>
        <h3>Experience</h3>
        <ExperienceCard />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>Education</h3>
        <EducationCard />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ProfileCard from '../components/ProfileCard'
import TechnologiesCard from '../components/TechnologiesCard'
import ExperienceCard from '../components/ExperienceCard'
import EducationCard from '../components/EducationCard'

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
    TechnologiesCard,
    ExperienceCard,
    EducationCard
  }
}
</script>

<style lang="scss" scoped>
  .hide {
    position: fixed;
    bottom: -1400px;
  }
  .profile .row .col {
    padding-bottom: 3vh;
  }
</style>
