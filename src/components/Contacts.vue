<script setup>
import {computed} from 'vue';

const contacts = computed(() => [
  {id: 1, type: 'Почта', value: 'mail@russia.supply', link: 'mailto:mail@russia.supply'},
  {id: 2, type: 'Телефон', value: '8 (800) 22 22 450', link: 'tel:+78002222450'},
  {id: 3, type: 'Телеграм', value: 't.me/RussiaSupply', link: 'https://t.me/RussiaSupply'}
]);

</script>

<template>
  <div class="contacts-container data-container" id="contacts">
      <div
          class="contact data"
          v-for="(contact, index) in contacts"
          :key="contact.id"
          ref="elementRefs"
      >
        <a :href="contact.link" target="_blank" class="contact-link">
          {{ contact.type }}: {{ contact.value }}
        </a>
      </div>
  </div>
</template>

<style scoped lang="scss">

.contacts-container {
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

.contact-link {
  text-decoration: none;
  color: inherit;
}

.contact-link:hover {
  text-decoration: underline;
}
</style>
