<script setup>
import {computed} from 'vue';

const contacts = computed(() => [
  {id: 1, type: 'Почта', value: 'mail@russia.supply', link: 'mailto:mail@russia.supply'},
  {id: 2, type: 'Телефон', value: '8 (800) 22 22 450', link: 'tel:+78002222450'},
  {id: 3, type: 'Telegram', value: 't.me/RussiaSupply', link: 'https://t.me/RussiaSupply'}
]);

</script>

<template>
  <div class="contacts-container data-container" id="contacts">
    <transition-group name="fade" tag="div">
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
    </transition-group>
  </div>
</template>

<style scoped lang="scss">

.contacts-container {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 10%;
  justify-content: center;
  align-items: center;
  color: #333;
  background-color: #f8f9fa;
  overflow: hidden;
}

.contact {
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
.contact-link {
  text-decoration: none;
  color: inherit;
}

.contact-link:hover {
  text-decoration: underline;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
