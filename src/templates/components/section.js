import html from '../modules/html';

export default ({ title, description = '' }, { className = '', Slot = () => '' } = {}) => html`
	<section class="section ${className}">
		<header class="section__header">
			<h2 class="section__title">${title}</h2>
			${description ? html`<p class="section__description description">${description}</p>` : ''}
		</header>
		${Slot({ className: 'section__slot' })}
	</section>
`;
