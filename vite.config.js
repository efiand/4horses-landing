import multipleAssets from 'vite-multiple-assets';
import { createHtmlPlugin } from 'vite-plugin-html';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { head, body } from './src/templates/main';

const isDev = process.env.NODE_ENV === 'development';

const plugins = [
	viteSingleFile(),
	createHtmlPlugin({
		minify: true,
		entry: 'src/scripts/main.js',
		inject: { data: { head, body } },
	}),
];

if (isDev) {
	plugins.push(multipleAssets(['src/dev']));
}

// https://vitejs.dev/config/
export default defineConfig({
	base: '',
	plugins,
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
