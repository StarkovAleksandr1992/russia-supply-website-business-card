<script setup>
import {reactive} from 'vue';
import Taglines from "@/components/Taglines.vue";
import Supply from "@/components/Supply.vue";
import Contacts from "@/components/Contacts.vue";
import YandexMap from "@/components/YandexMap.vue";
import Customers from "@/components/Customers.vue";

const options = reactive({
  licenseKey: 'gplv3-license',
  scrollOverflow: true,
  scrollBar: false,
  menu: '#menu',
  navigation: true,
  anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
  sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
  afterLoad: (origin, destination, direction) => {
    toggleMenuButtons(destination);
  }
});

function toggleMenuButtons(destination) {
  const activeLink = document.querySelector('#menu .active');
  if (activeLink) {
    activeLink.classList.remove('active');
  }
  const newActiveLink = document.querySelector(`#menu [data-menuanchor="${destination.anchor}"]`);
  if (newActiveLink) {
    newActiveLink.classList.add('active');
  }
}

const isMenuOpen = reactive({open: false});

function toggleMenu() {
  isMenuOpen.open = !isMenuOpen.open;
}
</script>

<template>
    <div class="logo" id="logo">Снабжение России</div>
    <button class="menu-button" @click="toggleMenu">
      <span v-if="!isMenuOpen.open">☰</span>
      <span v-else>×</span>
    </button>
    <ul :class="{ open: isMenuOpen.open }" id="menu">
      <li data-menuanchor="page1" class="active"><a href="#page1" @click="toggleMenu">Главная</a></li>
      <li data-menuanchor="page2"><a href="#page2" @click="toggleMenu">Карта поставок</a></li>
      <li data-menuanchor="page3"><a href="#page3" @click="toggleMenu">Заказчики</a></li>
      <li data-menuanchor="page4"><a href="#page4" @click="toggleMenu">Поставляем</a></li>
      <li data-menuanchor="page5"><a href="#page5" @click="toggleMenu">Контакты</a></li>
    </ul>

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
</template>

<style lang="scss">

.section {
  justify-content: center;
  align-items: center;
}

#logo {
  display: block;
  position: fixed;
  top: 41px;
  left: 64px;
  width: 156px;
  height: 64px;
  text-align: center;
  font-family: 'Old Standard TT', serif;
  font-size: 32px;
  color: green;
  z-index: 100;
}

#menu {
  position: fixed;
  top: 46px;
  right: 46px;
  z-index: 70;
  font-family: 'Old Standard TT', serif;
  font-size: 16px;
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: none;
  transition: display 1s ease-in-out;
}

#menu.open {
  display: block;
  list-style-type: none
}

#menu li a {
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border-radius: 3px;
}

#menu li a:hover {
  background-color: #f0f0f0;
}

#menu .active a {
  color: #ffffff;
  background-color: #426B1F;
;
}

.menu-button {
  position: fixed;
  top: 46px;
  right: 46px;
  z-index: 100;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #4e5451;
}

@media (min-width: 768px) {
  #menu {
    display: flex;
    position: fixed;
    top: 46px;
    right: 46px;
    background: none;
    padding: 0;
    box-shadow: none;
    font-size: 16px;
  }

  #menu.open {
    display: flex;
  }

  #menu li {
    display: inline-block;
    margin: 0 10px;
  }

  .menu-button {
    display: none;
  }
}
</style>
