<template>
  <div class="panel" :class="{ 'no-border': noBorder }">
    <h6 v-if="title" >{{ title }}</h6>
    <b-row>
      <b-col v-if="image" cols="3">
        <img :src="image">
      </b-col>
      <b-col :cols="image ? 9 : 12">
          <p>{{ description }}</p>
      </b-col>
    </b-row>
    <b-row no-gutters class="panel-button-group">
      <b-col v-for="(link, index) in links" :key="index"
        class="panel-button text-center"
      >
        <button @click="panelButtonClick (link.url)">
          <component :is="link.icon | capitalize" />
        </button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Github from './svg/Github.svg'
import Play from './svg/Play.svg'
import Linkedin from './svg/Linkedin.svg'
import Globe from './svg/Globe.svg'

export default {
  name: 'Panel',
  props: {
    title: String,
    description: String,
    links: Array,
    image: String,
    noBorder: Boolean
  },
  components: {
    Github,
    Play,
    Linkedin,
    Globe
  },
  methods: {
    panelButtonClick (url) {
      window.open(url)
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
<style lang="scss" scoped>
.panel {
  margin-bottom: 4vh;
  padding: 1vh 1vh 0 1vh;
  border: 1px solid $background-color-light;
  &.no-border {
    border: 0;
  }
}
svg {
  height: 3vh;
  width: 3vh;
}
img {
  width: 18vw;
  border-radius: 50%;
  @media screen and (min-width: 992px) {
    width: 9vw;
  }
}
</style>
