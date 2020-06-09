<template>
  <div class="technologies-card">
    <b-row v-for="(group, index) in technologyGroups" :key="index">
      <b-col class="skill" v-for="(skill, index) in group" :key="index">
        <component :is="skill"></component>
        <span> {{skill}} </span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Python from './svg/Python.svg'
import Bash from './svg/Bash.svg'
import Css from './svg/Css.svg'
import Django from './svg/Django.svg'
import Gitlab from './svg/Gitlab.svg'
import Html from './svg/Html.svg'
import Jquery from './svg/Jquery.svg'
import Js from './svg/Js.svg'
import Nginx from './svg/Nginx.svg'
import Vue from './svg/Vue.svg'

export default {
  name: 'TechnologiesCard',
  props: {
    technologies: Array
  },
  components: {
    Python,
    Bash,
    Css,
    Django,
    Gitlab,
    Html,
    Jquery,
    Js,
    Nginx,
    Vue
  },
  computed: {
    technologyGroups () {
      const groups = []
      this.technologies.forEach((technology, i) => {
        const maxRowLength = 3
        if (i === 0) return groups.push([technology])

        if (groups[groups.length - 1].length === maxRowLength - ((groups.length + 1) % 2)) {
          groups.push([technology])
        } else {
          groups[groups.length - 1].push(technology)
        }
      })
      return groups
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  width: 7vh;
  height: 7vh;
  fill: $primary-text-color;
}
.technologies-card .col {
  display: flex;
  justify-content: left;
  padding: 0px;
}
.technologies-card .row:nth-child(even) .col:nth-child(odd) {
  padding-left: 15vw;
}
.technologies-card .row:nth-child(even) .col:nth-child(even) {
  padding-right: 15vw;
}
.skill {
  flex-direction: column;
  align-items: center;
  span {
    color: white;
    font-size: 1rem;
  }
}
</style>
