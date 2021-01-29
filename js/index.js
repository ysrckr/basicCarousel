const carousel = document.querySelector('.carousel')
const carouselImg = document.querySelectorAll('.carousel img')
const circleOne = document.querySelector('.circle-1')
const circleTwo = document.querySelector('.circle-2')
const circleThree = document.querySelector('.circle-3')
const manuelCircleOne = document.querySelector('.manuel-circle-1')
const manuelCircleTwo = document.querySelector('.manuel-circle-2')
const manuelCircleThree = document.querySelector('.manuel-circle-3')

let counter = 1

const counterAdd = () => {
	counter++
	if (counter > 3) {
		counter = 1
	}

	carousel.style.transform = 'translateX(' + -500 * counter + 'px)'

	if (counter === 1) {
		circleOne.style.backgroundColor = 'black'
		circleTwo.style.backgroundColor = ''
		circleThree.style.backgroundColor = ''
	} else if (counter === 2) {
		circleOne.style.backgroundColor = ''
		circleTwo.style.backgroundColor = 'black'
		circleThree.style.backgroundColor = ''
	} else if (counter === 3) {
		circleOne.style.backgroundColor = ''
		circleTwo.style.backgroundColor = ''
		circleThree.style.backgroundColor = 'black'
	}
}
let autoNext = setInterval(counterAdd, 3000)

const resetNext = () => {
	clearInterval(autoNext)
	autoNext = setInterval(counterAdd, 3000)
}

manuelCircleOne.addEventListener('click', () => {
	counter = 1
	carousel.style.transform = 'translateX(' + -500 * counter + 'px)'
	resetNext()

	if (counter === 1) {
		circleOne.style.backgroundColor = 'black'
		circleTwo.style.backgroundColor = ''
		circleThree.style.backgroundColor = ''
	} else if (counter === 2) {
		circleOne.style.backgroundColor = ''
		circleTwo.style.backgroundColor = 'black'
		circleThree.style.backgroundColor = ''
	} else if (counter === 3) {
		circleOne.style.backgroundColor = ''
		circleTwo.style.backgroundColor = ''
		circleThree.style.backgroundColor = 'black'
	}
})
manuelCircleTwo.addEventListener('click', () => {
	counter = 2
	carousel.style.transform = 'translateX(' + -500 * counter + 'px)'
	resetNext()
	if (counter === 1) {
		circleOne.style.backgroundColor = 'black'
		circleTwo.style.backgroundColor = ''
		circleThree.style.backgroundColor = ''
	} else if (counter === 2) {
		circleOne.style.backgroundColor = ''
		circleTwo.style.backgroundColor = 'black'
		circleThree.style.backgroundColor = ''
	} else if (counter === 3) {
		circleOne.style.backgroundColor = ''
		circleTwo.style.backgroundColor = ''
		circleThree.style.backgroundColor = 'black'
	}
})
manuelCircleThree.addEventListener('click', () => {
	counter = 3
	carousel.style.transform = 'translateX(' + -500 * counter + 'px)'
	resetNext()
	if (counter === 1) {
		circleOne.style.backgroundColor = 'black'
		circleTwo.style.backgroundColor = ''
		circleThree.style.backgroundColor = ''
	} else if (counter === 2) {
		circleOne.style.backgroundColor = ''
		circleTwo.style.backgroundColor = 'black'
		circleThree.style.backgroundColor = ''
	} else if (counter === 3) {
		circleOne.style.backgroundColor = ''
		circleTwo.style.backgroundColor = ''
		circleThree.style.backgroundColor = 'black'
	}
})
