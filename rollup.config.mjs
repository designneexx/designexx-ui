import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import css from 'rollup-plugin-import-css';
import externals from 'rollup-plugin-node-externals';
import image from '@rollup/plugin-image';

export default [
  {
    input: 'index.ts',
    external: ['react', 'react-dom', 'react-router-dom', '@chakra-ui/react', '@chakra-ui/icons'],
    output: [
      {

        format: 'cjs',
        file: 'dist/index.js',
        sourcemap: true,
      },
      {
        format: 'esm',
        file: 'dist/index.es.js',
        sourcemap: true,
      },
    ],
    plugins: [externals(), resolve(), commonjs(), typescript({ useTsconfigDeclarationDir: true }), image(), css()
    ],
  },
  {
    input: ['index.ts'],
    output: [
      {
        format: 'esm',
        file: 'dist/index.d.ts',
      },
    ],
    plugins: [dts()],
  },
];
