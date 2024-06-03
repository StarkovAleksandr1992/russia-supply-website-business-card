<script setup>
import {computed} from 'vue';

const taglines = computed(() => [
  {id: 1, value: 'Участвуем в гос. закупках,'},
  {id: 2, value: 'Поставляем оборудование,'},
  {id: 3, value: 'Снабжаем Россию.'}
]);

</script>

<template>
  <div class="taglines-container data-container" id="taglines">
      <div
          class="tagline data"
          v-for="tagline in taglines"
          key="tagline.id"
      >
        {{ tagline.value }}
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
  height: 100%;
  width: 100%;
  color: #333;
  visibility: visible;

  @media screen and (min-width: 1300px) {
    font-size: 64px;
  }
  // Large desktops and laptops
  @media screen and (min-width: 1200px) and (max-width: 1299px) {
    font-size: 64px;
  }

  // Small smartphones
  @media screen and (max-width: 575px) {
    font-size: 20px;
  }
}

</style>
