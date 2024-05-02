import Image from './image';
import Params from './params';
import html from '../modules/html';

const getEventParams = (params) => [
	{
		key: 'Место проведения',
		value: params.venue,
	},
	{
		key: 'Дата и время мероприятия',
		value: `${params.date} в ${params.time}`,
	},
	{
		key: 'Стоимость входных билетов',
		value: params.entryPrice,
	},
	{
		key: 'Плата за игру',
		value: params.price,
	},
	{
		key: 'Взнос на телеграммы',
		value: html`<del>${params.contributionOld}</del> <ins>${params.contribution}</ins>`,
	},
];

const getTexts = ({ prepend, text }) => {
	if (prepend) {
		return html`
			<div class="events__texts">
				<p class="events__text events__text--prepend">${prepend}</p>
				<p class="events__text">${text}</p>
			</div>
		`;
	}
	return html`<p class="events__text">${text}</p>`;
};

export default ({ title, items }, { className = '' } = {}) => html`
	<section class="events ${className}">
		<h2 class="visually-hidden">${title}</h2>

		<ul class="events__items">
			${items.map(({ prepend, image, text, params, addition }) => html`
				<li class="events__item ${params ? 'events__item--complex' : ''}">
					${Image(image, { className: 'events__image' })}
					${getTexts({ prepend, image, text })}
					${params ? Params(getEventParams(params), { className: 'events__params' }) : ''}
					${addition ? html`<p class="events__addition description">${addition}</p>` : ''}
				</li>
			`).join('')}
		</ul>
	</section>
`;
