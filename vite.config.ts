import {md} from "./plugins/md";
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import fs from 'fs';
import {baseParse} from '@vue/compiler-core';
import {defineConfig} from "vite";

const getCustomBlockAndCode = {
    name: 'getCustomBlockAndCode',
    transform(code, id) {
        //找到含有自定义块<demo>的vue文件路径
        if (!/[0-9]Demo\.vue$/.test(id)) {
            return;
        }
        console.log(typeof code);
        //读取含有自定义块<demo>的vue文件内容
        const file = fs.readFileSync(id).toString();

        //获取到自定义块<demo>
        const parsed = baseParse(file).children.find((item) => {
            // @ts-ignore
            return item.tag === 'demo';
        });
        //获取到内容
        // @ts-ignore
        let title = parsed.children[0].content.trim();
        //获取到剩余的内容
        let main = file.split(parsed.loc.source).join('').trim();

        return `export default function(com){
              console.log(com)
          
              
            }`;
    }
};
// __sourceCode : ${JSON.stringify(main)},
// __sourceCodeTitle : ${JSON.stringify(title)}
export default defineConfig({
    plugins: [vue(), getCustomBlockAndCode, md()]
});
