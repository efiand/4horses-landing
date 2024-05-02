import Events from './components/events';
import Marquee from './components/marquee';
import PageFooter from './components/page-footer';
import PageHeader from './components/page-header';
import Participants from './components/participants';
import Section from './components/section';
import Stages from './components/stages';
import data from '../data/main';
import dev from './modules/dev';
import html from './modules/html';

const getPreloadFonts = (font, weights) => weights
	.map((weight) => html`
		<link rel="preload" href="/fonts/${font}-${weight}.woff2" as="font" crossorigin="anonymous">
	`)
	.join('');

export const head = html`
	<title>${data.title}</title>
	${getPreloadFonts('golos-text', [400, 500, 600, 700])}
	${getPreloadFonts('merriweather', [400, 700])}
`;

export const body = html`
	<div class="page">
		${PageHeader()}

		<main>
			<h1 class="visually-hidden">${data.title}</h1>
			${Marquee(data.slogans, { className: 'page__marquee' })}
			${Events(data.events)}
			${Section(data.stages, { Slot: ({ className }) => Stages(data.stages, { className }) })}
			${Section(data.participants, { Slot: ({ className }) => Participants(data.participants, { className }) })}
			${Marquee({ ...data.slogans, content: '' }, { className: 'page__marquee page__marquee--last' })}
		</main>

		${PageFooter({ text: data.disclaimer })}
	</div>

	${dev()}
`;
