class Carousel {
    constructor(button){
        this.button = button;
        this.imgs = document.querySelectorAll('div.carousel img');
        this.currentImg = 0;
        this.imgs[0].classList.add('img-shown');
        this.button.addEventListener('click', ()=> this.leftRight())
        console.log(this.currentImg);
    }
    leftRight(){
        // hide all images
        this.imgs.forEach( img => {
            img.classList.remove('img-shown');
        });
        // Method 1
        // if left button pressed, go back one image in the node list
        if(this.button.classList.value === 'left-button'){
            this.currentImg = this.currentImg - 1;
            if(this.currentImg < 0){
                this.currentImg = this.imgs.length -1;
            }
            console.log(this.currentImg);
            this.imgs[this.currentImg].classList.add('img-shown');
        } else if(this.button.classList.value === 'right-button') {
            this.currentImg = this.currentImg + 1;
            if(this.currentImg >= this.imgs.length){
                this.currentImg = 0;
            }
            console.log(this.currentImg);
            this.imgs[this.currentImg].classList.add('img-shown');
        }
        // METHOD 2
        // if(this.button.classList.value === 'right-button'){
        //     this.imgs[this.currentImg].classList.add('img-shown');
        // }
    }
}

let carouselDivs = document.querySelectorAll('div.carousel div');

carouselDivs.forEach( button => {
    return new Carousel(button)
});
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
