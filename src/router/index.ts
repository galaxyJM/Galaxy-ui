import {createWebHashHistory, createRouter} from 'vue-router';
import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import SwitchDemo from "../components/SwitchDemo.vue";
import ButtonDemo from "../components/ButtonDemo.vue";
import DialogDemo from "../components/DialogDemo.vue";
import TabsDemo from "../components/TabsDemo.vue";
import Description from "../components/Description.vue";
import Install from "../components/Install.vue";
import Use from "../components/Use.vue";


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
                {path:'description',component:Description},
                {path:'install',component:Install},
                {path:'use',component:Use},
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabsDemo}
            ]
        }
    ]
});

export default router;
