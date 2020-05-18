<template>
  <b-col>
    <div class="profile-card">
      <b-media>
        <template v-slot:aside>
          <img v-lazy="'../assets/me.jpg'" />
        </template>

        <h2>Media Body</h2>
        <p>Some text</p>

        <!-- b-[Optional: add media children here for nesting] -->
      </b-media>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'ProfileCard'
}
</script>

<style lang="scss" scoped>
</style>
