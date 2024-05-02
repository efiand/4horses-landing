import html from '../modules/html';

const getClasses = (name, i, lastIndex) => {
	const className = `params__${name}`;
	if (i === 0) {
		return `${className} ${className}--first`;
	}
	if (i === lastIndex) {
		return `${className} ${className}--last`;
	}
	return className;
};

export default (params, { className = '' } = {}) => {
	const lastIndex = params.length - 1;

	return html`
		<dl class="params ${className}">
			${params.map(({ key, value }, i) => html`
				<div class="params__item">
					<dt class="${getClasses('key', i, lastIndex)}">${key}:</dt>
					<dd class="${getClasses('value', i, lastIndex)}">${value}</dd>
				</div>
			`).join('')}
		</dl>
	`;
};
