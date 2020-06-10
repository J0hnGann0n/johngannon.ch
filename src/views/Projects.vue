<template>
  <b-container class="projects" :class="{ hide: hide }">
    <b-row>
      <b-col>
        <h3>Projects</h3>
        <ProjectsCard v-for="(project, index) in projects" :key="index"
          :title="project.title"
          :description="project.description"
          :links="project.links"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ProjectsCard from '../components/ProjectsCard'

export default {
  name: 'Projects',
  data: function () {
    return {
      projects: [
        {
          title: 'Draw Apart',
          description: `A VueJS web app that emulates the paper based
                      game called "The Combination Man". In this digital
                      version the player draws a simple sketch of the
                      head, body, legs and feet of a human body. Players
                      can then select a combination of body parts and
                      vote on each others creations.`,
          links: [
            {
              url: 'http://draw-apart.surelookatusnow.ch/',
              icon: 'play'
            },
            {
              url: 'https://github.com/J0hnGann0n/draw-apart',
              icon: 'github'
            }
          ]
        },
        {
          title: 'Portfolio Page',
          description: `This website. The goal was to create a very simple
                        but eye catching page. It wasn't necessary to build
                        it as a Vue SPA but I wanted something that would
                        be easy to expand in the future. Eventually I will
                        add a Django backend just for fun.`,
          links: [
            {
              url: 'https://github.com/J0hnGann0n/johngannon.ch',
              icon: 'github'
            }
          ]
        }
      ]
    }
  },
  props: {
    hide: Boolean
  },
  components: {
    ProjectsCard
  }
}
</script>

<style lang="scss" scoped>
  .hide {
    position: fixed;
    bottom: -1400px;
  }

</style>
