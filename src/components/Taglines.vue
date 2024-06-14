<script setup>
</script>

<template>
  <div class="taglines-container data-container" id="taglines">
    <div
        class="tagline data"
        v-for="(value, key) in $tm('taglines')"
        :key="key"
    >
      {{ value }}
    </div>
  </div>
</template>

<style scoped lang="scss">

.taglines-container {
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Old Standard TT', serif;
  font-weight: 400;
  font-size: 3rem;
  height: 100%;
  width: 80vw;
  color: #333;
  visibility: visible;

  @media screen and (max-width: 600px) and (orientation: portrait) {
    font-size: 1.3rem;
  }
  @media screen and (max-height: 600px) and (orientation: landscape) {
    font-size: 2rem;
  }
}

</style>
