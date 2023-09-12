function gallery(){
    let images = ['../images/our-office-1.jpg', '../images/our-office-2.jpg', '../images/our-office-3.jpg', '../images/our-office-4.jpg', '../images/our-office-5.jpg', '../images/our-office-6.jpg']

    let outPut = `<section class="large-office">
    <div class="our-office-background">
        <div class="container">
            <div class="our-office">
                <div class="our-office-title">
                    <h1>Our Office</h1>
                </div>`



    outPut += `<div class="our-office-content">`
    images.map((image)=>{
        outPut += `<div class="our-office-images">
        <img src="${image}">
        </div>`
    })
    outPut += `</div>`

    outPut += `</div>
    </div>
    </div>
    </section>
    `
    
    return outPut;
}


let i = 0;
document.addEventListener('DOMContentLoaded', function imageSlider() {
    let slider = document.querySelectorAll('.our-office-images');
    let len = slider.length;
    for( let j = 0; j < len; j++){
                let a = slider[j].style.display = 'none';
            }
            i++;
            if (i > len){
                i = 1;
            }
            slider[i-1].style.display = 'block';
            setTimeout(imageSlider, 2000);
});

export default gallery;