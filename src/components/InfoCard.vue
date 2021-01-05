<template>
  <div class="info-card">
    <ul class="p-0">
      <li>
        <p class="info bold">
          <span>Born</span><span>05.04.1990, Galway, Ireland</span>
        </p>
      </li>
      <li>
        <p class="info bold">
          <span>Languages</span><span>Fluent English and basic German</span>
        </p>
      </li>
      <li>
        <p class="info bold">
          <span>Phone</span><span>+41 (0)78 7647462</span>
        </p>
      </li>
      <li>
        <p class="info bold">
          <span>Address</span><span>Tscharnerstrasse 5, 3007 Bern</span>
        </p>
      </li>
      <li>
        <p class="info bold">
          <span>E-Mail</span><span>johgannon@gmail.com</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'InfoCard'
}
</script>

<style lang="scss" scoped>
.info {
  :nth-child(1) {
    padding-right: 20px;
  }
  :nth-child(2) {
    color: $secondary-text-color;
  }
}
</style>
