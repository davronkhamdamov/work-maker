const image = document.getElementById('image');
const text1 = document.getElementById('text');
const text2 = document.getElementById('text2');
const download = document.getElementById('download');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = image.src;

let x = 250;
const y = 200;
const bgColor = 'white';
const borderColor = '#000';
const borderWidth = 2;
const borderRadius = 10;



img.onload = function () {
    ctx.drawImage(img, 0, 0, 500, 700);
    ctx.font = "30px 'Gochi Hand', cursive";
    ctx.fillStyle = 'black';
};
function drowFirst(text) {
    const textWidth = ctx.measureText(text).width;
    const textHeight = parseInt(ctx.font);
    x = 250 - (textWidth / 2)
    const backgroundWidth = textWidth + 20;
    const backgroundHeight = textHeight + 10;

    ctx.fillStyle = bgColor;
    ctx.beginPath();
    ctx.moveTo(x + borderRadius, y - textHeight);
    ctx.lineTo(x + backgroundWidth - borderRadius, y - textHeight);
    ctx.arcTo(x + backgroundWidth, y - textHeight, x + backgroundWidth, y - textHeight + borderRadius, borderRadius);
    ctx.lineTo(x + backgroundWidth, y + backgroundHeight - borderRadius);
    ctx.arcTo(x + backgroundWidth, y + backgroundHeight, x + backgroundWidth - borderRadius, y + backgroundHeight, borderRadius);
    ctx.lineTo(x + borderRadius, y + backgroundHeight);
    ctx.arcTo(x, y + backgroundHeight, x, y + backgroundHeight - borderRadius, borderRadius);
    ctx.lineTo(x, y - textHeight + borderRadius);
    ctx.arcTo(x, y - textHeight, x + borderRadius, y - textHeight, borderRadius);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.stroke();

    ctx.fillStyle = 'black';
    ctx.fillText(text, x + 10, y + 10);
}
function drowSecond(text) {
    const y = 400;

    const textWidth = ctx.measureText(text).width;
    const textHeight = parseInt(ctx.font);
    x = 250 - (textWidth / 2)
    const backgroundWidth = textWidth + 20;
    const backgroundHeight = textHeight + 10;

    ctx.fillStyle = bgColor;
    ctx.beginPath();
    ctx.moveTo(x + borderRadius, y - textHeight);
    ctx.lineTo(x + backgroundWidth - borderRadius, y - textHeight);
    ctx.arcTo(x + backgroundWidth, y - textHeight, x + backgroundWidth, y - textHeight + borderRadius, borderRadius);
    ctx.lineTo(x + backgroundWidth, y + backgroundHeight - borderRadius);
    ctx.arcTo(x + backgroundWidth, y + backgroundHeight, x + backgroundWidth - borderRadius, y + backgroundHeight, borderRadius);
    ctx.lineTo(x + borderRadius, y + backgroundHeight);
    ctx.arcTo(x, y + backgroundHeight, x, y + backgroundHeight - borderRadius, borderRadius);
    ctx.lineTo(x, y - textHeight + borderRadius);
    ctx.arcTo(x, y - textHeight, x + borderRadius, y - textHeight, borderRadius);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.stroke();

    ctx.fillStyle = 'black';
    ctx.fillText(text, x + 10, y + 10);
}

download.addEventListener('click', () => {
    drowFirst(text1.value)
    drowSecond(text2.value);
    const ImageURL = canvas.toDataURL('image/jpeg');
    const btn = document.getElementById("downloadLink")
    btn.href = ImageURL;
    btn.click()
    img.onload()
})