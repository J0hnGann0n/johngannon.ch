<template>
  <div class="profile-card">
    <b-media vertical-align="top">
      <template v-slot:aside>
        <div>
          <img src="../assets/me.jpg" />
        </div>
        <div>
          <button>
          </button>
          <button>
          </button>
        </div>
      </template>

      <p class="secondary-text">Im just back from a long trip that took
          me through Europe, Russia, Japan, China,
          South-East Asia and Australia. Now I am
          back home in Switzerland in the middle
          of a pandemic without a job!</p>

      <!-- b-[Optional: add media children here for nesting] -->
    </b-media>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard'
}
</script>

<style lang="scss" scoped>
img {
  width: 25vw;
  height: auto;
}
</style>
