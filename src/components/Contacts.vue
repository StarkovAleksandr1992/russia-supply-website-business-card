<script setup>
</script>

<template>
  <div class="contacts-container data-container" id="contacts">
    <div class="contact data" v-for="contact in $tm('contacts')">
      <a :href="contact.link" target="_blank" class="contact-link">
        {{ contact.type }} {{ contact.value }}
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
  font-size: 4rem;
  font-weight: 400;
  height: 100%;
  width: 100%;
  color: #333;
  visibility: visible;

  @media screen and (max-width: 600px) and (orientation: portrait) {
    font-size: 1.3rem;
  }
  @media screen and (max-height: 600px) and (orientation: landscape) {
    font-size: 2rem;
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
