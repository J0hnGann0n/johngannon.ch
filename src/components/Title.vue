<template>
  <div class="title">
    <h1 class="text-center">{{ name }}</h1>
    <h2 class="text-right">{{ title }}</h2>
  </div>
</template>

<script>

export default {
  name: 'Title',
  props: {
    name: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
  .title {
    width: max-content;
    margin: 0 auto;
    h1 {
      margin-bottom: 0;
    }
  }
</style>
