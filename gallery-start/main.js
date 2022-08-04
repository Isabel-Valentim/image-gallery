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
    imagesEle.classList.add('imgs')
});

const allImages = document.querySelectorAll('.imgs')
//click on images
console.log(allImages)
function pickImage(el){
    if(el)
    el.target.classList.add('displayed-img')
}

allImages.addEventListener('click', pickImage)


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', darkenImage)

function darkenImage(){
    if (displayedImage.classList.contains('filter')){
        displayedImage.classList.remove('filter')
    }else{
        displayedImage.classList.add('filter')
    }  
}
