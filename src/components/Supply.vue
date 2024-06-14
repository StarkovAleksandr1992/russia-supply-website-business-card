<script setup>
</script>

<template>
  <div class="items-container" id="supply">
    <section>
      <h3 class="supply-header">{{ $t('supply.header') }}</h3>
      <ul class="item-data">
        <li v-for="item in $tm('supply.items')">{{ item }}</li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
.items-container {
  height: 100%;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center; /* Выравнивание элементов по началу оси X */
  font-family: 'Old Standard TT', serif;
  font-size: 1.5rem;
  color: #333;

  @media screen and (max-width: 600px) and (orientation: portrait) {
    font-size: 0.75rem;
    align-items: flex-start;
  }
  @media screen and (max-height: 600px) and (orientation: landscape) {
    font-size: 1rem;
  }
}

.items-container h3 {
  font-size: 1.875rem;
  @media screen and (max-width: 600px) and (orientation: portrait) {
    font-size: 1rem;
    padding-left: 1rem;
  }
  @media screen and (max-height: 600px) and (orientation: landscape) {
    font-size: 1rem;
    padding-left: 1rem;
  }
}

.item-data {
  list-style-type: disc;
}
</style>
