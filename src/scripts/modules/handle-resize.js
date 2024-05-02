export const resizeHandlers = [];

export default () => {
	window.addEventListener('resize', (event) => {
		resizeHandlers.forEach((handle) => handle(event));
	});
};
