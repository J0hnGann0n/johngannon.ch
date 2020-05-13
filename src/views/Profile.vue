<template>
  <div class="profile" :class="{ hide: hide }">
    <p>Profile Page</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Profile',
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
