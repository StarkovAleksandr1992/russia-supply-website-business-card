<script setup>
</script>

<template>
  <div class="customers-container data-container" id="customers">
    <section>
      <h3 class="customers-header">{{$t('customers.header')}}</h3>
      <ul class="customer data">
        <li v-for="customer in $tm('customers.list')">
          <a :href="customer.link" target="_blank" class="customer-link">
            {{ customer.name }}
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
.customers-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Выравнивание элементов по началу оси X */
  font-family: 'Old Standard TT', serif;
  font-size: 2rem;
  color: #333;

  @media screen and (max-width: 600px) and (orientation: portrait) {
    font-size: 0.75rem;
  }
  @media screen and (max-height: 600px) and (orientation: landscape) {
    font-size: 1rem;
  }
}

.customers-container h3 {
  font-size: 2.5rem;
  @media screen and (max-width: 600px) and (orientation: portrait) {
    font-size: 1rem;
    padding-left: 1rem;
  }
  @media screen and (max-height: 600px) and (orientation: landscape) {
    font-size: 1rem;
    padding-left: 1rem;
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
