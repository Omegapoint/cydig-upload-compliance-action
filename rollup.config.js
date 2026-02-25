import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'dist/src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    external: (id) => id.includes('node_modules'),
    plugins: [
        {
            name: 'external-packages',
            resolveId(id) {
                if (id.startsWith('@actions/') || id === 'axios' || id.startsWith('@azure/')) {
                    return { id, external: true };
                }
            }
        },
        resolve({ preferBuiltins: true }),
        commonjs()
    ]
};
