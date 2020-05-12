<template>
  <b-container fluid class="nav-bar p-0" :class="{ banner: sticky }">
    <b-row no-gutters class="h-100">
      <b-col>
        <router-link  tag="span" to="/">
          <button>
            <UserIcon />
          </button>
        </router-link>
      </b-col>
      <b-col>
        <router-link tag="span" to="/projects">
          <button>
            <ToolIcon />
          </button>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserIcon from './svg/UserIcon.svg'
import ToolIcon from './svg/ToolIcon.svg'
export default {
  name: 'NavBar',
  props: {
    sticky: Boolean
  },
  components: {
    UserIcon,
    ToolIcon
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
  &.banner {
    position: fixed;
    bottom: 0;
  }
}
</style>
