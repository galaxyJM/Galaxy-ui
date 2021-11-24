import {md} from "./plugins/md";

const viteConfig = {
    host: '0.0.0.0',
    port: 8080,
    plugins: [md()]
};
export default viteConfig;