const fontSelect=document.getElementById('fontSelect');
const paragraph=document.querySelector('p');

fontSelect.addEventListener('change', function (){
    const selectedFont=fontSelect.value;
    paragraph.style.fontFamily=selectedFont;
});
