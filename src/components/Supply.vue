<script setup>

import {computed} from "vue";

const items = computed(() => [
  {id: 1, value: 'Картриджи для оргтехники оригинальные и совместимые'},
  {id: 2, value: 'Запчасти для оргтехники оригинальные и совместимые'},
  {id: 3, value: 'Компьютеры, комплектующие, периферию'},
  {id: 4, value: 'Сетевое оборудование'},
  {id: 5, value: 'Телефония'},
  {id: 6, value: 'Пром. автоматика.'},
]);

</script>

<template>
  <div class="items-container data-container" id="supply">
    Поставляем:
      <div
          class="item data"
          v-for="item in items"
          :key="item.id"
          ref="itemRefs"
      >{{ item.id + '. ' + item.value }}
      </div>
  </div>
</template>

<style scoped lang="scss">
.items-container {
  display: block;
  justify-content: center;
  align-items: center;
  font-family: 'Old Standard TT', serif;
  font-size: 32px;
  text-align: left;
  color: #333;

  @media screen and (min-width: 1300px) {
    font-size: 32px;
  }
  // Large desktops and laptops
  @media screen and (min-width: 1200px) and (max-width: 1299px) {
    font-size: 32px;
  }

  // Small smartphones
  @media screen and (max-width: 575px) {
    font-size: 10px;
  }
}
</style>