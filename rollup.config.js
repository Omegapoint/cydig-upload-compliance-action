import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'dist/src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    external: id => id.includes('node_modules'),
    plugins: [
        resolve(),
        commonjs()
    ]
};
