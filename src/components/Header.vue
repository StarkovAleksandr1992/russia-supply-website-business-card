<script setup>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const languages = [
  {code: 'ru', flag: 'fi-ru'},
  {code: 'en', flag: 'fi-gb'},
  {code: 'cn', flag: 'fi-cn'},
  {code: 'za', flag: 'fi-za'}
];

const currentFlag = ref('fi-ru'); // Default flag

const changeLanguage = (lang) => {
  locale.value = lang;
  currentFlag.value = languages.find(language => language.code === lang)?.flag || 'fi-ru';
  localStorage.setItem('lang', lang);
};

// Set the language and flag based on localStorage when the component is mounted
onMounted(() => {
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    locale.value = savedLang;
    currentFlag.value = languages.find(language => language.code === savedLang)?.flag || 'fi-ru';
  }
});
</script>

<template>
  <div class="header">
    <div class="logo" id="logo">
      <div>{{ $t('header.logo.firstLine') }}</div>
      <div>{{ $t('header.logo.secondLine') }}</div>
    </div>
    <button id="menu-toggle" @click="toggleMenu">
      &#9776;
    </button>
    <ul id="menu" :class="{ 'active': isMenuOpen }">
      <li data-menuanchor="page1" class="active"><a href="#page1">{{ $t('header.menu.home') }}</a></li>
      <li data-menuanchor="page2"><a href="#page2">{{ $t('header.menu.map') }}</a></li>
      <li data-menuanchor="page3"><a href="#page3">{{ $t('header.menu.customers') }}</a></li>
      <li data-menuanchor="page4"><a href="#page4">{{ $t('header.menu.supply') }}</a></li>
      <li data-menuanchor="page5"><a href="#page5">{{ $t('header.menu.contacts') }}</a></li>
      <li class="flag-container">
        <span :class="`fi ${currentFlag}`"></span>
      </li>
      <li class="language-switcher">
        <select @change="changeLanguage($event.target.value)" :value="locale.value">
          <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.code }}</option>
        </select>
      </li>
    </ul>
  </div>
</template>


<style scoped lang="scss">

#logo {
  display: block;
  position: fixed;
  text-align: center;
  letter-spacing: -2%;
  font-size: 1.5rem;
  color: #426B1F;
  z-index: 100;
  top: 1.5rem;
  left: 2rem;

  @media screen and (max-width: 600px) and (orientation: portrait) {
    top: 1.5rem;
    left: 1rem;
    font-size: 1rem;
  }
  @media screen and (max-height: 600px) and (orientation: landscape) {
    top: 1rem;
    left: 1rem;
    font-size: 1rem;
  }
}

#menu-toggle {
  display: none;
  position: fixed;
  top: 1.5rem;
  right: 1rem;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 101;

  @media screen and (max-width: 600px) {
    display: block;
  }

  &:focus {
    outline: none;
  }
}

#menu {
  display: flex;
  position: fixed;
  top: 1.5rem;
  right: 1rem;
  padding: 1rem;
  z-index: 70;
  border: #2b2f32;
  font-family: 'Old Standard TT Regular', serif;
  list-style-type: none;

  @media screen and (max-width: 600px) and (orientation: portrait) {
    display: none;
    flex-direction: column;
    top: 3.5rem;
    right: 1rem;
    width: auto;
    background: white;
    font-size: 0.75rem;
    padding: 0.75rem;
    border-radius: 0.75rem;
    text-align: left;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
  @media screen and (max-height: 600px) and (orientation: landscape) {
    display: flex;
    position: fixed;
    top: 1.0rem;
    padding: 0.5rem;
    z-index: 70;
    list-style-type: none;
    font-size: 0.75rem;
  }

  &.active {
    display: flex;
    opacity: 1;
  }

  transition: opacity 0.3s ease-in-out;
}

#menu li {
  margin: 0.1rem 0.2rem;
}

#menu li a {
  padding: 0.5rem;
  border-radius: 0.75rem;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s, color 0.3s;

  @media screen and (max-width: 600px) {
    padding: 0.2rem;
    border-radius: 0.3rem;
  }
  @media screen and (max-height: 600px) and (orientation: landscape) {
    padding: 0.1rem;
    border-radius: 0.3rem;
  }
}

#menu li a:hover {
  color: white;
  background-color: #426B1F;
}

#menu .active a {
  color: white;
  background-color: #426B1F;
}

.language-switcher {
  margin-left: auto;
}

.language-switcher select {
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  color: #333;

  &:focus {
    outline: none;
    border-color: #426B1F;
  }
}

.flag-container {
  margin-left: 1rem;
}

.flag-container .fi {
  font-size: 1rem;
}
</style>
