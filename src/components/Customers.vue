<script setup>
import {computed} from 'vue';

const customers = computed(() => [
  {id: 1, name: 'РОСАТОМ: КОЛЬСКАЯ, БИЛИБИНСКАЯ, ГРИНАТОМ И ДРУГИЕ АЭС', link: 'https://rosatom.ru/index.html'},
  {id: 2, name: 'РУСГИДРО: САЯНО-ШУШЕНСКАЯ, ВОТКИНСКАЯ И ДРУГИЕ ГЭС', link: 'https://rushydro.ru/company/'},
  {id: 3, name: 'МЕДИЦИНСКИЕ УЧРЕЖДЕНИЯ: ПНИ №10 САНКТ-ПЕТЕРБУРГ', link: 'http://pni10.ru/'},
  {id: 4, name: 'ГАЗПРОМБАНК', link: 'https://www.gazprombank.ru/'},
  {id: 5, name: 'РОСМОРПОРТ', link: 'https://www.rosmorport.ru/'},
  {id: 6, name: 'РОССЕТИ', link: 'https://www.rosseti.ru/company/'},
  {id: 7, name: 'РЖД', link: 'https://company.rzd.ru/'}
]);
</script>

<template>
  <div class="customers-container data-container" id="customers">
    <transition-group name="fade" tag="div">
      <div
          class="customer data"
          v-for="(customer, index) in customers"
          :key="customer.id"
          ref="elementRefs"
      >
        <a :href="customer.link" target="_blank" class="customer-link">
          {{ customer.name }}
        </a>
      </div>
    </transition-group>
  </div>
</template>


<style scoped lang="scss">
.customers-container {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 10%;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: #333;
  background-color: #f8f9fa;
}

.customer {
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

.customer-link {
  text-decoration: none;
  color: inherit;
}

.customer-link:hover {
  text-decoration: underline;
}
</style>
