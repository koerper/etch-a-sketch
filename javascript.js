const canvas = document.querySelector('.canvas');

function generateGrid (numElements,size) {
    for (let i=0; i<numElements; i++) {
        const row = document.createElement('div');
        row.classList.add = "row";
        for  (let j=0; j<numElements; j++) {
            const pixel = document.createElement('div');
            let pixelSize = size/numElements;
            pixel.style.width = pixelSize + "px";
            pixel.style.height = pixelSize + "px";
            pixel.classList.add('pixel');
            
            row.appendChild(pixel);
        }
        canvas.appendChild(row);
    }
}

generateGrid(16,500);

const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', function (e) {
        if(e.buttons == 1 || e.buttons == 3){
            this.classList.add('hovered');
            // pixel.style.backgroundColor = 'black';
        }
    })
})

// const slider = document.getElementById("resolutionSlider");
// const output = document.getElementById("resolutionOutput");
// output.innerHTML = `${slider.value} &times ${slider.value}`; // Display the default slider value


// slider.addEventListener("change", function () {
//     output.innerHTML = `${this.value} &times ${this.value}`;
//     // canvas.forEach(pixel => pixel.remove());
//     generateGrid(slider.value,500)
// })