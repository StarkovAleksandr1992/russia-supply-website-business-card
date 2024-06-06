import {createApp} from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'
import {createI18n} from "vue-i18n";
import {defaultLocale, languages} from "@/i18n/index.js";


const localStorageLang = localStorage.getItem('lang');
const messages = Object.assign(languages);
const i18n = createI18n({
    legacy: false,
    fallbackLocale: 'ru',
    locale: localStorageLang || defaultLocale,
    messages
});


const app = createApp(App);
app
    .use(VueFullPage)
    .use(i18n)
    .mount('#app');
