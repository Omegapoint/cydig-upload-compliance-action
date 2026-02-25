import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
    input: 'dist/src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        interop: 'compat',
    },
    external: [],
    plugins: [resolve({ preferBuiltins: true, exportConditions: ['import', 'require', 'default'] }), commonjs(), json()],
};
