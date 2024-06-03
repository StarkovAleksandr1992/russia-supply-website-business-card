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
  sectionsColor: ['#f8f9fa', '#f8f9fa', '#f8f9fa', '#f8f9fa', '#f8f9fa'],
  afterLoad: (origin, destination, direction) => {
    toggleMenuButtons(destination);
    toggleVisibility('taglines', destination.index, 0);
    toggleVisibility('customers', destination.index, 2);
    toggleVisibility('supply', destination.index, 3);
    toggleVisibility('contacts', destination.index, 4);
  },
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

function toggleVisibility(containerId, destinationIndex, visibleIndex) {
  const container = document.getElementById(containerId);
  const items = container.querySelectorAll('.data');

  items.forEach((item, index) => {
    if (destinationIndex === visibleIndex) {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 150);
    } else {
      item.classList.remove('visible');
    }
  });
}

const isMenuOpen = reactive({open: false});

function toggleMenu() {
  isMenuOpen.open = !isMenuOpen.open;
}
</script>

<template>
  <div>
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
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.taglines-container,
.customers-container,
.items-container,
.contacts-container {
  font-family: 'Old Standard TT', serif;
  word-break: break-word;


  @media screen and (min-width: 1300px) {
    font-size: 45px;
  }
  // Large desktops and laptops
  @media screen and (min-width: 1200px) and (max-width: 1299px) {
    font-size: 40px;
  }

  // Small smartphones
  @media screen and (max-width: 575px) {
    font-size: 20px;
  }
}

#menu {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 70;
  font-family: 'Old Standard TT', serif;
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
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

#menu li a:hover {
  background-color: #f0f0f0;
}

#menu .active a {
  color: #000;
  font-weight: bold;
}

.menu-button {
  position: fixed;
  top: 20px;
  right: 20px;
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
    top: 20px;
    right: 20px;
    background: none;
    padding: 0;
    box-shadow: none;
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

.data {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.data.visible {
  opacity: 1;
}
</style>
