// @ts-ignore
import path from 'path'
// @ts-ignore
import fs from 'fs'

// @ts-ignore
import marked from "marked"

const mdToJs = str => {
    const content = JSON.stringify(marked.parse(str))  //marked.parse(str) 将md文件解析为一个html
    return `export default ${content}`
}

export function md() {
    return {
        configureServer: [
            async ({ app }) => {
                app.use(async (ctx, next) => {
                    if (ctx.path.endsWith('.md')) {
                        ctx.type = 'js'
                        const filePath = path.join(process.cwd(), ctx.path)
                        ctx.body = mdToJs(fs.readFileSync(filePath).toString())
                    } else {
                        await next()
                    }
                })
            },
        ],
        transforms: [{
            test: context => context.path.endsWith('.md'),
            transform: ({ code }) => mdToJs(code)
        }]
    }
}