import html from '../modules/html';

export default () => process.env.NODE_ENV === 'development'
	? html`
		<script>
			window.pixelperfect = {
				breakpoints: [375, 1366, 1700],
				ext: 'png',
				folder: 'pixelperfect',
			};
		</script>
		<script src="/pixelperfect/pixelperfect.min.js" defer></script>
	`
	: '';
