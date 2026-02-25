import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'dist/src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        interop: 'auto',
    },
    external: (id) => {
        // Packages starting with @ or lowercase letters (but not dist/src paths)
        return /^(@|[a-z])/.test(id) && !id.includes('/src/') && !id.includes('/lib/');
    },
    plugins: [
        resolve({ preferBuiltins: true }),
        commonjs(),
    ],
};
