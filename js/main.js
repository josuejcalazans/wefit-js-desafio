const changeVerticalMenuToHorizontalMenu = () => {
  const divMenu = document.querySelector('.btn-group-vertical')
  divMenu.setAttribute('class', 'btn-group-horizontal')
  divMenu.setAttribute('aria-label', 'Horizontal button group')
}

const changeHeaderButtonColor = () => {
  const buttonHeader = document.querySelector('a.btn.btn-primary.btn-lg')
  buttonHeader.classList.remove('btn-primary')
  buttonHeader.classList.add('btn-success')
}

const changeHeaderPositioning = () => {
  const header = document.querySelector('.jumbotron')
  header.classList.add('text-right')
  header.style.cssText = `
    background-color: var(--gray);
    color: var(--white);
  `
}

const headerCanges = () => {
  changeHeaderButtonColor()
  changeHeaderPositioning()
}

const addTitleDataset = (nodeList) => {
  nodeList.forEach((title) => {
    const nearCard = title.closest('div.card');
    nearCard.dataset['title'] = title.textContent;
  })
}

const changeColorButtonCard = (dataTitle) => {
  const button = document.querySelector(`[data-title="${dataTitle}"] .btn-primary`);
  button.classList.remove('btn-primary');
  button.classList.add('btn-success');
}

const putBefore = (nodeList, from, to) => {
  const parent = nodeList[to].offsetParent.parentElement
  parent.insertBefore(
    nodeList[from].offsetParent,
    nodeList[to].offsetParent,
  )
}

const alterCardOrder = () => {
  const cards = document.querySelectorAll('.card');
  putBefore(cards, 3, 0)
  putBefore(cards, 2, 1)
}

const changeInCardOrdering = () => {
  alterCardOrder()
  
  const cardsTitle = document.querySelectorAll('.card-title');
  addTitleDataset(cardsTitle)
  changeColorButtonCard('Animais')
}

const newLi = ({ text, isActive = false }) => {
  const contentText = document.createTextNode(text)
  
  const li = document.createElement('li')
  li.classList.add('list-group-item')

  if (isActive) {
    li.classList.add('active')
  }

  li.appendChild(contentText)

  return li
}



const changeList = () => {
    const liActive = document.querySelector('li.active')
  liActive.classList.remove('active')

  const ul = document.querySelector('ul.list-group')
  const fourthLi = newLi({ text: 'Quarto item', isActive: true })
  const fifthLi = newLi({ text: 'Quinto item' })

  ul.appendChild(fourthLi)
  ul.appendChild(fifthLi)
}

changeVerticalMenuToHorizontalMenu()
headerCanges()
changeInCardOrdering()
changeList()