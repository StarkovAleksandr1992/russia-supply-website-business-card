<script setup>
import {useI18n} from "vue-i18n";
import {computed} from "vue";

const {locale} = useI18n();

const mapSrc = computed(() => {
  if (locale.value === 'ru') {
    return 'https://yandex.ru/map-widget/v1/?ll=98.533782%2C55.533579&mode=usermaps&source=constructorLink&um=constructor%3Ad5d81529951ba2626cd9641941aa8c909819909dfecd9f0e467c4f22dddb5107&z=3.37';
  } else {
    return 'https://yandex.ru/map-widget/v1/?ll=82.752838%2C47.878729&mode=usermaps&source=constructorLink&um=constructor%3A648d40f39d0008bd47d63e9441ae6dd9d0fb2f2b86c449826269372b79bda6a4&z=3';
  }
});
</script>

<template>
  <div class="map-container">
    <iframe
        :src="mapSrc"
        frameborder="0"
        allowfullscreen="true"
        class="map-iframe">
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
  height: 75%;

  @media screen and (max-width: 600px) and (orientation: portrait) {
    width: 80%;
    height: 75%;
  }
  @media screen and (max-height: 600px) and (orientation: landscape) {
    width: 80%;
    height: 65%;
  }
}
</style>
