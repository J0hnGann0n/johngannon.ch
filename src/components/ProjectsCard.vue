<template>
  <div class="projects-card">
    <h6>{{ title }}</h6>
    <p>{{ description }}</p>
    <b-row no-gutters class="card-button-group">
      <b-col v-for="(link, index) in links" :key="index"
        class="card-button text-center"
      >
        <button @click="cardButtonClick (link.url)">
          <component :is="link.icon | capitalize" />
        </button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Github from './svg/Github.svg'
import Play from './svg/Play.svg'

export default {
  name: 'ProjectsCard',
  props: {
    title: String,
    description: String,
    links: Array
  },
  components: {
    Github,
    Play
  },
  methods: {
    cardButtonClick (url) {
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
.projects-card {
  margin-bottom: 4vh;
  padding: 1vh 1vh 0 1vh;
  border: 1px solid $background-color-light;
}
svg {
  height: 3vh;
  width: 3vh;
}
</style>
