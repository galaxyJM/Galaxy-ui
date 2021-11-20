import {createWebHashHistory, createRouter} from 'vue-router';
import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import Dialog from "../components/Dialog.vue";
import Tabs from "../components/Tabs.vue";
import SwitchDemo from "../components/SwitchDemo.vue";
import ButtonDemo from "../components/ButtonDemo.vue";


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
            children:[
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:Dialog},
                {path:'tabs',component:Tabs}
            ]
        }
    ]
});

export default router;
