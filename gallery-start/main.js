const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// array all images
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

// add images to the thumb bar
for(const image of images) {

    const imagesEle = document.createElement('img');

    imagesEle.setAttribute('src', `images/${image}`);

    thumbBar.appendChild(imagesEle);

    imagesEle.classList.add('imgs');

    imagesEle.addEventListener('click', ele =>{

        displayedImage.src = ele.target.src;

        console.log(displayedImage.src)
        
    });
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
