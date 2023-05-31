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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function colorPixel (state) {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        let count = 0;
        pixel.addEventListener('mouseover', function (e) {
            if(e.buttons == 1 || e.buttons == 3){
                switch (state) {
                    case 'rainbow':
                        randomColor = Math.floor(Math.random()*16777215).toString(16);
                        this.style.backgroundColor = "#" + randomColor;
                        break;
                    case 'shading':
                        if (count<10) {
                            count++;
                            let rgb = 255-255*count/10;
                            this.style.backgroundColor = `rgb(${rgb},${rgb},${rgb})`;
                        } else {
                            this.style.backgroundColor = "black";
                        }
                        break;
                    case 'eraser':
                        this.style.backgroundColor = "white";
                        break;
                    default:
                        this.style.backgroundColor = "black";
                        break;
                }
            }
        })
    })
}

const slider = document.getElementById("resolutionSlider");
const output = document.getElementById("resolutionOutput");
output.innerHTML = `${slider.value} &times ${slider.value}`; // Display the default slider value

const selectState = document.getElementById('selectState');
let state = selectState.value;
selectState.addEventListener('change', () => {
    colorPixel(selectState.value);
})

slider.addEventListener("input", function () {
    output.innerHTML = `${this.value} &times ${this.value}`;
    removeAllChildNodes(canvas);
    generateGrid(slider.value,500)
    colorPixel(state);
})

generateGrid(slider.value,500);
colorPixel(state);

