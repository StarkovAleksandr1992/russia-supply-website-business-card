export const defaultLocale = 'ru';

let ru = await fetch('/static/locales/ru.json').then(res => res.json()).catch(err => console.log(err));
let en = await fetch('/static/locales/en.json').then(res => res.json()).catch(err => console.log(err));
let cn = await fetch('/static/locales/cn.json').then(res => res.json()).catch(err => console.log(err));
let za = await fetch('/static/locales/za.json').then(res => res.json()).catch(err => console.log(err));

export const languages = {
    ru,
    en,
    cn,
    za
}