<script setup>
import {computed} from 'vue';

const taglines = computed(() => [
  {id: 1, value: 'УЧАСТВУЕМ В ГОС. ЗАКУПКАХ'},
  {id: 2, value: 'ПОСТАВЛЯЕМ ОБОРУДОВАНИЕ'},
  {id: 3, value: 'СНАБЖАЕМ РОССИЮ'}
]);

</script>

<template>
  <div class="taglines-container data-container" id="taglines">
    <transition-group name="fade" tag="div">
      <div
          class="tagline data"
          v-for="(tagline, index) in taglines"
          key="tagline.id"
          ref="elementRefs"
      >
        {{ tagline.value }}
      </div>
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
.taglines-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  color: #333;
  background-color: #f8f9fa;
}

.tagline {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  margin: 5% 0;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: scale(1.05);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
