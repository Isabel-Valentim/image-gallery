const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// array all images
const images= ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

// add images to the thumb bar
images.forEach(e => {
    const imagesEle = document.createElement('img')
    imagesEle.setAttribute('src', `images/${e}`)
    thumbBar.appendChild(imagesEle)
});

//click on images
images.forEach(e =>{
    e.addEventListener("click",pickMe)
})

function pickMe(){
    if (displayedImage.classList.contains('displayed-img')){
        displayedImage.classList.remove('displayed-img')
    }else{
        displayedImage.classList.add('displayed-img')
    }  
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', darkenImage)

function darkenImage(){
    if (displayedImage.classList.contains('filter')){
        displayedImage.classList.remove('filter')
    }else{
        displayedImage.classList.add('filter')
    }  
}
