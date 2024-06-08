import { defineConfig } from 'tsup';

const tsupConfig = defineConfig({
  entry: ['trpc-api-export/builder/index.ts'],
  outDir: 'trpc-api-export/dist',
  format: ['esm'],
  clean: true,
  dts: true,
  tsconfig: 'trpc-api-export/builder/tsconfig.tsup.json',
});

export default tsupConfig;
