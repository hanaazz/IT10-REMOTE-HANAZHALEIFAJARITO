const fontSelect=document.getElementById('fontSelect');
const paragraph=document.querySelector('p');

fontSelect.addEventListener('change', function (){
    const selectedFont=fontSelect.value;
    paragraph.style.fontFamily=selectedFont;
});

const sizeSelect=document.getElementById('sizeSelect');
const paragraphs=document.querySelector('p');

sizeSelect.addEventListener('change', function () {
    const selectedSize=sizeSelect.value;
    paragraphs.style.fontSize=selectedSize;
})