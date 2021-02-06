let points = document.querySelectorAll('.div')
let sliderP = document.querySelector('#slider-item')
let colours = document.querySelectorAll('.color')
let img = sliderP.clientWidth + 16

sliderP.addEventListener('touchstart', mouseStart)
sliderP.style.marginLeft = 0 + 'px'
let word = 'transition'
let cord = sliderP.offsetLeft
let massive = []
let str = ''
let isMouseDown, cords
let countCowlour = 0
let count = img

for (let i = 0; i < points.length; i++) {
   points[i].setAttribute('id', count - img) 
   count -= img
   points[i].addEventListener('click', (e) => {
      sliderP.style.transition = 0.4 + 's'
      sliderP.style.marginLeft = points[i].id + 'px'
      setTimeout(() => sliderP.style.transition = 0 + 's', 401)
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

function mouseStart(e) {
   let coords = getCoords(sliderP);
   let shiftX = e.touches[0].screenX - coords.left;
   sliderP.addEventListener('touchmove', (e) => {
      str = sliderP.getAttribute('style')
      if (str.includes(word)) {
         str = str.slice(13, -31)
      } else {
         str = str.slice(13, -3)
      }
      if (Number(str) > 0) {
         // sliderP.style.marginLeft  = 0

         sliderP.style.marginLeft = e.touches[0].screenX - cord - shiftX + 'px'
      } else if (Number(str) <= 0) {
         sliderP.style.marginLeft = e.touches[0].screenX - cord - shiftX + 'px'
      }
   })
}



function getCoords(elem) {  
   let box = elem.getBoundingClientRect();
   return {
     left: box.left + pageXOffset
   }
}





