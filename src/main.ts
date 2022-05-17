import { createApp } from 'vue';
import App from '/App.vue';
import './index.scss';
import router from "./router/index";
import 'virtual:svg-icons-register'
import 'highlight.js/styles/atom-one-light.css';
import hljs from 'highlight.js/lib/core';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('css', scss);
const app = createApp(App);
app.use(hljsVuePlugin)
app.use(router);
app.mount('#app');
