import { clickHandlers, resizeHandlers } from './handle-events';

export default () => {
	document.querySelectorAll('.slider').forEach((sliderElement) => {
		let currentIndex = 0;
		const wrapperElement = sliderElement.querySelector('.slider__wrapper');
		const listElement = wrapperElement.querySelector('.slider__list');
		const counterElement = sliderElement.querySelector('.slider__current');
		const prevElement = sliderElement.querySelector('.slider__button--prev');
		const nextElement = sliderElement.querySelector('.slider__button--next');
		const dotElements = sliderElement.querySelectorAll('.slider__dot');
		const dots = new Set(dotElements);
		const slideElements = listElement.querySelectorAll('.slider__list > li');
		const lastIndex = slideElements.length - 1;
		const loop = !prevElement.disabled;

		const setWidth = () => {
			const { clientWidth } = wrapperElement;
			let width = clientWidth - 40;
			if (document.body.clientWidth >= 1262) {
				width = clientWidth / 3 - 20;
			}
			wrapperElement.style.setProperty('--slide-width', `${width}px`);
		};
		const setOffset = () => {
			let width = slideElements[0].clientWidth;
			// if (document.body.clientWidth >= BREAKPOINT) {
			// 	width = clientWidth / 3 - SPACES * 0.5;
			// }
			// listElement.style.setProperty('--offset', `calc(${currentIndex * -100}% + ${SPACES * currentIndex / 2}px)`);
			listElement.style.setProperty('--offset', `${(-width - 20) * currentIndex}px`);
		};
		const setIime = (count = 1) => {
			wrapperElement.style.setProperty('--time', `${0.2 * count}s`);
		};
		const setSlide = (i) => {
			prevElement.disabled = false;
			nextElement.disabled = false;

			if (loop) {
				if (i > lastIndex) {
					currentIndex = 0;
					setIime(slideElements.length);
				} else if (i < 0) {
					currentIndex = lastIndex;
					setIime(slideElements.length);
				} else {
					currentIndex = i;
					setIime();
				}
			} else {
				currentIndex = Math.max(0, Math.min(lastIndex, i));

				if (currentIndex === 0) {
					prevElement.disabled = true;
				} else if (currentIndex === lastIndex) {
					nextElement.disabled = true;
				}
			}

			setOffset();
			if (counterElement) {
				counterElement.textContent = currentIndex + 1;
			} else {
				dotElements.forEach((dotElement, j) => {
					if (currentIndex === j) {
						dotElement.classList.add('slider__dot--current');
					} else {
						dotElement.classList.remove('slider__dot--current');
					}
				});
			}
		};

		resizeHandlers.push(() => {
			setWidth();
			setOffset();
		});
		clickHandlers.push((event) => {
			if (dots.has(event.target)) {
				setSlide(+event.target.dataset.slide);
			} else if (event.target === prevElement) {
				setSlide(currentIndex - 1);
			} else if (event.target === nextElement) {
				setSlide(currentIndex + 1);
			}
		});
		slideElements.forEach((slideElement, i) => {
			slideElement.querySelectorAll('a, button').forEach((controlElement) => {
				controlElement.addEventListener('focus', () => {
					setSlide(i);
					listElement.scrollIntoView();
				});
			});
		});

		setWidth();
	});
};
