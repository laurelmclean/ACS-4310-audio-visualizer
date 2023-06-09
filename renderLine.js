/**
 * 
 * @param {UINT8 0Array} frequencyArray 
 * @param {canvas context} ctx 
 * @param {number} centerX 
 * @param {number} centerY 
 */

function render(frequencyArray, canvas, ctx, analyser) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    const bars = frequencyArray.length;
    const step = canvas.width / bars;

    analyser.getByteTimeDomainData(frequencyArray);

    frequencyArray.forEach((f, i) => {
        const barHeight = (f / 255) * canvas.height;
        const x = i * step;
        const y = barHeight;

        ctx.lineTo(x, y);
        ctx.lineWidth = f / 100;
        ctx.strokeStyle = 'black';
    });

    ctx.stroke();

    requestAnimationFrame(render);
}

export default render;