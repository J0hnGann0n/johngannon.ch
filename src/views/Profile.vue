<template>
  <b-container fluid class="profile" :class="{ hide: hide }">
    <b-row>
      <!-- <b-col sm="12" lg="6">
        <Panel
          :description="profile.description"
          :links="profile.links"
          :image="profile.image"
          :noBorder="true"
        />
      </b-col> -->
      <b-col sm="12" lg="6" class="content-tile">
        <h3>Technologies</h3>
        <TechnologiesCard :technologies="skills" :isDesktop="isDesktop" />
      </b-col>
      <b-col sm="12" lg="6" class="content-tile">
        <h3>Experience</h3>
        <ExperienceCard />
      </b-col>
      <b-col sm="12" lg="6" class="content-tile">
        <h3>Education</h3>
        <EducationCard />
      </b-col>
      <b-col sm="12" lg="6" class="content-tile">
        <h3>Info</h3>
        <InfoCard />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TechnologiesCard from '../components/TechnologiesCard'
import ExperienceCard from '../components/ExperienceCard'
import EducationCard from '../components/EducationCard'
import InfoCard from '../components/InfoCard'

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
    hide: Boolean,
    isDesktop: Boolean
  },
  components: {
    TechnologiesCard,
    ExperienceCard,
    EducationCard,
    InfoCard
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
