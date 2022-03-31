import {baseParse} from "@vue/compiler-core";

const path = require('path');
const fs = require('fs');
import {marked} from 'marked';

const mdToJs = str => {
    const content = JSON.stringify(marked.parse(str));  //marked.parse(str) 将md文件解析为一个html
    return `export default ${content}`;
};

export function md() {
    return {
        name: 'md',
        transform(code, id) {
            if (!/\.md$/.test(id)) {
                return;
            }
            //获取md文件的内容传入mdToJs函数
            let content = mdToJs(fs.readFileSync(id).toString());
            return `${content}`.trim();
        }}}
    // configureServer(server) {
    //     server.middlewares.use((req, res, next) => {
    //         let pathname = req._parsedUrl.pathname;
    //         if (pathname.endsWith('.md')) {
    //             const filePath = path.join(process.cwd(), pathname);
    //             //获取md文件的内容传入mdToJs函数
    //             let content = mdToJs(fs.readFileSync(filePath).toString())
    //             res._header = 'sdfsdfsfd'
    //             res.end(content)
    //         } else {
    //             next();
    //         }
    //     });
    // }



//     transforms: [{
//         test: context => context.path.endsWith('.md'),
//         transform: ({ code }) => mdToJs(code)
//     }]
//
