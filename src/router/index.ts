import {createWebHashHistory, createRouter} from 'vue-router';
import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import SwitchDemo from "../components/SwitchDemo.vue";
import ButtonDemo from "../components/ButtonDemo.vue";
import DialogDemo from "../components/DialogDemo.vue";
import TabsDemo from "../components/TabsDemo.vue";
import Markdown from "../components/Markdown.vue";
import {h} from "vue";
// @ts-ignore
import description from "../markdown/description.md";
// @ts-ignore
import install from "../markdown/install.md";
// @ts-ignore
import use from "../markdown/use.md";

const md = (string) => {
    return h(Markdown, {content: string, key: string});
};
const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {path: 'description', component: md(description)},
                {path: 'install', component: md(install)},
                {path: 'use', component: md(use)},
                {path: 'switch', component: SwitchDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo}
            ]
        }
    ]
});

export default router;
