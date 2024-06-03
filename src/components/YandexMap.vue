<script setup>
</script>

<template>
  <div class="map-container" id="yandexMap">
    <iframe
        src="https://yandex.ru/map-widget/v1/?ll=98.533782%2C55.533579&mode=usermaps&source=constructorLink&um=constructor%3Ad5d81529951ba2626cd9641941aa8c909819909dfecd9f0e467c4f22dddb5107&z=3.37"
        frameborder="0" allowfullscreen="true" class="map-iframe"></iframe>
  </div>
</template>

<style scoped lang="scss">
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 85vh;
  background-color: #ffffff;
  overflow: hidden;
}

.map-iframe {
  width: 75%;
  height: 80%;
  border: none;
  overflow: hidden;
}
</style>
