<template>
  <div  class="Projects" :class="{ hide: hide }">
    <p>Projects Page</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Projects',
  props: {
    hide: Boolean
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  .hide {
    position: fixed;
    bottom: -50px;
  }
</style>
