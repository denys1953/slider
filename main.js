let points = document.querySelectorAll('.div')
let sliderP = document.querySelector('#slider-item')
let colours = document.querySelectorAll('.color')
let coloursMassive = ['red', 'chartreuse', 'blue', 'purple', 'yellow', 'greenyellow']
let isMouseDown, cords
let countColour = 0

for (let i = 0; i < colours.length; i++) {
   colours[i].style.backgroundColor = coloursMassive[countColour]
   countColour++
}
console.log(sliderP.offsetLeft)
for (let i = 0; i < points.length; i++) {
   points[i].addEventListener('click', (e) => {
      sliderP.style.transition = 0.2 + 's'
      sliderP.style.marginLeft = points[i].id + 'px'
      setTimeout(() => sliderP.style.transition = 0 + 's', 201)
   })
}
let cord = sliderP.offsetLeft
sliderP.onmousedown = (e) => {
   let coords = getCoords(sliderP);
   let shiftX = e.pageX - coords.left;
   moveAt(e)
   function moveAt(e) {
      sliderP.style.marginLeft = e.pageX - cord - shiftX + 'px';
   }
   document.onmousemove = (e) => {
      moveAt(e);
   }
   sliderP.onmouseup = () => {
      document.onmousemove = null;
      sliderP.onmouseup = null;
   }
   sliderP.ondragstart = function() {
      return false;
   }
}
function getCoords(elem) {  
   let box = elem.getBoundingClientRect();
   return {
     left: box.left + pageXOffset
   }
}






