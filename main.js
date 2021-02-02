let points = document.querySelectorAll('.div')
let sliderP = document.querySelector('#slider-item')
let colours = document.querySelectorAll('.color')
let img = document.getElementById('img').clientWidth
// let coloursMassive = ['red', 'chartreuse', 'blue', 'purple', 'yellow', 'greenyellow']
let massive = []
let str = ''
let isMouseDown, cords
let countColour = 0
let count = img
console.log(img)

// for (let i = 0; i < colours.length; i++) {
//    colours[i].style.backgroundColor = coloursMassive[countColour]
//    countColour++
// }

for (let i = 0; i < points.length; i++) {
   points[i].setAttribute('id', count - img) 
   count -= img
   points[i].addEventListener('click', (e) => {
      sliderP.style.transition = 0.2 + 's'
      sliderP.style.marginLeft = points[i].id + 'px'
      setTimeout(() => sliderP.style.transition = 0 + 's', 201)
      if (points[i].classList.contains('active')) {
         for (let j = 0; j < points.length; j++) {
            points[j].classList.remove('active')
         }
         points[i].classList.add('active')
      } else {
         for (let j = 0; j < points.length; j++) {
            points[j].classList.remove('active')
         }
         points[i].classList.add('active')
      }
   })
}
let cord = sliderP.offsetLeft

sliderP.addEventListener('touchstart', mouseStart)
sliderP.style.marginLeft = 0 + 'px'
function mouseStart(e) {
   let marginLeft = sliderP.style.marginLeft
   let coords = getCoords(sliderP);
   let shiftX = e.touches[0].screenX - coords.left;
   massive.length = 0
   for (let i = 0; i < marginLeft.length; i++) {
      massive.push(marginLeft[i])
   }
   massive.splice(-2, 2)
   str = ''
   for (let i = 0; i < massive.length; i++) {
      str+=massive[i]
   }
   if (Number(str) > 0) {
      sliderP.style.marginLeft = 0
   }
   sliderP.addEventListener('touchmove', (e) => {
      if (Number(str) <= 0) {
         sliderP.style.marginLeft = e.touches[0].screenX - cord - shiftX + 'px'
      } else {
         sliderP.style.marginLeft  = 0
      }
   })
   sliderP.addEventListener('touchend', () => {
      if (Number(str) > 0) {
         sliderP.style.marginLeft  = 0
      }
   })
}

function getCoords(elem) {  
   let box = elem.getBoundingClientRect();
   return {
     left: box.left + pageXOffset
   }
}





