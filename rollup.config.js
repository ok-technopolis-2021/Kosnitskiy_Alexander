// rollup.config.js
import scss from 'rollup-plugin-scss'
import html from "@rollup/plugin-html";
import fs from 'fs';

const template = ({ attributes, bundle, files, publicPath, title }) => {
    return fs.readFileSync('./index.html')
}

export default {
    input: './src/input.js',
    output: {
        file: 'dist/output.js',
        format: 'esm'
    },
    plugins: [
        scss(), // will output compiled styles to output.css
        html({ template })
    ]
}
