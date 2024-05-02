export const resizeHandlers = [];
export const clickHandlers = [];

export default () => {
	window.addEventListener('resize', (event) => {
		resizeHandlers.forEach((handle) => handle(event));
	});
	document.body.addEventListener('click', (event) => {
		clickHandlers.forEach((handle) => handle(event));
	});
};
