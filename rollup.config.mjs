import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { builtinModules } from 'module';

export default {
    input: 'dist/src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        interop: 'compat',
        inlineDynamicImports: true,
    },
    external: (id) => builtinModules.includes(id) || id.startsWith('node:'),
    plugins: [resolve({ preferBuiltins: true }), commonjs(), json()],
};
