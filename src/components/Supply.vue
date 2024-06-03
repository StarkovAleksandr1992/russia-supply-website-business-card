<script setup>

import {computed} from "vue";

const items = computed(() => [
  {id: 1, value: 'КАРТРИДЖИ ДЛЯ ОРГТЕХНИКИ ОРИГИНАЛЬНЫЕ И СОВМЕСТИМЫЕ'},
  {id: 2, value: 'ЗАПЧАСТИ ДЛЯ ОРГТЕХНИКИ ОРИГИНАЛЬНЫЕ И СОВМЕСТИМЫЕ'},
  {id: 3, value: 'КОМПЬЮТЕРЫ, КОМПЛЕКТУЮЩИЕ, ПЕРИФЕРИЮ'},
  {id: 4, value: 'ПРОМЫШЛЕННАЯ АВТОМАТИКА'},
  {id: 5, value: 'СЕТЕВОЕ ОБОРУДОВАНИЕ'},
  {id: 6, value: 'ТЕЛЕФОНИЯ'},
]);

</script>

<template>
  <div class="items-container data-container" id="supply">
    <transition-group name="fade" tag="div">
      <div
          class="item data"
          v-for="item in items"
          :key="item.id"
          ref="itemRefs"
      >{{ item.value }}
      </div>
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
.items-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10%;
  color: #333;
  background-color: #f8f9fa;
  overflow: hidden;
}

.item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  margin: 2% 0;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>