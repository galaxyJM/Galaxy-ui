import {createWebHashHistory, createRouter} from 'vue-router';
import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import SwitchDemo from "../components/SwitchDemo.vue";
import ButtonDemo from "../components/ButtonDemo.vue";
import DialogDemo from "../components/DialogDemo.vue";
import TabsDemo from "../components/TabsDemo.vue";


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
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabsDemo}
            ]
        }
    ]
});

export default router;
