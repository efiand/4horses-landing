import html from '../modules/html';

export default ({ name, width, height, alt = '', lazy = true }, { className = '' } = {}) => html`
	<img
		${className ? `class="${className}"` : ''}
		src="/img/${name}"
		${width ? `width="${width}"` : ''}
		${height ? `height="${height}"` : ''}
		alt="${alt}"
		${lazy ? 'loading="lazy"' : ''}
	>
`;
