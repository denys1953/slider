let sliderP = document.querySelector('#slider-item')
let colours = document.querySelectorAll('.color')
let point = document.querySelector('#points')
let img = window.innerWidth
let word = 'transition'
let cord = sliderP.offsetLeft
let massive = []
let str = ''
let isMouseDown, cords
let countCowlour = 0
let count = img
sliderP.style.marginLeft = 0 + 'px'
sliderP.addEventListener('touchstart', mouseStart)
sliderP.addEventListener('touchend', mouseEnd)

for (let i = 0; i < colours.length; i++) {
   let elem = document.createElement('div')
   elem.innerHTML = ''
   elem.classList.add('div')
   point.append(elem)
}
let points = document.querySelectorAll('.div')

points[0].classList.add('active')

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
      sliderP.style.marginLeft = e.touches[0].screenX - cord - shiftX + 'px'
   })
   
}

function mouseEnd() {
   str = sliderP.getAttribute('style')
   if (str.includes(word)) str = str.slice(13, -31)
   else str = str.slice(13, -3)
   console.log(str, img)
   if (str > -(img/2) || str > 0) {
      transition()
      sliderP.style.marginLeft = 0
   } else if (str > -(img) || str > -(img*1.5)) {
      transition()
      sliderP.style.marginLeft = -img + 'px'
   } else if (str > -(img * 2) || str > -(img*2.5)) {
      transition()
      sliderP.style.marginLeft = -img*2 + 'px'
   } else if (str > -(img * 3) || str > -(img*5)) {
      transition()
      sliderP.style.marginLeft = -img*3 + 'px'
   }
}

function transition() {
   sliderP.style.transition = 0.4 + 's'
   setTimeout(() => sliderP.style.transition = 0 + 's', 401)
}

function getCoords(elem) {  
   let box = elem.getBoundingClientRect();
   return {
     left: box.left + pageXOffset
   }
}





