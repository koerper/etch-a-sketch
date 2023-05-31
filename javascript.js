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
        pixel.addEventListener('mouseover', function (e) {
            if(e.buttons == 1 || e.buttons == 3){
                switch (state) {
                    case 'rainbow':
                        randomColor = Math.floor(Math.random()*16777215).toString(16);
                        this.style.backgroundColor = "#" + randomColor;
                        break;
                    case 'shade':
                        break;
                    case 'eraser':
                        break;
                    default:
                        this.classList.add('hovered');
                        break;
                }
            }
        })
    })
}

const slider = document.getElementById("resolutionSlider");
const output = document.getElementById("resolutionOutput");
output.innerHTML = `${slider.value} &times ${slider.value}`; // Display the default slider value


slider.addEventListener("input", function () {
    output.innerHTML = `${this.value} &times ${this.value}`;
    removeAllChildNodes(canvas);
    generateGrid(slider.value,500)
    colorPixel('rainbow');
})

generateGrid(slider.value,500);
colorPixel();
