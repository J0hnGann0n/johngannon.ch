<template>
  <div class="experience-card">
    <ul class="p-0">
      <li>
        <p class="experience bold">
          <span>17 - 19</span><span>Head of Development / </span><span>Gonnado AG</span>
        </p>
      </li>
      <li>
        <p class="experience bold">
          <span>16 - 17</span><span>Full Stack Web Developer / </span><span>Gonnado AG</span>
        </p>
      </li>
      <li>
        <p class="experience bold">
          <span>05 - 16</span><span>Computer Repair Technician / </span><span>Tellnet</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ExperienceCard'
}
</script>

<style lang="scss" scoped>
.experience {
  :nth-child(1) {
    padding-right: 20px;
  }
  :nth-child(3) {
    color: $secondary-text-color;
  }
}
</style>
