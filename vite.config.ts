import {md} from "./plugins/md";
// @ts-ignore
import fs from 'fs';
import {baseParse} from '@vue/compiler-core';

export default {
    plugins: [md()],
    vueCustomBlockTransforms: {
        demo: (options) => {
            const {code, path} = options;
            //path为含有demo自定义块的组件所在的路径
            const file = fs.readFileSync(path).toString();
            //fs读取组件并且转换为字符串
            const parsed = baseParse(file).children.find((n) => {
                if ("tag" in n) {
                    return n.tag === 'demo';
                }
            });
            let title;
            if ("children" in parsed) {
                // @ts-ignore
                title = parsed.children[0].content;
            }
            const main = file.split(parsed.loc.source).join('').trim();
            return `export default function (Component) {
        Component.__sourceCode = ${
                JSON.stringify(main)
            }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
        }
    }
};