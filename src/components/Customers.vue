<script setup>
import {computed} from 'vue';

const customers = computed(() => [
  {id: 1, name: 'Рус-Гидро : Саяно-Шушенская, Воткинская, ... и другие.', link: 'https://rushydro.ru/company/'},
  {id: 2, name: 'Росатом : Кольская, Билибинская АЭС, "Гринатом" и другие.', link: 'https://rosatom.ru/index.html'},
  {id: 3, name: 'Россети', link: 'https://www.rosseti.ru/company/'},
  {id: 4, name: 'РЖД', link: 'https://company.rzd.ru/'},
  {id: 5, name: 'Газпромбанк.', link: 'https://www.gazprombank.ru/'},
  {id: 6, name: 'Росморпорт.', link: 'https://www.rosmorport.ru/'},
  {id: 7, name: 'Медицинские учреждения: ПНИ № 10 Санкт-Петербург.', link: 'http://pni10.ru/'}
]);
</script>

<template>
  <div class="customers-container data-container" id="customers">
    Заказчики:
    <div
        class="customer data"
        v-for="(customer, index) in customers"
        :key="customer.id"
        ref="elementRefs"
    >
      <a :href="customer.link" target="_blank" class="customer-link">
        {{ customer.id + '. ' + customer.name }}
      </a>
    </div>
  </div>
</template>


<style scoped lang="scss">
.customers-container {
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

.customer-link {
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.customer-link:hover {
  text-decoration: underline;
}
</style>
