<template>
  <div class="projects-card">
    <h6>{{ title }}</h6>
    <p>{{ description }}</p>
    <b-row no-gutters class="p-0 m-0">
      <b-col>
        <button>
          <User />
        </button>
      </b-col>
      <b-col>
        <button>
          <Tool />
        </button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import User from './svg/User.svg'
import Tool from './svg/Tool.svg'

export default {
  name: 'ProjectsCard',
  props: {
    title: String,
    description: String,
    demoLink: String,
    gitHubLink: String
  },
  components: {
    User,
    Tool
  }
}
</script>
<style lang="scss" scoped>
.projects-card {
  margin-bottom: 4vh;
  padding: 1vh;
  border: 1px solid $background-color-light;
}
</style>
