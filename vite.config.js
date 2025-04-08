import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import svgSprite from 'vite-plugin-svg-sprite';
import SortCss from 'postcss-sort-media-queries';
import glob from 'fast-glob';

export default defineConfig(({ command }) => {
  return {
    base: '/team-project-group-11/',
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      rollupOptions: {
        external: ['fsevents'],
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: chunkInfo => {
            if (chunkInfo.name === 'commonHelpers') {
              return 'commonHelpers.js';
            }
            return '[name].js';
          },
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
    },
    css: {
      postcss: {
        plugins: [SortCss({ sort: 'mobile-first' })],
      },
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/*.html']),
      svgSprite({
        include: 'src/img/**/*.svg',
      }),
    ],
    optimizeDeps: {
      exclude: ['vite-plugin-svg-sprite', 'rollup'],
    },
    ssr: {
      noExternal: ['vite-plugin-svg-sprite', 'rollup'],
    },
  };
});
