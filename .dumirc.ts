import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'test',
    deviceWidth: 375,
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'src/components' },
      { type: 'component', dir: 'src/components-pro' },
    ],
    entryFile: 'src/index.ts',
  },
});
