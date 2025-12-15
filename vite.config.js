import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true, 
  },
  
  // 👇 新增這段 css 設定
  css: {
    preprocessorOptions: {
      scss: {
        // 使用 modern-compiler 或是忽略特定警告
        api: 'modern-compiler', // 使用更快的現代編譯器
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'mixed-decls'],
      },
    },
  },
});