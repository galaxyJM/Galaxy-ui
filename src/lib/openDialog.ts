import {createApp, h} from "vue";
import Dialog from './Dialog.vue';

export const openDialog = (options) => {
    const {title, content,closeClickOverlay,ok,cancel} = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    //用h函数去渲染可以传多个参数！
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,
                closeClickOverlay,
                ok,
                cancel,
                'onUpdate:visible': (newValue) => {
                    if (!newValue) {
                        app.unmount(); //销毁app
                        div.remove();  //销毁一开始创建的div
                    }
                }
            }, {title, content});
        }
    });
    app.mount(div)
};