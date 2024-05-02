import html from '../modules/html';

const getPagination = (length) => {
	const list = Array.from({ length }, (item, i) => html`
		<li>
			<button
				class="slider__dot ${i ? '' : 'slider__dot--current'}"
				aria-label="Перейти к слайду ${i + 1}"
				data-slide="${i}"
			></button>
		</li>
	`).join('');
	return html`<ul class="slider__pagination">${list}</ul>`;
};

const getCounter = (length) => html`
	<p class="slider__counter">
		<span class="slider__current">1</span>
		/
		<span>${length}</span>
	</p>
`;

export default ({ className = '', length, loop = false, pagination = false, Slot }) => html`
	<div
		class="slider ${className}"
	>
		<div class="slider__wrapper">
			${Slot({ className: 'slider__list' })}
		</div>

		<div class="slider__panel">
			<button
				class="slider__button slider__button--prev"
				aria-label="К предыдущему слайду"
				${loop ? '' : 'disabled'}
			></button>
			${(pagination ? getPagination : getCounter)(length)}
			<button
				class="slider__button slider__button--next"
				aria-label="К следующему слайду"
			></button>
		</div>
	</div>
`;
