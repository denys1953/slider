let sliderP = document.querySelector('#slider-item')
let colours = document.querySelectorAll('.color')
let point = document.querySelector('#points')
let img = window.innerWidth 
let word = 'transition'
let arrCount = 1
let arrCount2 = 3.5
let arr = [img/2, img*0]
let arr2 = [img*1.5, img*2.5]
let str = ''
let count = img
sliderP.style.marginLeft = 0 + 'px'

for (let i = 0; i < colours.length - 2; i++) {
   arr.push(img * arrCount)
   arr2.push(img * arrCount2)
   arrCount++;arrCount2++
}

for (let i = 0; i < colours.length; i++) {
   let elem = document.createElement('div')
   elem.innerHTML = ''
   elem.classList.add('div')
   point.append(elem)
}
console.log(colours[0].alt)
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
      sliderP.style.marginLeft = e.touches[0].screenX - shiftX + 'px'
   })
   
}
function mouseEnd() {
   str = sliderP.getAttribute('style')
   if (str.includes(word)) str = str.slice(13, -31)
   else str = str.slice(13, -3)

   for (let i = 0; i < colours.length + 1; i++) {
      for (let i = 0; i < points.length; i++) {
         points[i].classList.remove('active')
      }
      if (str > -(arr[i]) || str > -(arr2[i-1])) {
         if (i > colours.length - 1) i-- 
         transition()
         sliderP.style.marginLeft = -(img * i) + 'px'
         points[i].classList.add('active')
         return
      } 
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
sliderP.addEventListener('touchstart', mouseStart)
sliderP.addEventListener('touchend', mouseEnd)
