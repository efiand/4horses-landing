import html from '../modules/html';

export default () => html`
	<header class="page-header">
		<img class="page-header__logo" src="/img/logo.svg" width="213" height="32" alt="Логотип клуба">

		<p class="page-header__promo">
			Превратите уездный город
			<span>в столицу</span>
			<span>земного шара</span>
		</p>
		<p class="page-header__text">
			Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам.
		</p>

		<div class="page-header__buttons">
			<a class="button button--primary" href="#!">Поддержать шахматную мысль</a>
			<a class="button button--secondary" href="#!">Подробнее о турнире</a>
		</div>
	</header>
`;
