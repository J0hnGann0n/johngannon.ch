<template>
  <b-container class="profile" :class="{ hide: hide }">
    <b-row>
      <b-col>
        <Panel
          :description="profile.description"
          :links="profile.links"
          :image="profile.image"
          :noBorder="true"
        />
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
import Panel from '../components/Panel'
import TechnologiesCard from '../components/TechnologiesCard'
import ExperienceCard from '../components/ExperienceCard'
import EducationCard from '../components/EducationCard'

export default {
  name: 'Profile',
  data: function () {
    return {
      profile: {
        description: `Im just back from a long trip that took
          me through Europe, Russia, Japan, China,
          South-East Asia and Australia. Now I am
          back home in Switzerland in the middle
          of a pandemic without a job!`,
        links: [
          {
            url: 'https://www.linkedin.com/in/john-gannon-452556113/',
            icon: 'linkedin'
          },
          {
            url: 'https://github.com/J0hnGann0n/',
            icon: 'github'
          },
          {
            url: 'https://surelookatusnow.ch/en/',
            icon: 'globe'
          }
        ],
        image: require('../assets/me.jpg')
      },
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
    Panel,
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
