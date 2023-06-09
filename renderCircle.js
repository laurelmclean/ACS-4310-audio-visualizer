
/**
 * 
 * @param {UINT8 0Array} frequencyArray 
 * @param {canvas context} ctx 
 * @param {number} centerX
 * @param {number} centerY 
 */

function render(frequencyArray, ctx, centerX, centerY) {
	ctx.fillStyle = 'rgba(255, 255, 255, 0)';
	ctx.fillRect(0, 0, 500, 500);
	ctx.fill();

	const bars = frequencyArray.length;
	const colorStep = 360 / bars;
	const pi2 = Math.PI * 2;

	frequencyArray.forEach((f, i) => {
		const radius = f / 255 * 500;
		ctx.beginPath();
		ctx.arc(centerX, centerY, radius, 0, pi2);
		ctx.strokeStyle = `hsla(${colorStep * i}, 100%, 70%, 0.8)`;
		ctx.stroke();
	});
}

export default render;