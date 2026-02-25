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
                // Mark all bare package imports as external (not relative/absolute paths)
                if (!id.includes('/') || id.startsWith('@')) {
                    // This catches both @scoped/package and plain package names
                    return { id, external: true };
                }
            },
        },
        resolve({ preferBuiltins: true }),
        commonjs(),
    ],
};
