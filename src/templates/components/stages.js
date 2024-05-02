import Slider from './slider';
import html from '../modules/html';

export default ({ items }, { className = '' } = {}) => Slider({
	className: `${className} stages`,
	length: items.length,
	pagination: true,
	Slot({ className }) {
		return html`
			<ul class="stages__list ${className}">
				${items.map((stages) => html`
					<li class="stages__item">
						${stages.map((stage) => html`<p class="stages__text">${stage}</p>`).join('')}
					</li>
				`).join('')}
			</ul>
		`;
	},
});
