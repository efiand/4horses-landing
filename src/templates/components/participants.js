import Image from './image';
import Slider from './slider';
import html from '../modules/html';

const getItem = ({ name, description, image, url }) => html`
	<li class="participants__item">
		<figure class="participants__portrait">
			${Image(image, { className: 'participants__image' })}
		</figure>
		<p class="participants__name">${name}</p>
		<p class="participants__description">${description}</p>
		<a class="button button--tertiary" href="${url}">Подробнее</a>
	</li>
`;

export default ({ items }, { className = '' } = {}) => Slider({
	className,
	length: items.length,
	loop: true,
	Slot({ className }) {
		return html`
			<ul class="participants ${className}">${items.map(getItem).join('')}</ul>
		`;
	},
});
