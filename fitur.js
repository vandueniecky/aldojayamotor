let taggOne = document.getElementById('tagg1');
let popupOne = document.getElementById('popuptagg1');
let taggTwo = document.getElementById('tagg2');
let popupTwo = document.getElementById('popuptagg2')

taggOne.addEventListener("mouseenter", (e) =>{
    $('#popuptagg1').show();
});

taggOne.addEventListener("mouseleave", (e) =>{
    $('#popuptagg1').hide();
});

popupOne.addEventListener("mouseenter", () =>{
    $('#popuptagg1').show();
});

popupOne.addEventListener("mouseleave", () =>{
    $('#popuptagg1').hide();
});

// Batas

taggTwo.addEventListener("mouseenter", (e) =>{
    $('#popuptagg2').show();
});

taggTwo.addEventListener("mouseleave", (e) =>{
    $('#popuptagg2').hide();
});

popupTwo.addEventListener("mouseenter", () =>{
    $('#popuptagg2').show();
});

popupTwo.addEventListener("mouseleave", () =>{
    $('#popuptagg2').hide();
});