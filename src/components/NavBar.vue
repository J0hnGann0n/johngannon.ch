<template>
  <b-container class="nav-bar m-0 p-0" :class="{ banner: sticky }">
    <b-row no-gutters class="nav-bar p-0 h-100">
      <b-col>
        <router-link tag="span" to="/">
          <button>
            <User />
          </button>
        </router-link>
      </b-col>
      <b-col>
        <router-link tag="span" to="/projects">
          <button>
            <Tool />
          </button>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import User from './svg/User.svg'
import Tool from './svg/Tool.svg'
export default {
  name: 'NavBar',
  props: {
    sticky: Boolean
  },
  components: {
    User,
    Tool
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 13vw;
  max-height: 90px;
  button {
    width: 100%;
    height: 100%;
  }
  button:nth-child(1) {
    border-right: 2px solid $background-color-light;
  }
  &.banner {
    position: fixed;
    bottom: 0;
  }
}
</style>
