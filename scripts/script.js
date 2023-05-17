// Fetch data from data.JSON
const getData = async (num, para) => {
  const response = await fetch('./scripts/data.json')
  const jsResonse = await response.json()
  const data = jsResonse[num][para]
  return data
}

// Get Parent Container
const parentContainer = document.querySelector('.container-actions')

// Function to create button elements
function createButtons(className) {
  const newButton = document.createElement('div')
  newButton.classList.add('buttons')
  newButton.classList.add(className)
  // newButton.innerHTML = 'Test content'
  return newButton
}

// Creating the button variables
const buttonOne = createButtons('button-one')
const buttonTwo = createButtons('button-two')
const buttonThree = createButtons('button-three')
const buttonFour = createButtons('button-four')

// Appending the button variables on the parent container
parentContainer.appendChild(buttonOne)
parentContainer.appendChild(buttonTwo)
parentContainer.appendChild(buttonThree)
parentContainer.appendChild(buttonFour)

// Function to create media container in buttons
function createMedia() {
  const newMedia = document.createElement('div')
  newMedia.classList.add('container-media')
  return newMedia
}

// Creating media containers
const buttonOneMedia = createMedia()
const buttonTwoMedia = createMedia()
const buttonThreeMedia = createMedia()
const buttonFourMedia = createMedia()

// Appending media container on parent button container
buttonOne.appendChild(buttonOneMedia)
buttonTwo.appendChild(buttonTwoMedia)
buttonThree.appendChild(buttonThreeMedia)
buttonFour.appendChild(buttonFourMedia)

// Function to create icons
function createIcon() {
  const newIcon = document.createElement('img')
  newIcon.setAttribute('alt', '#')
  return newIcon
}

// Create icons
const buttonOneIcon = createIcon()
const buttonTwoIcon = createIcon()
const buttonThreeIcon = createIcon()
const buttonFourIcon = createIcon()

// Append icons on media container
buttonOneMedia.appendChild(buttonOneIcon)
buttonTwoMedia.appendChild(buttonTwoIcon)
buttonThreeMedia.appendChild(buttonThreeIcon)
buttonFourMedia.appendChild(buttonFourIcon)

// Map icons from JSON
async function mapIcon(element, num) {
  element.src = await getData(num, 'icon')
}

mapIcon(buttonOneIcon, 0)
mapIcon(buttonTwoIcon, 1)
mapIcon(buttonThreeIcon, 2)
mapIcon(buttonFourIcon, 3)

// Function to create action paragraphs
function createAction(className) {
  const newPara = document.createElement('p')
  newPara.classList.add('media-action')
  newPara.classList.add(className)
  return newPara
}

// Create action paragraphs
const buttonOneAction = createAction('media-action-one')
const buttonTwoAction = createAction('media-action-two')
const buttonThreeAction = createAction('media-action-three')
const buttonFourAction = createAction('media-action-four')

// Apend action paragraphs on media container
buttonOneMedia.appendChild(buttonOneAction)
buttonTwoMedia.appendChild(buttonTwoAction)
buttonThreeMedia.appendChild(buttonThreeAction)
buttonFourMedia.appendChild(buttonFourAction)

// Map action paragraphs from JSON
async function mapPara(element, num) {
  element.innerHTML = await getData(num, 'category')
}

mapPara(buttonOneAction, 0)
mapPara(buttonTwoAction, 1)
mapPara(buttonThreeAction, 2)
mapPara(buttonFourAction, 3)

// Function to create numbers container in buttons
function createNumbersContainer() {
  const newNumCon = document.createElement('div')
  newNumCon.classList.add('container-numbers')
  return newNumCon
}

// Creating numbers containers
const buttonOneNumbers = createNumbersContainer()
const buttonTwoNumbers = createNumbersContainer()
const buttonThreeNumbers = createNumbersContainer()
const buttonFourNumbers = createNumbersContainer()

// Appending numbers container on parent button container
buttonOne.appendChild(buttonOneNumbers)
buttonTwo.appendChild(buttonTwoNumbers)
buttonThree.appendChild(buttonThreeNumbers)
buttonFour.appendChild(buttonFourNumbers)

// Function to create number 1
function createNumOne() {
  const newNum = document.createElement('p')
  newNum.classList.add('numbers-one')
  return newNum
}

// Create numbers 1
const buttonOneNumOne = createNumOne()
const buttonTwoNumOne = createNumOne()
const buttonThreeNumOne = createNumOne()
const buttonFourNumOne = createNumOne()

// Append numbers on numbers container
buttonOneNumbers.appendChild(buttonOneNumOne)
buttonTwoNumbers.appendChild(buttonTwoNumOne)
buttonThreeNumbers.appendChild(buttonThreeNumOne)
buttonFourNumbers.appendChild(buttonFourNumOne)

// Map numbers from JSON
async function mapNumbersOne(element, num) {
  element.innerHTML = await getData(num, 'score')
}

mapNumbersOne(buttonOneNumOne, 0)
mapNumbersOne(buttonTwoNumOne, 1)
mapNumbersOne(buttonThreeNumOne, 2)
mapNumbersOne(buttonFourNumOne, 3)

// Function to create number 2
function createNumTwo() {
  const newNum = document.createElement('p')
  newNum.innerHTML = '/ 100'
  newNum.classList.add('numbers-two')
  return newNum
}

// Create numbers 2
const buttonOneNumTwo = createNumTwo()
const buttonTwoNumTwo = createNumTwo()
const buttonThreeNumTwo = createNumTwo()
const buttonFourNumTwo = createNumTwo()

// Append numbers on numbers container
buttonOneNumbers.appendChild(buttonOneNumTwo)
buttonTwoNumbers.appendChild(buttonTwoNumTwo)
buttonThreeNumbers.appendChild(buttonThreeNumTwo)
buttonFourNumbers.appendChild(buttonFourNumTwo)
