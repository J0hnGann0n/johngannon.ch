<template>
  <div class="title">
    <h1 class="text-center" :class="{ 'm-0': showTitle }">{{ name }}</h1>
    <h2 v-if="showTitle" class="text-right">{{ title }}</h2>
  </div>
</template>

<script>

export default {
  name: 'Title',
  props: {
    name: String,
    title: String,
    showTitle: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .title {
    width: max-content;
    margin: 0 auto;
  }
</style>
