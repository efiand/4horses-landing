import html from '../modules/html';

export default ({ content, image, width, mobileWidth }, { className = '' } = {}) => html`
	<p
		class="marquee ${className}"
		style="--image: var(--icon-${image}); --width: ${width}px; --mobile-width: ${mobileWidth}px"
	>
		${content ? '' : html`<span class="visually-hidden">${content}</span>`}
	</p>
`;
