import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'dist/src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        interop: 'compat',
    },
    external: (id) => {
        // Keep bundle entry/internal files in dist
        if (id.startsWith('dist/')) {
            return false;
        }
        // Treat bare imports as external (node_modules)
        return !id.startsWith('.') && !id.startsWith('/');
    },
    plugins: [resolve({ preferBuiltins: true }), commonjs()],
};
