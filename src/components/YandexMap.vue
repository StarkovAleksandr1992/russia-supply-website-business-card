<script setup>
</script>

<template>
  <div class="map-container">
    <iframe
        src="https://yandex.ru/map-widget/v1/?ll=98.533782%2C55.533579&mode=usermaps&source=constructorLink&um=constructor%3Ad5d81529951ba2626cd9641941aa8c909819909dfecd9f0e467c4f22dddb5107&z=3.37"
        frameborder="0" allowfullscreen="true" class="map-iframe">
    </iframe>
  </div>
</template>

<style scoped lang="scss">
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
}

.map-iframe {
  border: none;
  width: 80%;
  height: 80%;

  @media screen and (min-width: 1300px) {
    width: 80%;
    height: 80%;
  }

  // Large desktops and laptops
  @media screen and (min-width: 1200px) and (max-width: 1299px) {
    width: 80%;
    height: 80%;
  }

  // Small smartphones
  @media screen and (max-width: 575px) {
    width: 80%;
    height: 80%;
  }
}
</style>
