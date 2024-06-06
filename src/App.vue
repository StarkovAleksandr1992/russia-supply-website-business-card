<script setup>
import {reactive} from 'vue';
import Taglines from "@/components/Taglines.vue";
import Supply from "@/components/Supply.vue";
import Contacts from "@/components/Contacts.vue";
import YandexMap from "@/components/YandexMap.vue";
import Customers from "@/components/Customers.vue";
import Header from "@/components/Header.vue";
import LanguageDetector from "i18next-browser-languagedetector";

const options = reactive({
  licenseKey: 'gplv3-license',
  scrollOverflow: true,
  scrollBar: false,
  menu: '#menu',
  navigation: true,
  anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
  sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
});

</script>

<template>
  <div class="container">
    <Header/>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <Taglines/>
      </div>
      <div class="section">
        <YandexMap/>
      </div>
      <div class="section">
        <Customers/>
      </div>
      <div class="section">
        <Supply/>
      </div>
      <div class="section">
        <Contacts/>
      </div>
    </full-page>
  </div>
</template>

<style lang="scss">

@font-face {
  font-family: 'Old Standard TT';
  src: local('Old Standard TT Regular'),
  local('OldStandardTT-Regular'),
  url('../src/assets/fonts/oldstandardttregular.ttf') format('woff2'),
  url('../src/assets/fonts/oldstandardttregular.woff') format('woff'),
  url('../src/assets/fonts/oldstandardttregular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Old Standard TT';
  src: local('Old Standard TT Italic'),
  local('OldStandardTT-Italic'),
  url('../src/assets/fonts/oldstandardttitalic.woff2') format('woff2'),
  url('../src/assets/fonts/oldstandardttitalic.woff') format('woff'),
  url('../src/assets/fonts/oldstandardttitalic.ttf') format('truetype');
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: 'Old Standard TT';
  src: local('Old Standard TT Bold'),
  local('OldStandardTT-Bold'),
  url('../src/assets/fonts/oldstandardttbold.woff2') format('woff2'),
  url('../src/assets/fonts/oldstandardttbold.woff') format('woff'),
  url('../src/assets/fonts/oldstandardttbold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

* {
  font-family: 'Old Standard TT', serif;
}


.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


</style>
